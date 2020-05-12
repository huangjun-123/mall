<template>
  <div v-if="Object.keys(detailparams).length!==0" class="info">
      <table v-for="(table,index) in detailparams.tables" :key="index" class="sizes">
          <tr v-for="(tr,indey) in table" :key="indey">
              <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
          </tr>
      </table>
      <table class="infos">
          <tr v-for="(info,indeo) in detailparams.set" :key="indeo">
              <td>{{info.key}}</td>
              <td>{{info.value}}</td>
          </tr>
      </table>
      <div v-if="detailparams.image.length!==0">
          <img :src="detailparams.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
    props:{
        detailparams:{
            type:Object,
            default(){
                return{}
            }
        }
    }
}
</script>

<style scoped>
.info{
    margin-top: 20px;
    padding: 0 10px;
}
.info table{
    width: 100%;
    border-collapse: collapse;
    border-bottom:3px solid #f2f5f8;
    font-size: 14px;
}
.info table tr{
    height: 45px;
    border-bottom:1px solid #f2f5f8;
}
.infos tr{
    display: flex;
    align-items: center;

}
/* even表示偶数 odd表示奇数 */
.infos tr td:nth-child(odd){
    flex: 3;
}
.infos tr td:nth-child(even){
    flex: 6;
    color: var(--color-high-text);
}
</style>