<template>
  <div class="cartcontent">
      <div class="imgs" v-show="ishow">
          <img src="~assets/image/home/清空购物车.png" alt="">
          <h5>购物车竟然是空的</h5>
          <p>在忙，也要记得买点什么犒赏自己~~</p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        ishow:{
            type:Boolean,
            default:true
        }
    }
}
</script>

<style scoped>
.imgs p{
    margin: 10px 0;
}
.imgs{
    text-align: center;
}
.imgs img{
    width: 100px;
    height: 100px;
}
</style>