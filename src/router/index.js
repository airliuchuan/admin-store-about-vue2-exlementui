import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home/workbench/todo',
      hidden: true
    },
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/views/login/login.vue'),
      hidden: true
    },
    {
      path: '/home',
      name: '主页',
      component: () => import('@/layout/header.vue'),
      redirect: '/home/workbench/todo',
      children: [
        {
          path: '/home/workbench',
          name: '工作台',
          component: () => import('@/layout/main.vue'),
          redirect: '/home/workbench/todo',
          children: [
            {
              path: 'todo',
              name: '待办事宜',
              component: () => import('@/views/home/workbench/todo/todo.vue')
            },
            {
              path: 'hasdone',
              name: '已办事宜',
              component: () => import('@/views/home/workbench/has-done/has-done.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/mall',
      name: '商城系统',
      component: () => import('@/layout/header.vue'),
      redirect: '/mall/mobile/base',
      children: [
        {
          path: '/mall/mobile',
          name: '移动平台管理',
          component: () => import('@/layout/main.vue'),
          redirect: '/mall/mobile/base',
          children: [
            {
              path: 'base',
              name: '基础管理',
              component: () => import('@/views/mall-sys/mobile/base/base.vue')
            }
          ]
        },
        {
          path: '/mall/commodity',
          name: '商品管理',
          component: () => import('@/layout/main.vue'),
          redirect: '/mall/commodity/goodslist',
          children: [
            {
              path: 'goodslist',
              name: '商品列表',
              component: () => import('@/views/mall-sys/commodity-management/goods-list/goods-list.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/partner',
      name: '合伙人系统',
      component: () => import('@/layout/header.vue')
    },
    {
      path: '/store',
      name: '店铺系统',
      component: () => import('@/layout/header.vue')
    },
    {
      path: '/service',
      name: '客服系统',
      component: () => import('@/layout/header.vue')
    },
    {
      path: '/finance',
      name: '财务系统',
      component: () => import('@/layout/header.vue')
    },
    {
      path: '/warehouse',
      name: '仓库系统',
      component: () => import('@/layout/header.vue')
    },
    {
      path: '/statistics',
      name: '数据统计',
      component: () => import('@/layout/header.vue')
    }
  ]
})
