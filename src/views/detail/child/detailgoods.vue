<template>
  <div v-if="Object.keys(deteilgoods).length!==0" class="deteilgoods">
    <div>{{deteilgoods.title}}</div>
    <div class="price">
      <span class="newPrice">{{deteilgoods.newPrice}}</span>
      <span class="oldPrice">{{deteilgoods.oldPrice}}</span>
      <span v-if="deteilgoods.discount" class="discount">{{deteilgoods.discount}}</span>
    </div>
    <div class="count">
      <span>{{deteilgoods.columns[0]}}</span>
      <span>{{deteilgoods.columns[1]}}</span>
      <span>{{deteilgoods.services[deteilgoods.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span v-for="item in deteilgoods.services.length-1" :key="item">
        <img :src="deteilgoods.services[item-1].icon" alt="">
        <span>{{deteilgoods.services[item-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        deteilgoods:{
          type:Object,
          default(){
            return{}
          }
        }
    }
}
</script>

<style scoped>
.deteilgoods{
    margin-top: 10px;
    padding: 0 10px;
    /* color: #999; */
    font-size: 15px;
    border-bottom: 5px solid #f2f5f8;
}
.price{
  margin: 10px 0;
}
.newPrice{
    font-size: 20px;
    font-weight: 700;
    color: var(--color-high-text);
}
.oldPrice{
  margin: 0 10px;
  font-size: 12px;
  text-decoration: line-through;
}
.discount{
  display: inline-block;
  position: relative;
  top: -10px;
  padding: 3px 5px;
  background: var(--color-tint);
  font-size: 12px;
  color: #fff;
  border-radius: 15px;
}
.count{
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
.services{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.services img{
  vertical-align: middle;
  width: 15px;
  height: 15px;
}
</style>