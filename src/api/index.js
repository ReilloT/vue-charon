import path from "@/api/path.js"
import axios from "@/utils/request.js"

const api = {
    //获取文章列表,getArticle,http://localhost:6868/articles
    getArticles(articlesParam){
        console.log("123");
        return axios.post(path.BaseUrl+path.getArticles
            ,articlesParam)
    }
}

export default api;