<template>
  <div>
      <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swipe" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="swiperload">
            </a>
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    props:{
        swipe:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data() {
        return {
            isload:false
        }
    },
    methods: {
        swiperload(){
            // 只让图片加载一次
            // console.log('---')
            if(!this.isload){
                this.$emit('swipeload')
                this.isload=true
            }
        }
    },
}
</script>

<style scoped>
.my-swipe img{
    width: 100%;
}
</style>