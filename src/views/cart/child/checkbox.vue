<template>
  <div class="check-icon" @click="checkclick" :class="{active:ischeck}">
        <img src="~assets/image/tabbar/duigou.png" alt="">
  </div>
</template>

<script>
export default {
  props:{
    ischeck:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    checkclick(){
      // console.log('--')
      this.$emit('checked')
    }
  },
}
</script>

<style scoped>
.check-icon{
    display: flex;
    align-items: center;
    padding: 0 3px;
}
.check-icon img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:1px solid #ccc
}
.active img{
    border:1px solid red;
    background: red;
}
</style>