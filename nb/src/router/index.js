import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import footer from '@/components/footer/footer'
import my from '@/components/my/my'
import pet from '@/components/pet/pet'
import index from '@/components/index/index'
Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer,
      children:[
        {
          path: 'my',
          name: 'my',
          component: my,
          meta: { checkLogined: true },
        },
        {
          path: 'pet',
          name: 'pet',
          component: pet,
          meta: { checkLogined: true },
        },
        {
          path: 'index',
          name: 'index',
          component: index,
          meta: { checkLogined: true },
        },
      ]
    }
  ]
})
