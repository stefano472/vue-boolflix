import Vue from 'vue'
import App from './App.vue'

// import font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// add icon imported to our library
library.add(faMagnifyingGlass)

// how to tel Vue.js about our Font Awesome icon component.
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
