// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/userCenter.js'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueResource from 'vue-resource'
Vue.use(vueResource);
Vue.prototype.axios=axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	template: '<App/>',
	components: { App }
//	render: h => h(App)
})
