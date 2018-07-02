import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/HelloWorld'
import index from '@/pages/index'
import userCenter from '@/pages/userCenter'
import userInfo from '@/pages/userInfo'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name:'hello',
			component:hello
		},
		{
			path:'/index',
			name:'index',
			component:index
		},
		{
			path:'/userCenter',
			name:'userCenter',
			component:userCenter,
			children:[
				{
					path:'userInfo',
					name:'userInfo',
					component:userInfo
				}
			]
		}
	]
})