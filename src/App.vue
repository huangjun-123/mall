<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from 'components/content/maintabbar/maintabbar'
export default {
    components:{
      maintabbar
    }
}
</script>
<style scoped>
@import 'assets/css/base.css';

</style>
