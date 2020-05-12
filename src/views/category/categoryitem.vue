<template>
  <div class="categoryright">
      <div class="item" v-for="(item, index) in categorr.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    categorr:{
      type:Object,
      default(){
        return{}
      }
    }
  }

}
</script>

<style scoped>
.categoryright{
    padding: 10px 0;
}
.item{
  display: inline-block;
  width: 87px;
  text-align: center;
  font-size: 14px;
}
.item img{
  width: 50px;
  height: 50px;

}
</style>