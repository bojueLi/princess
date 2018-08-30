import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/index'
import Classify from '../pages/classify'
import Theory from '../pages/theory'
import Shop from '../pages/shop'
import My from '../pages/my'

import Class from '../pages/classify/class'
import Brand from '../pages/classify/brand'

import Makeup from '../pages/classify/makeup'
import Nutrition from '../pages/classify/nutrition'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/classify',
      component: Classify,
      children:[
        {path:'',component:Class,
          children:[
            {path:'',component:Makeup}
          ]},
        {path:'class',component:Class,
          children:[
            {path:'',component:Makeup},
            {path:'makeup',component:Makeup},
            {path:'nutrition',component:Nutrition}
          ]},
        {path:'brand',component:Brand}
      ]
    },
    {
      path: '/theory',
      component: Theory
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/my',
      component: My
    }
  ]
})
