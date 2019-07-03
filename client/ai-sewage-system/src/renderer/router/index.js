import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login-page',
      component: require('@/components/page/login').default
    },
    {
      path: '/404',
      name: 'page404',
      component: require('@/components/page/404').default
    },
    {
      path: '/main',
      name: 'vMain',
      redirect: '/map',
      component: require('@/components/common/main').default,
      children: [
        {
          path: '/map',
          name: 'vMap',
          component: require('@/components/page/map').default
        },
        {
          path: '/test',
          name: 'vTest',
          component: require('@/components/page/test').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
