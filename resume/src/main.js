// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/js/rem.js'
// import './assets/js/swiper.min.js'
// import './assets/js/index.js'
// import './assets/css/reset.min.css'
// import './assets/css/swiper.min.css'
import './assets/css/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
