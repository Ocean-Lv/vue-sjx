import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import ShowTest from '@/components/test/childParent01/Index.vue'
import ShowSlots from '@/components/test/slots01/Index.vue'
import ShowNodes from '@/components/test/ShowNodes01/Index.vue'
import Tree from '@/components/test/tree01/Index.vue'
import RouterIndex from '@/components/test/router02/Index.vue'
import RouterList from '@/components/test/router02/RouterList.vue'
import RouterDetail from '@/components/test/router02/RouterDetail.vue'
import Validate from '@/components/test/validate01/Index.vue'
import Svg from '@/components/test/svgPlug06/Index.vue'
import Siderbar from '@/components/test/sidebar06/Index.vue'




Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  //login.js get token，axios将取得的router，commit vuex state. 参考：@/views/login.vue
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/showTest',
      name: 'showTest',
      component: ShowTest,
    },
    {
      path: '/showSlots',
      name: 'showSlots',
      component: ShowSlots
    },
    {
      path: '/showNodes',
      name: 'showNodes',
      component: ShowNodes
    },
    {
      path: '/tree',
      name: 'tree',
      component: Tree
    },
    {
      path: '/router',
      name: 'router',
      component: RouterIndex,
      children: [
        {
          path: 'list',
          name: 'list',
          component: RouterList,
          meta: { requiresAuth: true }    //路由记录
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: RouterDetail,
          props: true   //将参数id，变成属性，传入页面
        },
      ]
    },
    {
      path: '/validate',
      name: 'validate',
      component: Validate
    },
    {
      path: '/svg',
      name: 'svg',
      component: Svg
    },
    {
      path: '/siderbar',
      name: 'siderbar',
      component: Siderbar
    },
  ]
});


//路由守卫
router.beforeEach((to, from, next) => {
  //localstorage get tooken
  let hasToken = false;
  if(to.meta.requiresAuth && !hasToken) {
    if(window.confirm("请登录")) {
      hasToken = true;
      next();
    } else{
      next("/")
    }
  } else {
    next();
  }
});
/**
 * 守卫级别： 全局/路由级别(路由独享的守卫)/组件内的守卫(写在组件里)
 *  router.beforeEach/beforeEnter/beforeRouteEnter
 * 动态获取路由(数据必须为：数组)
 *  router.addRoutes(routes: Array<RouteConfig>)
 *  router.addRoutes(router.routes)
 */


export default router;
