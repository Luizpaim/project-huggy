import { ApiSistem } from '../accessToken/ApiSistem'

export interface IRequestGetAccessToken {
  grant_type: string
  redirect_uri: string
  client_id: string
  client_secret: string
  code: string
}
export interface IResponseGetAccessToken {
  expires_in: number
  access_token: string
}

export class AccessToken extends ApiSistem {
  constructor() {
    super()
  }

  public async get(payload: IRequestGetAccessToken): Promise<IResponseGetAccessToken> {
    const { data } = await this.api.post(`/auth`, payload)

    return data.result
  }
}
