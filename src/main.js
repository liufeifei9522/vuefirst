import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import mixins from './mixins'

Vue.use(mixins)
Vue.config.productionTip = false

new Vue({
  routes,
  store,
  render: h => h(App),
}).$mount('#app')
