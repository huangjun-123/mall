<template>
  <div v-if="Object.keys(detailinfo).length!==0" class="detail-info">
      <div class="info-desc clear-fix">
          <div class="info-start"></div>
          <div class="desc">{{detailinfo.desc}}</div>
          <div class="info-end"></div>
      </div>
      <div class="key">{{detailinfo.detailImage[0].key}}</div>
      <div v-for="(item,index) in detailinfo.detailImage[0].list" 
      :key="index"
      class="detailImage">
          <img :src="item" alt="" @load="imgload">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        detailinfo:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    methods: {
        imgload(){
            this.$emit('imageload')
        }
    },
}
</script>

<style scoped>
.detail-info{
    margin-top: 20px;
    padding: 0 10px;
    border-bottom: 5px solid #f2f5f8;
}
.info-start{
    position: relative;
    float: left;
    width: 100px;
    border: 2px solid #d2d4d6; 
}
.info-end{
    position: relative;
    float: right;
    width: 100px;
    border: 2px solid #d2d4d6;
}
.info-start::before,.info-end::after{
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: #333;
    bottom: 0;
}
.info-end::after{
    right: 0;
}
.desc{
    padding: 15px 0;
    font-size: 14px;
    color: #333;
}
.key{
    padding: 15px 0;
}
.detailImage img{
    width: 100%;
}
</style>