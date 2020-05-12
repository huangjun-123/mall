<template>
    <div class="botton">
        <div class="item item-left">
            <div>
                <img src="~assets/image/tabbar/kefu.png" alt="">
                <span>客服</span>
            </div>
            <div>
                <img src="~assets/image/tabbar/shop.png" alt="">
                <span>店铺</span>
            </div>
            <div>
                <img src="~assets/image/tabbar/collect.png" alt="">
                <span>收藏</span>
            </div>
        </div>
        <div class="item item-right">
            <div class="cart" @click="addcart">加入购物车</div>
            <div class="sells">购买</div>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
        addcart(){
            // console.log('---')
            this.$emit('addtopcart')
        }
    },
}
</script>

<style scoped>
.botton{
    position: relative;
    display: flex;
    background: #fff;
    font-size: 14px;
    text-align: center;
    z-index: 888;
}
.item{
    display: flex;
    flex: 1;
    align-items: center;
}
.item-left>div{
    flex: 1;
}
.item-left img{
    width: 30px;
    height: 30px;
}
.item-left span{
    display: block;
}
.item-right>div{
    flex: 1;
    line-height: 49px;
}
.cart{
    background: yellow;
}
.sells{
    background: var(--color-tint);
    color: #fff;
}
</style>