import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuei18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(Vuei18n)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
