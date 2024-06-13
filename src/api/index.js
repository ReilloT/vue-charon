import path from "@/api/path.js"
import axios from "@/utils/request.js"

const api = {
    //获取文章列表,getArticle,http://localhost:6868/articles
    getArticles(){
        axios.post(path.BaseUrl+path.getArticles,
            
        )
    }
}