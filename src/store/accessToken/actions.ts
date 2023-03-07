import type { ActionContext } from 'vuex'
import { SET_TOKEN } from './mutationsType'

import { AccessToken, type IRequestGetAccessToken } from '@/services'
import type { IState } from './state'
import { GetLocalToken } from '@/modules-local-storage'
import router from '@/router'

const accessToken = new AccessToken()

export const actions = {
  ActionAccessToken: async (
    { commit }: ActionContext<IState, any>,
    payload: IRequestGetAccessToken
  ) =>
    await accessToken
      .get(payload)
      .then((result) => commit(SET_TOKEN, result))
      .catch(() => {
        commit(SET_TOKEN, null)
      }),

  ActionCheckToken: async () => {
    const auth = GetLocalToken()
    if (auth) {
      const now = new Date().getTime()
      if (now > auth.expires_in) {
        router.push({ path: '/auth/expires' })
      } else {
        return auth
      }
    } else {
      router.push({ path: '/auth' })
    }
  }
}
