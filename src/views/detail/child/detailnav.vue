<template>
  <div>
      <navbar class="navbar">
          <div slot="left" class="left" @click="backclick">
              <img src="~assets/image/home/back.png">
              </div>
          <div slot="center" class="center">
              <div v-for="(item,index) in titles" 
              :key="index"
              :class="{active:currentindex==index}"
              @click="navclick(index)">{{item}}
              </div>
          </div>
      </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
export default {
    components:{
       navbar 
    },
    data() {
        return {
            titles:['商品','参数','评论','推荐'],
            currentindex:0
        }
    },
    methods: {
        backclick(){
           this.$router.go(-1)
        },
        navclick(index){
            this.currentindex=index
            this.$emit('topclick',index)
        }
    },
}
</script>

<style scoped>

.left img{
    width: 25px;
    height: 25px;
    vertical-align: middle;
}
.center{
    display: flex;
    align-items: center;
}
.center>div{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
</style>