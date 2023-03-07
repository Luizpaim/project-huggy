export default [
  {
    path: '/auth/:expires?',
    name: 'Entrar',
    component: () => import('@/pages/1-Login/Login.vue')
  }
]
