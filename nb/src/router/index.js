import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import footer from '@/components/footer/footer'
import my from '@/components/my/my'
import pinform from '@/components/my/my_head/pinform'
import drole from '@/components/my/my_head/drole'
import settings from '@/components/my/settings/settings'
import funnymode from '@/components/my/settings/funnymode'
import idsafe from '@/components/my/settings/idsafe'
import privacy from '@/components/my/settings/privacy/privacy'
import on from '@/components/my/settings/on'
import switchid from '@/components/my/settings/switchid'
import ppolicy from '@/components/my/settings/privacy/ppolicy'
import run_data_detail from '@/components/my/run_data_detail'
import rank_list from '@/components/my/rank_list'

import pet from '@/components/pet/pet'
import gpet from '@/components/gpet/gpet'



import index from '@/components/index/index'
import run from '@/components/run/run'

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
          children:[
            {
              path: 'gpet',
              name: 'gpet',
              component: gpet,
            },
          ],
        
        },
       
        {
          path: 'index',
          name: 'index',
          component: index,
          meta: { checkLogined: true },
          children:[
            {
              path: 'run',
              name: 'run',
              component: run
            },
          ]
        },
      ]
    },
    
    {
      path: '/pinform',
      name: 'pinform',
      component: pinform,
    },
    {
      path: '/drole',
      name: 'drole',
      component: drole,
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings,
    },
    {
      path: '/funnymode',
      name: 'funnymode',
      component: funnymode,
    },
    {
      path: '/idsafe',
      name: 'idsafe',
      component: idsafe,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy,
    },
    {
      path: '/on',
      name: 'on',
      component: on,
    },
    {
      path: '/ppolicy',
      name:'ppolicy',
      component: ppolicy,
    },
    {
      path: '/switchid',
      name: 'switchid',
      component: switchid,
    },
    {
      path: '/run_data_detail',
      name: 'run_data_detail',
      component: run_data_detail,
    },
    {
      path: '/rank_list',
      name: 'rank_list',
      component: rank_list,
    },
  ]
})
