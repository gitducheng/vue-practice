//     The Vue build version to load with the `import` command
//     (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import routes from './config/routes'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './style/style.css'
import './style/reset.css'
import VueQuillEditor from 'vue-quill-editor'
import store from './store'

Vue.use(VueQuillEditor)
Vue.use(VueRouter)
Vue.use(ElementUI)
        
const router = new VueRouter({
	routes,
	mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
