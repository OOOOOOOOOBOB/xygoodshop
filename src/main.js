import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/vantCss.less'
import store from './store'

import {Button} from "vant";
import {Toast} from "vant";
import './assets/css/reset.css'


Vue.use(Toast)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
