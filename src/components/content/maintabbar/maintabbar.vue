<template>
  <div class="main">
      <tabbar>
        <tabbaritem path="/home" activecolor="yellow">
          <img slot="item-icon" src="~assets/image/tabbar/home.png">
          <img slot="item-active" src="~assets/image/tabbar/home_active.png" alt="">
          <div slot="item-text">首页</div>
        </tabbaritem>
        <tabbaritem path="/category"  activecolor="yellow">
          <img slot="item-icon" src="~assets/image/tabbar/class.png">
          <img slot="item-active" src="~assets/image/tabbar/class_active.png" alt="">
          <div slot="item-text">分类</div>
        </tabbaritem>
        <tabbaritem path="/cart"  activecolor="yellow">
          <img slot="item-icon" src="~assets/image/tabbar/cart.png">
          <img slot="item-active" src="~assets/image/tabbar/cart_active.png" alt="">
          <div slot="item-text">购物车</div>
        </tabbaritem>
        <tabbaritem path="/my"  activecolor="yellow">
          <img slot="item-icon" src="~assets/image/tabbar/my.png">
          <img slot="item-active" src="~assets/image/tabbar/my_active.png" alt="">
          <div slot="item-text">我的</div>
        </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabbaritem from 'components/common/tabbar/tabbaritem'
export default {
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style scoped>
</style>