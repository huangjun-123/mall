import{ADDCOUNTER,ADDCART} from './mutation-types'
export default{
    addcart(context,payload){
        return new Promise((resolve,reject)=>{
            // 查找是否有商品，有则自身继续增加，无则新添加进去
        let oldproduct=context.state.cartlist.find(function(item){
            return  item.iid===payload.iid
        })
        if(oldproduct){
            // oldproduct.counter+=1
            context.commit(ADDCOUNTER,oldproduct)
            resolve('当前的商品数量加1')
        }else{
            payload.counter=1
            // context.state.cartlist.push(payload)
            context.commit(ADDCART,payload)
            resolve('添加新的商品')
        }
        })
    }
}