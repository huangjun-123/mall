<template>
  <div>
      <div v-for="(item,index) in titles"
      :key="index"
      class="categroycon"
      :class="{active:index==currentindex}"
      @click="cateclick(index)">
          {{item.title}}
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
        cateclick(index){
            this.currentindex=index
            this.$emit('selectItem', index)
        }
    },
}
</script>

<style scoped>
.categroycon{
    padding: 10px;
    font-size: 14px;
    background: rgb(243, 242, 242);
    text-align: center;
    font-weight: 600;
}
.active{
    color: var(--color-high-text);
    background: white;
    border-left: 3px solid var(--color-tint);
}
</style>