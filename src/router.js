import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import store from './store/home'

Vue.use(Router)

const routes = [
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
        component: () => import('./views/mystudy.vue'),
        meta: {
          needLogin: true
        }
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
  },
  {
    // 购物车
    path: '/cart',
    component: () => import('./views/acountlist/cart.vue')
  },
  {
    // 商品购买模块
    path: '/shopping',
    component: () => import('./views/acountlist/shopping.vue')
  },
  {
    path: '/myzhuce',
    component: () => import('./views/myzhuce.vue')
  },
  {
    // 登录页面
    path: '/mylogin',
    component: () => import('./views/mylogin.vue')
  },
  {
    // 登录页面
    path: '/order',
    component: () => import('./views/acountlist/order.vue')
  }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  // 判断将要去的路由是否需要登录状态
  if (to.meta.needLogin) {
    // 登录状态的校验

    if (store.state.user.userInfo) {
      // 放行
      next()
    } else {
      // 不存在，去登录
      next({
        path: '/mylogin',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
