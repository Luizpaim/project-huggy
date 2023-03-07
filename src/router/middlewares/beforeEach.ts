import { GetLocalToken } from '@/modules-local-storage'
import store from '@/store'
import type { NavigationGuardNext, RouteLocation } from 'vue-router'

export default async (to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) => {
  document.title = `${to.name?.toString()} - Huggy`

  if (to.name !== 'Entrar' && !store.getters['accessToken/hasToken']) {
    await store
      .dispatch('accessToken/ActionCheckToken')
      .then(() => {
        next()
      })
      .catch((error) => {
        next({ name: 'Entrar' })
      })
  } else {
    if (to.name === 'Entrar' && GetLocalToken()) {
      next({ name: 'Contatos' })
    } else {
      next()
    }
  }
}
