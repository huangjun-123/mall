<template>
  <div class="recommend">
      <div v-for="(item,index) in recommend" :key="index">
          <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="titles">{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return[]
            }
        }
    }

}
</script>

<style scoped>
.recommend{
    display: flex;
    justify-content: space-between;
    padding: 12px;
    text-align: center;
    font-size: 14px;
}
.recommend img{
    width: 80px;
    height: 80px;
}
.titles{
    padding: 10px 0;
}
</style>