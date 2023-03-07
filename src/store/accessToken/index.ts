import { actions } from './actions'
import { getters } from './getters'
import { state } from './state'
import { mutations } from './mutations'

export const accessToken = {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
