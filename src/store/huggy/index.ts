import { actions } from './actions'
import { state } from './state'
import { mutations } from './mutations'

export const huggy = {
  state,
  actions,
  mutations,
  namespaced: true
}
