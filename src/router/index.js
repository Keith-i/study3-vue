import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 自己的组件
import myfirtfile from '@/components/myfirtfile'
import undefineds from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'*',
  		name:'undefineds',
  		component:undefineds
  	},
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/myfirtfile',
      name: 'myfirtfile',
      component: myfirtfile
    },
  ]
})
