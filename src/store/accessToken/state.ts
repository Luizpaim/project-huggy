import type { IResponseGetAccessToken } from '@/services'

export interface IState {
  token: IResponseGetAccessToken | null
}

export const state: IState = {
  token: null
}
