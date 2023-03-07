import { createStore } from 'vuex'

import { accessToken } from './accessToken'
import { huggy } from './huggy'

export default createStore({
  modules: {
    accessToken,
    huggy
  }
})
