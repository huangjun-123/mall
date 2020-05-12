<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            scroll:null
        }
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        // 滚动位置
        if(this.probeType===2||this.probeType===3){
            this.scroll.on('scroll',(position)=>{
                this.$emit('scroll',position)
                // console.log('---')
            })
        }
        // console.log(this.scroll)
        // 上拉加载更多
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                // console.log('监听滚动到底部')
                this.$emit('pullingup')
            })
        }
    },
    methods: {
        // 滚动位置
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        // 监听上一次上拉加载完成
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        // 刷新
        refresh(){
            this.scroll && this.scroll.refresh()
        }
    },
}
</script>

<style scoped>

</style>