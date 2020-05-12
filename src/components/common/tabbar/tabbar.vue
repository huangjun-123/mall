<template>
  <div class="tabbar">
      <slot></slot>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.tabbar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(236, 237, 240);
    box-shadow: 0 -3px 1px rgba(243, 187, 187, .5);
}
</style>