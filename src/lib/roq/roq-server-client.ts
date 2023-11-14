
import { RoqBaasSdk } from "./roq-baas-sdk"
import { Platform } from '@roq/nodejs'
import { cookies } from 'next/headers'

export type ExtendedPlatform = Omit<Platform, 'asUser'> & {
  asUser(): ReturnType<Platform['asUser']>
}

export class RoqServerClient {
  private backendHost: string
  public roqPlatform: ExtendedPlatform
  private authStorage: Record<string, string>

  constructor(authStorage: Record<string, string>) {
    this.backendHost = process.env.ROQ_API_URL || '';
    this.authStorage = authStorage
    const roqPlatform = new Platform({
      host: process.env.ROQ_PLATFORM_URL || '',
      environmentId: process.env.ROQ_ENVIRONMENT_ID || '',
      apiKey: process.env.ROQ_API_KEY || '',
    });
    const base64UrlDecode = (str: string ) => {
      str = str.replace(/-/g, '+').replace(/_/g, '/');
      while (str.length % 4) {
          str += '=';
      }
      return Buffer.from(str, 'base64').toString();
    }
    const decodeJWT = (jwt: string) => {
      const parts = jwt.split('.');
      if (parts.length !== 3) {
        throw new Error('The JWT is not correctly formatted');
      }
      const header = JSON.parse(base64UrlDecode(parts[0]));
      const payload = JSON.parse(base64UrlDecode(parts[1]));
      const signature = parts[2];

      return {
        header,
        payload,
        signature
      };
    }
    const asUser = () => {
      const { payload } = decodeJWT(authStorage['roq-session-token'])
      return roqPlatform.usingToken(payload.roqAccessToken)
    }
    this.roqPlatform = Object.assign(roqPlatform, { asUser })
  }

  public asUser() {
    return new RoqBaasSdk(this.backendHost, {
      getAccessToken: () => {
        return Promise.resolve(`Bearer ${this.authStorage['roq-session-token']}`)
      },
    })
  }

  public asSuperAdmin() {
    return new RoqBaasSdk(this.backendHost, {
      getAccessToken: () => Promise.resolve(`Basic ${Buffer.from(`${process.env.ROQ_ENVIRONMENT_ID}:${process.env.ROQ_API_KEY}`).toString('base64')}`)
    })
  }
}

export const createServerClient = (backendHost?: string, platformHost?: string) => {
  const cookiesStorage = cookies()
  return new RoqServerClient({
    'roq-session-token': cookiesStorage.get('roq-session-token')?.value!
  })
}

export const defaultRoqServerClient = createServerClient()