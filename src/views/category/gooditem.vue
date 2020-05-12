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
    width: 110px;
}
.gooditem img{
    width: 100%;
}
.item-detail p{
    margin: 10px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.item-detail img{
    width: 15px;
    height: 15px;
}
.item-detail>div{
    margin: 10px 0;
}
</style>