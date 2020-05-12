import {request} from 'network/index'
export function getdata(){
    return request({
        url:'/category'
    })
}

export function getSubcategory(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}
export function getcaterecomd(miniWallkey,type){
    return request({
        url:'/subcategory/detail',
        params:{
            miniWallkey,
            type
        }
    })
}