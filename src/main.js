// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.css'
import './assets/css/style.css'
// import Cta from 'cta'

import Bootstrap from './assets/js/bootstrap.min.js'
import Menu from './assets/js/plugins/metisMenu/jquery.metisMenu.js'
import Slimscroll from './assets/js/plugins/slimscroll/jquery.slimscroll.min.js'
import Custum from './assets/js/custum.js'
import Pace from './assets/js/plugins/pace/pace.min.js'
import Validate from './assets/js/jquery.validate.min.js'
import Morris from './assets/js/plugins/morris/morris.js'
// import Lightbox from './assets/js/plugins/lightbox/lightbox.min.js'
Vue.config.productionTip = false
// Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // jQuery,
  Bootstrap,
  Menu,
  Slimscroll,
  // Cta,
  // Custum,
  // Pace,
  Validate,
  Morris,
  // Lightbox,
  template: '<App/>',
  components: { App }
})
