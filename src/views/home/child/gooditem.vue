<template>
  <div class="gooditem" @click="itemclick">
      <img :src="showimg" alt="" @load="imgload">
      <div class="item-detail">
          <p>{{gooditem.title}}</p>
          <div>
              <span class="price">￥{{gooditem.price}}</span>
              <img src="~assets/image/home/shoucang.svg" alt="">
              <span>{{gooditem.cfav}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        gooditem:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    computed: {
        showimg(){
            return this.gooditem.img||this.gooditem.image||this.gooditem.show.img
        }
    },
    methods: {
        imgload(){
           this.$bus.$emit('imageload') 
        },
        itemclick(){
            let iid=this.gooditem.iid
            this.$router.push({path:'/detail',query:{iid}})
        }
    },
}
</script>

<style scoped>
.gooditem{
    width: 48%;
    margin: 5px 2px;
    padding: 5px 0;
}
.gooditem img{
    width: 100%;
    border-radius: 5px;
}
.item-detail{
    padding: 6px 0;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
}
.item-detail p{
    margin: 5px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.item-detail span{
    padding: 0 5px;
}
.item-detail .price{
    padding-right:10px;
    color: var(--color-high-text);
}
.item-detail img{
    width: 15px;
    height: 15px;
}
</style>