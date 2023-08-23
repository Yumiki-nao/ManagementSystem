//axios二次封装
import axios from 'axios';
import {ElMessage} from 'element-plus';
import useUserStore from '@/store/modules/user';
//利用axios对象的create方法，创建axios实例
let request = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:5000
});
//添加请求和响应拦截器
request.interceptors.request.use((config)=>{
    let userStore = useUserStore();
    if(userStore.token){
        config.headers.token = userStore.token
    }
    return config
});
request.interceptors.response.use((response)=>{
    return response.data;
},(error)=>{
    let message = '';
    let status = error.response.status;
    switch(status) {
        case 401:
            message="TOKEN过期"
            break;
        case 403:
            message="无权访问"
            break;
        case 404:
            message="地址错误"
            break;
        case 500:
            message="服务器错误"
            break;
        default:
            message="网络错误"
            break;
    }
    ElMessage({
        type:'error',
        message
    })
    return Promise.reject(error)
})
export default request;