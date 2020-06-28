import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/vantCss.less'
import store from './store'
import {Toast,Button} from "vant";

Vue.use(Toast).use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
