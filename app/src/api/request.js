// 对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
// start:进度条开始   done:进度条结束
// 利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
    // 设置默认路径
    baseURL:'/api',
    // 设置timeout
    timeout:5000,
})
// 请求拦截器
requests.interceptors.request.use(
    (config)=> {
        // 包含一个请求头headers
        nProgress.start();
        return config;

    }

);
// 响应拦截器
requests.interceptors.response.use((res)=> {
    nProgress.done();
    return res.data;
},(error)=> {
    console.log(error)
});


// 对外暴露
export default requests;