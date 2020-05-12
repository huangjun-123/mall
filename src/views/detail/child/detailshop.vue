<template>
    <div v-if="Object.keys(shopinfo).length!==0" class="shop-info">
        <div class="info-img">
          <img :src="shopinfo.logo" alt="">
          <span>{{shopinfo.name}}</span>
      </div>
      <div class="info-middle">
          <div class="shop-l">
              <div class="shop-l-de">
                  <div class="sells-count">{{shopinfo.sells|sellCountFilter}}</div>
                  <div class="sells-text">总销量</div>
              </div>
              <div class="goods">
                  <div class="goods-count">{{shopinfo.goodsCount}}</div>
                  <div class="goods-text">全部宝贝</div>
              </div>
          </div>
          <div class="shop-r">
              <table>
                  <tr v-for="(item,index) in shopinfo.score" :key="index">
                      <td>{{item.name}}</td>
                      <td :class="{'score-better':item.isBetter}" class="score">{{item.score}}</td>
                      <td :class="{'better-more':item.isBetter}" class="better">
                          <span>{{item.isBetter?'高':'低'}}</span>
                      </td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="bottom">
          <span>进店逛逛</span>
      </div>
    </div>
</template>

<script>
export default {
    props:{
        shopinfo:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    // 过滤器
    filters:{
        sellCountFilter(value){
            if(value<10000) return value;
            return(value/10000).toFixed(1)+'万'
        }
}
}
</script>

<style scoped>
.shop-info{
    padding: 25px 10px;
    border-bottom: 5px solid #f2f5f8;
}
.info-img{
   line-height: 45px;
   display: flex;
   align-items: center;
}
.info-img img{
    width: 40px;
    height: 40px;
    border:1px solid rgba(0, 0, 0, .1);
    border-radius: 50%;
}
.info-img span{
    padding: 0 10px;
    color: rgb(117, 117, 117);
    font-size: 18px;
    font-family:"Times New Roman",Georgia,Serif;
}
.info-middle{
    display: flex;
    align-items: center;
    padding: 15px 0;
}
.shop-l{
    display: flex;
    flex: 1;
    /* space-evenly: 均匀排列每个元素,每个元素之间的间隔相等
    space-between: 均匀排列每个元素,首个元素放置于起点末尾元素放置于终点 */
    justify-content: space-evenly;
    border-right:1px solid rgba(0, 0, 0, .1);
    color: #333;
    text-align: center;
}
.sells-count,.goods-count{
    font-size: 18px;
    padding: 2px 0;
}
.sells-text,.goods-text{
    font-size: 12px;
}
.shop-r{
    font-size: 13px;
    color: #333;
    margin-left: 30px;
}
.shop-r table{
    width: 125px;
}
.shop-r table td{
    padding: 5px 0;
}
.shop-r .score{
    color: #5ea732;
}
.shop-r .score-better{
    color: #f13e3a;
}
.shop-r .better span{
    background: #5ea732;
    color: #fff;
    text-align: center;
}
.shop-r .better-more span{
    background: #f13e3a;
}
.bottom{
    font-size: 14px;
    text-align: center;
}
.bottom span{
    padding: 5px 50px;
    background: rgb(219, 218, 218);
    border-radius: 10px;
    color: #333;
}
</style>