import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页路由
    {
      path: '',
      component: Home,
      children: [
        // 首页默认页面
        {
          path: '/myhome',
          component: () => import('./views/myhome.vue')
        },
        // 首页学习模块
        {
          path: '/mystudy',
          component: () => import('./views/mystudy.vue')
        },
        // 首页账户模块
        {
          path: '/myacount',
          component: () => import('./views/myacount.vue')
        },
        {
          path: '',
          component: () => import('./views/myhome.vue')
        }
      ]
    },
    // 搜索模块
    {
      path: '/mysearch',
      component: () => import('./views/mystudy.vue')
    },
    // 登录注册模块
    {
      path: '/mysign',
      component: () => import('./views/mysign.vue')
    }
  ]
})
