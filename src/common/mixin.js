import{debounce} from './utils'
export const listenermixin={
  data() {
    return {
      listenerimg:null,
      refresh:null
    }
  },
    mounted() {
     this.refresh=debounce(this.$refs.scroll.refresh,50)
    // 监听图片加载完成
    this.listenerimg=()=>{
      // 监听到之后直接接刷新就可以获取新的计算高度
      // console.log('----')
      this.refresh()
    }
    this.$bus.$on('imageload',this.listenerimg)
    },
}

export const backtopmixin={
  data() {
    return {
      isshowtop:false
    }
  },
  methods: {
    // 监听回到顶部
    backtopclick(){
      // console.log('----')
      this.$refs.scroll.scrollTo(0,0)
  }
  },
}

export const tabclickmixin={
  data() {
    return {
      currentType: 'pop'
    }
  },
  methods: {
  tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      console.log(this.currentType);
    }
  }
}