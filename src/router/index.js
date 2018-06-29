import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 自己的组件
import myfirtfile from '@/components/myfirtfile'

Vue.use(Router)

export default new Router({
  routes: [
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
