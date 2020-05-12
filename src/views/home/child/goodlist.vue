<template>
  <div class="goodlist">
      <gooditem v-for="(item,index) in goodlist" :gooditem="item" :key="index"></gooditem>
  </div>
</template>

<script>
import gooditem from 'views/home/child/gooditem'
export default {
    props:{
        goodlist:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    components:{
        gooditem
    }
}
</script>

<style scoped>
.goodlist{
   /* 均等分 */
    display: flex;
    padding: 5px;
    /* 自动换行 */
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>