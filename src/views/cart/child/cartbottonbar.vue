<template>
  <div class="botton">
      <div class="box">
          <checkbox :ischeck="checkedall" @checked="checked"></checkbox>
          <span>全选</span>
      </div>
      <div>合计：{{total}}</div>
      <div class="sum" @click="toastclick">去计算:{{totlalength}}</div>
  </div>
</template>

<script>
import checkbox from 'views/cart/child/checkbox'
export default {
    components:{
        checkbox
    },
    computed: {
        // 合计值
        total(){
            return "￥"+this.$store.state.cartlist.filter(item=>{
                return item.checked
            }).reduce((total,item)=>{
                return total+item.price*item.counter
            },0).toFixed(2)
        },
        // 去计算
        totlalength(){
            return this.$store.state.cartlist.filter(item=>{
                return item.checked
            }).length
        },
        // 判断全选按钮的状态
        checkedall(){
            // return !(this.$store.state.cartlist.filter(item=>{
            //     return !item.checked
            // }).length)
            if(this.$store.state.cartlist.length===0) return false
            return !this.$store.state.cartlist.find(item=>{
                return !item.checked
            })
        }
    },
    methods: {
        // 商品全部选中和有一个不选中
        checked(){
            if(this.checkedall){
                this.$store.state.cartlist.forEach(item=>{
                    return item.checked=false
                })
            }else{
                this.$store.state.cartlist.forEach(item=>{
                    return item.checked=true
                }) 
            }
        },
        toastclick(){
            if(!this.checkedall){
                this.$toast.show('请选择你的商品',2000)
            }
        }
    },
}
</script>

<style scoped>
.botton{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.box{
    display: flex;
}
.sum{
    padding: 0 30px;
    background: red;
    color: #fff;
}
</style>