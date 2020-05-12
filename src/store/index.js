import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 安装
Vue.use(Vuex)

const state={
    cartlist:[]
}
// 创建store对象
const store=new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

// 导出挂载到vue实例上
export default store