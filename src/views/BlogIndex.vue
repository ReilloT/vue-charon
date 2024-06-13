<template>
    <div class="common-layout">
        <el-container>
            <el-main>
                <ArticleItem v-for="article in articles" :key="article.id" :=article></ArticleItem>
            </el-main>
            <el-aside width="200px">Aside</el-aside>
        </el-container>
    </div>
</template>
<script>
import ArticleItem from "@/components/blog/article/ArticleItem.vue"
export default{
    components:{
        ArticleItem
    },

    //测试数据
    data(){
        return{
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
                    createDate: "202303051600"
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
                    createDate: "202303051600"
                },

            ]
        }
    }
}
</script>
<style scoped>

</style>