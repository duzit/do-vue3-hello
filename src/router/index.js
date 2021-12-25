import {
  createRouter, createWebHistory
} from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   name: '/',
  //   component: () => import('@/App.vue')
  // },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard.vue')
  },
  {
    path: '/capi',
    name: 'capi',
    component: () => import('@/views/features/capi.vue')
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('@/views/features/update.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router