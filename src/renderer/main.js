import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'

// const path = require('path')
// const fs = require('fs')
// fs.readFile(path.resolve(__dirname, '../../package.json'), (error, data) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(JSON.parse(data))
//     // this.valueArray = JSON.parse(data)
//   }
// })
Vue.use(ElementUI)
// socket

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
