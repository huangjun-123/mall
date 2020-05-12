import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import 'vant/lib/index.css'
import toast from './components/common/toast'
// vant插件
import vant from 'vant'
import store from './store/index'

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()
Vue.use(vant)
Vue.use(toast)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}