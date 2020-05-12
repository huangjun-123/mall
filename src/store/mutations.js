import{ADDCOUNTER,ADDCART} from './mutation-types'
export default{
    // mutations具有修改和跟踪功能
    // 统计数量
    [ADDCOUNTER](state,payload){
        payload.counter++
    },
    // 统计新老产品
    [ADDCART](state,payload){
        payload.checked=false
        state.cartlist.push(payload)
    }
}