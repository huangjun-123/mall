import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/home.vue'
import category from '../views/category/category.vue'
import cart from '../views/cart/cart.vue'
import my from '../views/my/my.vue'
import detail from '../views/detail/detail.vue'
Vue.use(VueRouter)

  const routes = [
    {path:"/",redirect:"/home"},
    {path:"/home",name:'home',component:home},
    {path:"/category",name:'category',component:category},
    {path:"/cart",name:'cart',component:cart},
    {path:"/my",name:'my',component:my},
    {path:"/detail",name:'detail',component:detail}

  
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
