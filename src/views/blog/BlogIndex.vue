<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <BaseHeader></BaseHeader>
            </el-header>
            <el-divider />
            <el-container class="middle-area">
                <el-main>
                    <ArticleScrollPage></ArticleScrollPage>
                </el-main>
                <el-aside>
                    <CardMe></CardMe>
                    <CardArticleHistory class="card-article-history"></CardArticleHistory>
                </el-aside>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import ArticleScrollPage from "@/views/blog/ArticleScrollPage.vue"
import CardMe from "@/components/blog/card/CardMe.vue"
import CardArticleHistory from "@/components/blog/card/CardArticleHistory.vue"
import BaseHeader from "@/views/blog/BaseHeader.vue"
export default{
    components:{
        ArticleScrollPage,CardMe,CardArticleHistory,BaseHeader
    },
}
</script>
<style scoped>
.middle-area{
    max-width: 60%;
    margin-left: 20%;
}
.card-article-history{
    margin-top: 10px;
}
</style>