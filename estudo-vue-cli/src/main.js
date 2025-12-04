import Vue from 'vue'
import './index.css'
import App from './App.vue'
import AutoEnvPlugin from './plugins/autoenv'
import Vue2Filters from 'vue2-filters'
Vue.config.productionTip = false

Vue.use(AutoEnvPlugin)
Vue.use(Vue2Filters)
new Vue({
  render: h => h(App),
}).$mount('#app')
