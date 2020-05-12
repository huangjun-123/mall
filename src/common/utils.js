export function debounce(func,delay){
    let timer=null;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}

// 时间戳
export function formtDate(date,ff){
    // y+查找一个或多个y
    // 获取年份
    if(/(y+)/.test(ff)){
        ff=ff.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length))
    }
    // 获取月份和其他的
    // M+也是正则表达式
    let o={
        'M+':date.getMonth()+1,
        'd+':date.getDate(),
        'h+':date.getHours(),
        'm+':date.getMinutes(), 
        's+':date.getSeconds()
    }
    // 统一处理
    for(let k in o){
        if(new RegExp(`(${k})`).test(ff)){
            let str=o[k]+'';
            ff=ff.replace(RegExp.$1,(RegExp.$1.length===1)?str:minutes(str))
        }
    };
    return ff
}
// 04:04:04 => str
function minutes(str){
    return ('00'+str).substr(str.length)
}