import axios from "axios";
import querystring from 'querystring';

const errorHandle = (status,info)=>{
    switch(status){
        case 206:
            console.log("表示服务器已经成功处理了部分GET请求")
            break;
        case 301:
            console.log("请求的网页已永久移动到新位置,请求的URI资源路径已经改变");
            break;
        case 302:
            console.log("请求的网页已临时移动到新位置,请求的URI资源路径已经改变");
            break;
        case 400:
            console.log("服务器无法理解该请求");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}

const instance  = axios.create({
    timout:5000
})

instance.interceptors.request.use(
    config=>{
        if (config.method == "post") {
            config.data = querystring.stringify(config.data)
        }
        return config;
    },
    error=>{
        Promise.reject(config);
    }
)

instance.interceptors.response.use(
    response=>{
        return response.status == 200 ? Promise.resolve(response):Promise.reject(response)
    },
    error=>{
        const {response} = error;
        return errorHandle(response.status,response.info);
    }
)

export default instance;