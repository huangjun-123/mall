<template>
  <div v-if="Object.keys(rates).length!==0" class="rate">
      <div class="user-more">
          <span>用户评价</span>
          <span>更多</span>
      </div>
      <div class="img-name"> 
          <img :src="rates.user.avatar" alt="">
          <span>{{rates.user.uname}}</span>
      </div>
      <div class="conent">
          <p>{{rates.content}}</p>
          <div>
              <span>{{rates.created|showdate}}</span>
              <span>{{rates.style}}</span>
          </div>
      </div>
      <div class="images" v-for="(item,index) in rates.images" :key="index">
         <img :src="item">
      </div>
  </div>
</template>

<script>
import {formtDate} from 'common/utils'
export default {
    props:{
        rates:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    filters:{
        showdate(value){
            const date=new Date(value*1000)
            return formtDate(date,'yyyy-MM-dd hh:mm:ss')
        }
    }
}
</script>

<style scoped>
.rate{
    margin-top: 20px;
    padding: 10px;
    font-size: 14px;
}
.user-more{
    display: flex;
    justify-content: space-between;
}
.img-name img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: middle;
}
.img-name span{
    padding: 0 25px;
}
.conent{
    padding: 10px 0;
}
.conent>div{
    padding: 10px 0;
}
.conent span{
    padding-right: 10px;
}
.images img{
    width: 45%;
    padding-right: 5px;
}
</style>