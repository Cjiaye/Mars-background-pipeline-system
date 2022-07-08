import { createRouter, createWebHashHistory } from 'vue-router'
// import approve from './modules/approve'
// import dept from './modules/dept'
// import leave from './modules/leave'
// import menu from './modules/menu'
// import role from './modules/role'
// import user from './modules/user'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/home')
      },
      {
        path: '/system-user',
        name: 'system-user',
        component: () => import('../views/system-user')
      },
      {
        path: '/system-menu',
        name: 'system-menu',
        component: () => import('../views/system-menu')
      },
      {
        path: '/system-dept',
        name: 'system-dept',
        component: () => import('../views/system-dept')
      },
      {
        path: '/system-role',
        name: 'system-role',
        component: () => import('../views/system-role')
      },
      {
        path: '/audit-leave',
        name: 'audit-leave',
        component: () => import('../views/audit-leave')
      },
      {
        path: '/audit-approve',
        name: 'audit-approve',
        component: () => import('../views/audit-approve')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404')
  }
]
export const privateRoutes = []
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
