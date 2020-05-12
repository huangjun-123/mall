import toast from './toast'
 const obj={}
 obj.install=function(Vue){
    //  1创建组件构造器
     const constrastor=Vue.extend(toast)
    //  2用组件构造器创建组件实例对象
    const Toast=new constrastor()
    // 将组件实例对象手动挂载某个标签上
    Toast.$mount(document.createElement('div'))
    // Toast.$el对应的是div
    document.body.appendChild(Toast.$el)
    // console.log('执行')
    Vue.prototype.$toast=Toast
 }
 export default obj