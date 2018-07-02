import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 自己的组件
import myfirtfile from '@/components/myfirtfile'
import undefineds from '@/components/404'
import test1 from '@/components/test1'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'*',
  		name:'undefineds',
  		redirect:undefineds
  	},
    {
      path: '/',
      name: 'Hello',
      components: {
      	default:HelloWorld,
      	test1:test1
      }
    },
    {
      path: '/myfirtfile',
      name: 'myfirtfile',
      component: myfirtfile
    }
  ]
})
