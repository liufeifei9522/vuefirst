import Vue from 'vue'
import Router from 'view-router'

Vue.use(Router)

export const Routes=[
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]

export default Routes
