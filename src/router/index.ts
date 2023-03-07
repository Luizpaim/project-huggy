import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import loginRoutes from './login.routes'
import listContactsRoutes from './listContacts.routes'
import beforeEach from './middlewares/beforeEach'

const routes: Array<RouteRecordRaw> = [...loginRoutes, ...listContactsRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach(beforeEach);
export default router
