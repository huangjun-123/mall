import {request} from 'network/index'
export function getdetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
// 商品推荐
export function getrecommd(){
    return request({
        url:'/recommend'
    })
}
// 商品信息接口
export class Getgoods{
    constructor(itemInfo,columns,shopInfo){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.services=shopInfo.services
        this.realPrice=itemInfo.lowNowPrice
    }
}
// 商家信息接口
export class Getshops{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo
        this.name=shopInfo.name
        this.fans=shopInfo.cFans
        this.sells=shopInfo.cSells
        this.score=shopInfo.score
        this.goodsCount=shopInfo.cGoods
    }
}

// 尺寸..
export class Getparams{
    constructor(itemParams){
        this.image=itemParams.info.image?itemParams.info.image[0]:''
        this.set=itemParams.info.set
        this.tables=itemParams.rule.tables
    }
}