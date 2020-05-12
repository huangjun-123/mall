<template>
  <div class="cate">
      <!-- 顶部导航 -->
        <navbar class="center">
            <div slot="center">商品分类</div>
        </navbar>
        <div class="category">
            <!-- 左边内容导航 -->
            <cateleftnav :titles="category" class="cateleftnav" @selectItem="selectItem"></cateleftnav>
            <!--右边内容导航 -->
            <scroll class="content" ref="scroll">
                <categoryitem class="categoryright" :categorr="showcate"></categoryitem>
                <tabcontrol :titles="['综合','新品','销量']" @tabclick='tabclick'></tabcontrol>
                <categorycontent :categoryrc="showrecomd"></categorycontent>
            </scroll>
        </div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import cateleftnav from 'views/category/cateleftnav'
import categoryitem from 'views/category/categoryitem'
import categorycontent from 'views/category/categorycontent'
import scroll from 'components/common/scroll/scroll'
import tabcontrol from 'components/content/tabcontrol/tabcontrol'
import {getdata,getSubcategory,getcaterecomd} from 'network/category'
import{listenermixin} from 'common/mixin'
export default {
    data() {
        return {
            category: [],
            // 1数据结构设计
            categoryData: {},
            currentIndex: -1,
            currentype:'pop',
        }
    },
    components:{
        navbar,
        cateleftnav,
        categoryitem,
        categorycontent,
        tabcontrol,
        scroll
    },
    computed: {
        showcate(){
            if (this.currentIndex === -1) return {}
            return this.categoryData[this.currentIndex].subcategories
        },
        showrecomd(){
            if(this.currentIndex=== -1)return[]
            return this.categoryData[this.currentIndex].recomd[this.currentype]
        }
    },
    mixins:[listenermixin],
    created(){
        this.getdata()
        // this.getcategory()
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
    },
        getdata(){
            // 发送网络请求
            getdata().then(res=>{
                // console.log(res)
                const data=res.data.data
                // 保存获取分类数据
                this.category=data.category.list
                // 2.初始化每个类别的子数据
                for (let i = 0; i < this.category.length; i++) {
                    this.categoryData[i] = {
                    subcategories: {},
                    recomd:{
                        'pop':[],
                        'new':[],
                        'sell':[]
                    }
                    }
                }
                // 3.请求第一个分类的数据
            this.getcategory(0)
            })
        },
        // 2请求数据
        getcategory(index){
            this.currentIndex = index;
            // 获取请求的mailKey数据
		    const mailKey = this.category[index].maitKey;
            getSubcategory(mailKey).then(res => {
            // 将获取的数据保存下来
            this.categoryData[index].subcategories = res.data.data
            this.categoryData = {...this.categoryData}
            this.getcaterecomd('pop')
            this.getcaterecomd('new')
            this.getcaterecomd('sell')
            
        })
        },
        getcaterecomd(type){
            // 获取请求的miniWallkey数据
            const miniWallkey=this.category[this.currentIndex].miniWallkey
            getcaterecomd(miniWallkey,type).then(res=>{
                // console.log(res)
                // 将获取的数据保存下来
                this.categoryData[this.currentIndex].recomd[type]=res.data
                this.categoryData={...this.categoryData}
            })
        },
        selectItem(index) {
        this.getcategory(index)
      }
    }
}
</script>

<style scoped>
.cate{
    /* position: relative; */
    height: 100vh;
}
.category{
    display: flex;
    height: calc(100% - 93px);
    overflow: hidden;
}
.cateleftnav{
    flex: 3;
}
.content{
    height: 100%;
    flex: 7;
    
}
.center{
    background: var(--color-tint);
    color: white;
    font-weight: 700;
}
</style>