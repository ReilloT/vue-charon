<template>
    <div class="common-layout">
        <el-container>
            <el-main>
                <ArticleItem class="article-item"></ArticleItem>
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
    }
}
</script>
<style scoped>

</style>