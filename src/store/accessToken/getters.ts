import type { GetterTree } from 'vuex'
import type { IState } from './state'

export const getters: GetterTree<IState, any> = {
  hasToken: (state: IState) => !!state.token
}
