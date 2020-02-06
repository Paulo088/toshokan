import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueSimpleAlert from 'vue-simple-alert'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import * as services from './services/'
Vue.prototype.$services = services

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueSidebarMenu)
Vue.use(VueSimpleAlert)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
