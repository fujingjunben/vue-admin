import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import sample1 from './pages/sample1.vue'
import sample2 from './pages/sample2.vue'
import sample3 from './pages/sample3.vue'
import sample4 from './pages/sample4.vue'
import sample5 from './pages/sample5.vue'
import sample6 from './pages/sample6.vue'
import sample7 from './pages/sample7.vue'
import sample8 from './pages/sample8.vue'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueRouter);

const routes = [
  {
    path: '/1', name: 'sample1', component: sample1
  },
  {
    path: '/2', name: 'sample2', component: sample2
  },
  {
    path: '/3', name: 'sample3', component: sample3
  },
  {
    path: '/4', name: 'sample4', component: sample4
  },
  {
    path: '/5', name: 'sample5', component: sample5
  },
  {
    path: '/6', name: 'sample6', component: sample6
  },
  {
    path: '/7', name: 'sample7', component: sample7
  },
  {
    path: '/8', name: 'sample8', component: sample8
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
