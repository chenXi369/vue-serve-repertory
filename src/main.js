import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Cookies from 'js-cookie'

import '@/styles/index.scss' // global css

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import './styles/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import './permission' // permission control

// 全局引用拖拽指令
import './directive/drag'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
