<template>
  <div>
    <div class="toast" v-show="isshow">{{message}}</div>
  </div>
</template>

<script>
export default {
    // props:{
    //     message:{
    //       type:String,
    //       default:''
    //     },
    //     isshow:{
    //       type:Boolean,
    //       default:false
    //     }
    // }
    data() {
      return {
        message:'',
        isshow:false
      }
    },
    methods: {
      show(message,duration){
        this.message=message;
        this.isshow=true;
        setTimeout(()=>{
          this.message='',
          this.isshow=false
        },duration)
      }
    },

}
</script>

<style scoped>
.toast{
  padding: 10px 20px;
  position: fixed;
  top: 60%;
  left: 50%;
  background: black;
  color: #fff;
  opacity: 0.8;
  transform: translate(-50%,-60%);
  border-radius: 5px;
}
</style>