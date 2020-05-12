<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in titles" 
      :key="index" 
      class="tab-item"
      :class="{active:index==currentindex}"
      @click="itemclick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    data() {
        return {
            currentindex:0
        }
    },
    methods: {
        itemclick(index){
            this.currentindex=index
            this.$emit('tabclick',index)
        }
    },
}
</script>

<style>
.tabcontrol{
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background: #fff;
}
.tab-item{
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.active span{
    padding: 2px 5px;
    border-bottom: 2px solid var(--color-high-text);
}
</style>