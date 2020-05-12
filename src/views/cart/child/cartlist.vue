<template>
    <div>
        <cartitem v-for="(item,index) in cartlist" :key="index" :product="item">{{item}}</cartitem>
    </div>    
</template>

<script>
import cartitem from 'views/cart/child/cartitem'
import{mapGetters} from 'vuex'
export default {
    components:{
        cartitem
    },
    computed: {
    ...mapGetters(['cartlist'])
  },
}
</script>

<style scoped>

</style>