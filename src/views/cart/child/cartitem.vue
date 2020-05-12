<template>
    <div class="cartitem">
        <checkbox :ischeck="product.checked" @checked="checkclick"></checkbox>
        <div class="cart-img"><img :src="product.image"></div>
        <div class="cart-item">
            <p class="title">{{product.title}}</p>
            <p class="desc">{{product.desc}}</p>
            <p class="price">
                <span class="newprice">￥{{product.price}}</span>
                <span>x{{product.counter}}</span>
            </p>
        </div>
    </div>
</template>

<script>
import checkbox from 'views/cart/child/checkbox'
export default {
    props:{
        product:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    components:{
        checkbox
    },
    methods: {
        checkclick(){
            // console.log('---')
            this.product.checked=!this.product.checked
        }
    },
}
</script>

<style scoped>
.cartitem{
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border: 1px solid #ccc;
}
.cart-img img{
    width: 100px;
    height: 150px;
    border-radius: 5px;
}
.cart-item{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    overflow: hidden;

}
.title,.desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}
.price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
}
.newPrice{
    color: orangered;
}
</style>