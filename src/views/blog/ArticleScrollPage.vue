<template>       
    <ScrollPage :loading="loading" :noData="noData" :offset="offset" v-on:load="load">
        <ArticleItem v-for="article in articles" :key="article.id" :=article></ArticleItem>
    </ScrollPage>
</template>

<script>
import ScrollPage from "@/components/blog/scrollpage/ScrollPage.vue";
import ArticleItem from "@/components/blog/article/ArticleItem.vue";
import api from "@/api"
export default{
    components:{
        ScrollPage,ArticleItem
    },
    mounted(){
        this.getArticles();
    },
    data(){
        return{
            loading:false,
            noData:false,
            offset:0,
            articles:[],
            articlesParam:{
                page:1,
                pageSize:10
            }

        }
    },
    methods:{
        load(){
            this.getArticles();
        },
        //获取文章列表方法
        getArticles(){
            //定义that方便异步
            let that = this;
            that.loading = true;
            //发送请求
            api.getArticles(that.articlesParam).then(
                res=>{
                    if(res.data.success){
                        if (res.data.data.length <= 0) {
                            that.noData = true;
                        }
                        that.articles = that.articles.concat(res.data.data);
                    }else{
                        Promise.reject(res.data.msg)
                    }
                }).catch((err)=>{
                    Promise.reject("获取文章列表失败")
                }).finally(()=>{
                    that.loading = false;
                })

            that.loading = false;
            that.noData = false;
        }
    },
}
</script>

<style scoped>

</style>