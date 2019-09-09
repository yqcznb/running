import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import footer from '@/components/footer/footer'
import my from '@/components/my/my'
import tea_special from '@/components/my/tea_special'
import backbar from '@/components/my/template/backbar'
import pinform from '@/components/my/settings/pinform/pinform'
import drole from '@/components/my/my_head/drole'
import ex_bonus from '@/components/my/my_head/ex-bonus'
import settings from '@/components/my/settings/settings'
import idsafe from '@/components/my/settings/idsafe/idsafe'
import switchid from '@/components/my/settings/switchid'
import run_data_detail from '@/components/my/run_data_detail'
import rank_list from '@/components/my/rank_list'

import pet from '@/components/pet/pet'
import bag from '@/components/pet/bag'
import register from '@/components/login/register'
import forget from '@/components/login/forget'
import confirm from '@/components/login/confirm'


import index from '@/components/index/index'
import run from '@/components/run/run'
import time from '@/components/run/time'

// import DrawerLayout from 'vue-drawer-layout'
// Vue.use(DrawerLayout)

Vue.use(Router)

export default new Router({
  linkActiveClass:'mui-active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: confirm,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/time',
      name: 'time',
      component: time,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer,
      meta: {
        isLogin: true
      },
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
          meta: {
            isLogin: true
          },
          children:[
           
          ],
        
        },
        {
          path: '/bag',
          name: 'bag',
          component: bag,
        },
        {
          path: 'index',
          name: 'index',
          component: index,
          meta: {
            isLogin: true
          },
          children:[
            {
              path: 'run',
              name: 'run',
              component: run,
              meta: {
                isLogin: false
              }
            },
          ]
        },
      ]
    },
    
    {
      path: '/backbar',
      name: 'backbar',
      component: backbar,
      // children:[
      //   {
      //     path: 'idsafe',
      //     name: 'idsafe',
      //     component: idsafe,
      //   },
      //   {
      //     path: 'privacy',
      //     name: 'privacy',
      //     component: privacy,
      //   },
      //   {
      //     path: 'on',
      //     name: 'on',
      //     component: on,
      //   },
      //   {
      //     path: 'ppolicy',
      //     name:'ppolicy',
      //     component: ppolicy,
      //   },
      //   {
      //     path: 'switchid',
      //     name: 'switchid',
      //     component: switchid,
      //   },
      // ]
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
      path: '/ex_bonus',
      name: 'ex_bonus',
      component: ex_bonus,
    },
    {
      path: '/settings',
      name: 'settings',
      component: settings,
    },
    {
      path: '/idsafe',
      name: 'idsafe',
      component: idsafe,
    },
    {
      path: '/switchid',
      name: 'switchid',
      component: switchid,
    },
    {
      path: '/tea_special',
      name: 'tea_special',
      component: tea_special,
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
