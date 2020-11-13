import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import sample1 from './pages/sample1.vue'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueRouter);

const routes = [
  {
    path: '/1', name: 'sample1', component: sample1
  },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
