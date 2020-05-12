<template>
  <div class="home">
    <!-- 头部导航 -->
    <navbar class="navbar">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol :titles="['流行','新款','精选']" 
    @tabclick="tabclick" 
    ref="tabcontrol1"
    v-show="istabFixed"></tabcontrol>
    <scroll class="content"
    :probe-type="3"
    @scroll="scrollclick"
    :pull-up-load="true"
    @pullingup="loadmore"
    ref="scroll">
        <!-- 轮播图 -->
        <swipe :swipe="banner" @swipeload="imgload"></swipe>
        <!-- 推荐 -->
        <recommend :recommend="recommend"></recommend>
        <!-- 流行 -->
        <feture></feture>
        <!-- 点击切换 -->
        <tabcontrol :titles="['流行','新款','精选']" 
        @tabclick="tabclick" ref="tabcontrol2"></tabcontrol>
        <!-- 商品 -->
        <goodlist :goodlist="showtype"></goodlist>
    </scroll>
    <backtop @backtopc="backtopclick" v-show="isshowtop"></backtop>
  </div>
</template>

<script>
import recommend from 'views/home/child/recommend'
import feture from 'views/home/child/feture'
import tabcontrol from 'components/content/tabcontrol/tabcontrol'
import goodlist from 'views/home/child/goodlist'
import backtop from 'components/content/backtop/backtop'
import navbar from 'components/common/navbar/navbar'
import swipe from 'components/common/swipe/swipe'
import scroll from 'components/common/scroll/scroll'
import{gethome,getgoods} from 'network/home'
import{listenermixin,backtopmixin} from 'common/mixin'
export default {
  data() {
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentype:'pop',
      tabofftop:0,
      istabFixed:false,
      savey:0
    
    }
  },
  components:{
    recommend,
    feture,
    tabcontrol,
    goodlist,
    backtop,
    navbar,
    swipe,
    scroll
  },
  computed: {
    showtype(){
      return this.goods[this.currentype].list
    }
  },
  mixins:[listenermixin,backtopmixin],
  created() {
    this.gethome(),
    this.getgoods('pop'),
    this.getgoods('new'),
    this.getgoods('sell')
  },
  activated() {
    // console.log('activated')
    this.$refs.scroll.scrollTo(0,this.savey,0)
    this.$refs.scroll.refresh()
  },
  // 离开的时候保存原来的y值
  deactivated() {
    // console.log('deactivated')
    this.savey=this.$refs.scroll.scroll.y
    // console.log(this.savey)
    //离开时取消全局事件图片的监听
    this.$bus.$off('imageload',this.listenerimg)
  },
  methods: {
    // 监听点击切换商品
    tabclick(index){
      switch(index){
        case 0:
          this.currentype='pop'
          break;
        case 1:
          this.currentype='new'
          break;
        case 2:
          this.currentype='sell'
          break;
      }
      this.$refs.tabcontrol1.currentindex=index;
      this.$refs.tabcontrol2.currentindex=index
    },
    // 1 监听轮播图图片加载状况
    imgload(){
      // console.log(this.$refs.tabcontrol.$el.offsetTop)
      this.tabofftop=this.$refs.tabcontrol2.$el.offsetTop
    },
    // 发送网络请求
    // 请求轮播图和推荐数据
    gethome(){
      gethome().then(res=>{
        // console.log(res);
        const data=res.data.data;
        this.banner=data.banner.list;
        this.recommend=data.recommend.list
      })
    },
    // 请求商品数据
    getgoods(type){
      const page=this.goods[type].page+1
      getgoods(type,page).then(res=>{
        // console.log(res)
        const data=res.data.data;
        this.goods[type].list.push(...data.list)
        this.goods[type].page+=1

        this.$refs.scroll.finishPullUp()
      })
    },
    // 监听滚动位置
    scrollclick(position){
      // 判断backtop是否显示
      this.isshowtop = (-position.y)>1000
      // 判断是否吸顶
      this.istabFixed=(-position.y)>this.tabofftop
    },
    // 监听下拉加载更多
    loadmore(){
      this.getgoods(this.currentype)
    },
  },
}
</script>

<style scoped>
.home{
  height: 100vh;
}
.navbar{
  font-size: 15px;
  background: var(--color-tint);
  color: #fff;
}
.content{
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>