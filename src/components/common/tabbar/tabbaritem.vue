<template>
    <div class="tabitem" @click="itemclick">
          <div v-if="!isactive"><slot name="item-icon"></slot></div>
          <div v-else><slot name="item-active"></slot></div>
          <div :style="activestyle"><slot name="item-text"></slot></div>
      </div>
</template>

<script>
export default {
    props:{
        path:String,
        activecolor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isactive:false
        }
    },
    computed: {
        isactive(){
            // 判断是否处于活跃状态
            return this.$route.path.indexOf(this.path)!==-1
        },
        activestyle(){
            // 动态决定文本样式
            return this.isactive?{color:this.activecolor}:{}
        }
    },
    methods: {
        itemclick(){
            // console.log('999')
            this.$router.push(this.path)
        }
    },
}
</script>

<style scoped>
.tabitem{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tabitem img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}
/* 活跃状态 */
/* .active{
    color: yellow;
} */
</style>