import { SetLocalToken } from '@/modules-local-storage'
import type { MutationTree } from 'vuex'
import { SET_TOKEN } from './mutationsType'
import type { IState } from './state'

export const mutations: MutationTree<IState> = {
  [SET_TOKEN](state, response) {
    if (response) {
      state.token = response
      SetLocalToken(response)
    }
  }
}
