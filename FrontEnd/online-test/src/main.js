import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Toasted from 'vue-toasted';



Vue.use(Toasted)
Vue.use(ViewUI)
Vue.config.productionTip = false

import '../public/style/normalize.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
