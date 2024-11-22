/*
utility to help determine if document.domain should be injected, or related logic invoked
this class isn't necessarily network related, but it is used from a wide ranging number
of packages. It should probably be its own ./package. for now, it's sort of a facade for all
of this logic, which should help inform a subsequent refactor strategy.

  behaviors controlled:
  - how to key origins of RemoteStates (server/lib/remote_states)
  - whether to inject document.domain in the server render of top (server/lib/controllers/files)
  - whether to inject document.domain in proxied files (proxy/lib/http/response-middleware)
  - how to verify stack traces of privileged commands in chrome
*/

//TODO: determine what to do about /cors
import Debug from 'debug'
import { isString, isEqual } from 'lodash'
import { getSuperDomainOrigin, getSuperDomain, parseUrlIntoHostProtocolDomainTldPort, Policy } from './cors'
import type { ParsedHostWithProtocolAndHost } from './types'

const debug = Debug('cypress:network:document-domain-injection')

export class DocumentDomainInjection {
  constructor (
    private config: { injectDocumentDomain?: boolean, testingType?: 'e2e' | 'ct' },
  ) {}

  private get policy (): Policy {
    return this.config.injectDocumentDomain ? 'same-super-domain-origin' : 'same-origin'
  }

  // primarily used by `packages/server/lib/remote_states` to determine ??
  public getOrigin (url: string) {
    if (this.config.injectDocumentDomain || url.includes('localhost')) {
      return getSuperDomainOrigin(url)
    }

    return new URL(url).origin
  }

  public getHostname (url: string) {
    if (this.config.injectDocumentDomain || url.includes('localhost')) {
      debug('Hostname returning superdomain. Config %s url %s includes localhost? %s', this.config.injectDocumentDomain, url, url.includes('localhost'))

      return getSuperDomain(url)
    }

    debug('hostname returning URL hostname')

    return new URL(url).hostname
  }

  public urlsMatch (frameUrl: string | ParsedHostWithProtocolAndHost, topUrl: string | ParsedHostWithProtocolAndHost): boolean {
    const frameProps = isString(frameUrl) ? parseUrlIntoHostProtocolDomainTldPort(frameUrl) : frameUrl
    const topProps = isString(topUrl) ? parseUrlIntoHostProtocolDomainTldPort(topUrl) : topUrl

    debug('urlsMatch %', { frameUrl, topUrl })
    const derivedPolicy: Policy = (topProps.tld?.includes('localhost') || frameProps.tld?.includes('localhost')) ?
      'same-super-domain-origin' : this.policy

    debug('urlsMatch derived policy:', derivedPolicy)
    switch (derivedPolicy) {
      case 'same-origin':
        return isEqual(frameProps, topProps)
      case 'same-super-domain-origin':
      case 'schemeful-same-site': {
        const { port: framePort, subdomain: frameSubdomain, ...parsedFrameUrl } = frameProps
        const { port: topPort, subdomain: topSubdomain, ...parsedTopUrl } = topProps

        const doPortsPassSameSchemeCheck = this.policy === 'same-super-domain-origin' ?
          framePort === topPort : // ports have to match precisely with same-super-domain-origin
          (framePort === topPort) || (framePort !== '443' && topPort !== '443') // schemeful-same-site needs them to match, unless neither are https

        return doPortsPassSameSchemeCheck && isEqual(parsedFrameUrl, parsedTopUrl)
      }
      default:
        return false
    }
  }

  public shouldSetDomainForUrl (url: string | undefined): boolean {
    if (!url) {
      return false
    }

    // localhost is special, and we need to always set documen domain for
    // localhost pages
    if (url.includes('localhost')) {
      return true
    }

    return this.config.testingType === 'e2e' && this.config.injectDocumentDomain
  }
}
