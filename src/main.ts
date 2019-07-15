import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//static
import '../src/assets/scss/style.scss';
import './assets/js/test.js';

//alert 挂载
import create from "./utils/create";
Vue.prototype.$create = create;

//加载icons
import "./icons";

import './plugins/element.js'

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
