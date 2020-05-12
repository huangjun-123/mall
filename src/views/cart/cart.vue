<template>
  <div class="cart">
      <!-- 头部导航 -->
      <navbar class="navbar">
          <div slot="center" class="center">购物车({{cartlength}})</div>
      </navbar>
      <scroll class="content" ref="scroll">
        <!-- 购物车无内容 -->
        <!-- <cartcontent class="cartcontent" :ishow="show"></cartcontent> -->
        <!-- 商品列表 -->
        <cartlist></cartlist>
      </scroll>
      <!-- 底部导航 -->
      <cartbottonbar></cartbottonbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
// import cartcontent from 'views/cart/child/cartcontent'
import cartlist from 'views/cart/child/cartlist'
import scroll from 'components/common/scroll/scroll'
import cartbottonbar from 'views/cart/child/cartbottonbar'
import{mapGetters} from 'vuex'
export default {
  data() {
    return {
      // ishow:false
    }
  },
  computed: {
    ...mapGetters(['cartlength']),
    // show(){
    //   return this.$store.state.cartlist.find(item=>{
    //     return false
    //   })
    // }
  },
  components:{
    navbar,
    // cartcontent,
    cartlist,
    scroll,
    cartbottonbar
  },
  activated() {
    // console.log('--')
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.navbar{
  background: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>