<template>
    <div>
        <el-container>      
            <el-main class="me-articles">
                <ArticleScrollPage></ArticleScrollPage>
            </el-main>
            <el-aside>
                <CardMe></CardMe>
                <!-- <card-tag :tags="hotTags"></card-tag> -->
                <!-- <card-article cardHeader="最热文章" :articles="hotArticles"></card-article> -->
                <!-- <card-archive cardHeader="文章归档" :archives="archives"></card-archive> -->
                <!-- <card-article cardHeader="最新文章" :articles="newArticles"></card-article> -->
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import ArticleScrollPage from "@/views/ArticleScrollPage.vue";
import CardMe from "@/components/card/CardMe.vue"

export default{
    name:"BaseMain",
    components:{
        ArticleScrollPage,CardMe
    }
}
</script>

<style scoped>
.el-container {
    width: 960px;
}

.el-aside {
    margin-left: 20px;
    width: 260px;
}

.el-main {
    padding: 0px;
    line-height: 16px;
}


.el-card {
    border-radius: 0;
}

.el-card:not(:first-child) {
    margin-top: 20px;
}
</style>