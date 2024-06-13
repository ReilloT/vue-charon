<template>
    <div class="common-layout">
        <el-container>
            <el-main>
                <ArticleScrollPage></ArticleScrollPage>
            </el-main>
            <el-aside>Aside</el-aside>
        </el-container>
    </div>
</template>
<script>
import ArticleScrollPage from "@/views/blog/ArticleScrollPage.vue"
export default{
    components:{
        ArticleScrollPage
    },
}
</script>
<style scoped>

</style>