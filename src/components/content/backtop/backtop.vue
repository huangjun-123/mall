<template>
  <div class="backtop" @click="backclick">
      <img src="~assets/image/home/backtop.png">
  </div>
</template>

<script>
export default {
    methods: {
        backclick(){
            // console.log('顶顶顶顶')
            this.$emit('backtopc')
        }
    },
}
</script>

<style scoped>
.backtop{
    position: absolute;
    z-index: 999;
    bottom: 55px;
    right: 20px;
}
</style>