import {request} from 'network/index'

// 轮播图和推荐接口路径
export function gethome(){
    return request({
        url:'/home/multidata'
    })
}
// 商品接口路径
export function getgoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
