<template>
    <div class="goodslist">
        <gooditem v-for="(item,index) in categoryrc" :gooditem="item" :key="index"></gooditem>
    </div>
</template>

<script>
import gooditem from 'views/category/gooditem'
export default {
    props:{
        categoryrc:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    components:{
        gooditem   
    }

}
</script>

<style scoped>
.goodslist{
    /* 均等分 */
    display: flex;
    padding: 5px;
    /* 自动换行 */
    flex-wrap: wrap; 
    justify-content: space-around;
}

</style>