import Vue from 'vue'
import './index.css'
import App from './App.vue'
import AutoEnvPlugin from './plugins/autoenv'
Vue.config.productionTip = false

Vue.use(AutoEnvPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
