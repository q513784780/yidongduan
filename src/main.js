import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false
require("./mock");



import router from "@/router/index"




import Vant from 'vant';
import 'vant/lib/index.css';






import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.use(Vant);
new Vue({
  el: '#app',
  render: h => h(App),
  router
}).$mount('#app')
