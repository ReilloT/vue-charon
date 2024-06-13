<template>       
    <ScrollPage :loading="loading" :noData="noData" :offset="offset" v-on:load="load">
        <ArticleItem v-for="article in articles" :key="article.id" :=article></ArticleItem>
    </ScrollPage>
</template>

<script>
import ScrollPage from "@/components/blog/scrollpage/ScrollPage.vue";
import ArticleItem from "@/components/blog/article/ArticleItem.vue";

export default{
    components:{
        ScrollPage,ArticleItem
    },
    mounted(){
        this.getArticles();
    },
    data(){
        return{
            loading:true,
            noData:true,
            offset:0,



            //测试数据
            articles:[
                {
                    id: "1",
                    weight: 1,
                    title: "<<天后>>",
                    commentCounts: 13,
                    viewCounts: 14,
                    summary: "我嫉妒你的爱气势如虹",
                    author: "charon",
                    tags: [{"tagname":"歌曲"},{"tagname":"陈势安"}],
                    createDate: "2023-03-05 16:00"
                },
                {
                    id: "2",
                    weight: 0,
                    title: "<<煎熬>>",
                    commentCounts: 5,
                    viewCounts: 6,
                    summary: "心一跳，爱就开始煎熬",
                    author: "pluto",
                    tags: [{"tagname":"歌曲"},{"tagname":"李佳薇"}],
                    createDate: "2024-06-13 18:00"
                },

            ]

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
            //测试数据
            that.articles = that.articles.concat({
                    id: "1",
                    weight: 1,
                    title: "<<天后>>",
                    commentCounts: 13,
                    viewCounts: 14,
                    summary: "我嫉妒你的爱气势如虹",
                    author: "charon",
                    tags: [{"tagname":"歌曲"},{"tagname":"陈势安"}],
                    createDate: "2023-03-05 16:00"
                });
            that.loading = false;

            that.noData = false;
        }
    },
}
</script>

<style scoped>

</style>