<template>
  <div class="detail">
        <!-- 头部导航 -->
        <detailnav @topclick="itemclick" ref="detailnav"></detailnav>
        <scroll class="content" ref="scroll" @scroll="scrollclick" :probe-type="3">
            <!-- 轮播图 -->
            <detailswip :topImages="topImages"></detailswip>
            <!-- 商品信息描述 -->
            <detailgoods :deteilgoods="goods"></detailgoods>
            <!-- 商家 -->
            <detailshop :shopinfo="shopInfo"></detailshop>
            <!-- 商品详情数据 -->
            <detailimg :detailinfo="detailinfo" @imageload="imageload"></detailimg>
            <!-- 商品参数 -->
            <detailparams :detailparams="detailparams" ref="detailparams"></detailparams>
            <!-- 商品评论 -->
            <detailrate :rates="rates" ref="rates"></detailrate>
            <!-- 商品推荐 -->
            <goodlist :goodlist="recommd" ref="goodlist"></goodlist>
        </scroll>
        <backtop @backtopc="backtopclick" v-show="isshowtop"></backtop>
        <detailbottonbar @addtopcart="addcart"></detailbottonbar>
  </div>
</template>

<script>
import detailnav from 'views/detail/child/detailnav'
import detailswip from 'views/detail/child/detailswip'
import detailgoods from 'views/detail/child/detailgoods'
import detailshop from 'views/detail/child/detailshop'
import detailimg from 'views/detail/child/detailimg'
import detailparams from 'views/detail/child/detailparams'
import detailrate from 'views/detail/child/detailrate'
import goodlist from 'views/home/child/goodlist'
import detailbottonbar from 'views/detail/child/detailbottonbar'
import scroll from 'components/common/scroll/scroll'
import backtop from 'components/content/backtop/backtop'
import{getdetail,Getgoods,Getshops,Getparams,getrecommd} from 'network/detail'
import{listenermixin,backtopmixin} from 'common/mixin'
import {debounce} from 'common/utils'
export default {
    name:"detail",
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shopInfo:{},
            detailinfo:{},
            detailparams:{},
            rates:{},
            recommd:[],
            navtitle:[],
            navdebounce:null,
            currentindex:0
        }
    },
    components:{
       detailnav,
       detailswip,
       detailgoods,
       detailshop,
       detailimg,
       detailparams,
       detailrate,
       goodlist,
       detailbottonbar,
       backtop,
       scroll
    },
    mixins:[listenermixin,backtopmixin],
    created() {
        this.getdetail()
        this.getrecommd()
        // 线赋值，next防抖操作
        this.navdebounce=debounce(()=>{
                this.navtitle=[]
                this.navtitle.push(0)
                this.navtitle.push(this.$refs.detailparams.$el.offsetTop-44)
                this.navtitle.push(this.$refs.rates.$el.offsetTop-44)
                this.navtitle.push(this.$refs.goodlist.$el.offsetTop-44)
                // console.log(this.navtitle)
            },100)
    },
    destroyed() {
        this.$bus.$off('imageload',this.listenerimg)
    },
    methods: {
        getdetail(){
            this.iid = this.$route.query.iid
            getdetail(this.iid).then(res=>{
                console.log(res)
                const data=res.data.result
                this.topImages=data.itemInfo.topImages
                this.goods=new Getgoods(data.itemInfo,data.columns,data.shopInfo)
                this.shopInfo=new Getshops(data.shopInfo)
                this.detailinfo=data.detailInfo
                this.detailparams=new Getparams(data.itemParams)
                if (data.rate.cRate!==0) {
                    this.rates=data.rate.list[0]
                }
            })
        },
        getrecommd(){
            getrecommd().then(res=>{
                console.log(res)
                const data=res.data.data
                this.recommd=data.list
            })
        },
        imageload(){
            this.refresh()
            // 监听滚动位置对应的y值
           this.navdebounce()
        },
        // 监听滚动的位置
        scrollclick(position){
            // console.log(position)
            // 判断backtop是否显示
            this.isshowtop = (-position.y)>1000
            // 滚动内容显示对应主题
            const positiony=-position.y
            let length=this.navtitle.length
            for(let i=0;i<length;i++){
                // console.log(i)
                if(this.currentindex!==i &&((i<length-1 && positiony>=this.navtitle[i] && positiony<this.navtitle[i+1])||(i===length-1 && positiony>=this.navtitle[i]))){
                    // console.log(this.currentindex)
                    this.currentindex=i
                    this.$refs.detailnav.currentindex=this.currentindex
                }
            }
        },
        // 监听头部导航点击切换
        itemclick(index){
            this.$refs.scroll.scrollTo(0,-this.navtitle[index],100) 
            // console.log(index)
        },
        // 监听加入购物车
        addcart(){
            // console.log('----')
            // 获取要展示的商品信息
            const product={}
            product.image=this.topImages[0]
            product.title=this.goods.title
            product.desc=this.goods.desc
            product.price=this.goods.realPrice
            product.iid=this.iid
            // 将商品添加到购物车
            // this.$store.dispatch('addcart',product).then(res=>{
            //     // console.log(res)
            //     this.message=res;
            //     this.show=true;
            //     setTimeout(()=>{
            //         this.message='';
            //         this.show=false;
            //     },2000)
            // })

            this.$store.dispatch('addcart',product).then(res=>{
                // console.log(res)
                this.$toast.show(res,2000)
            })
        }

    },
}
</script>

<style scoped>
.detail{
    height: 100vh;
}
.content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
}
</style>