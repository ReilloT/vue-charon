<template>
    <div class="flex flex-wrap gap-4">
    <RouterLink to="/blog">
        <el-card shadow="never">笔  记</el-card>
    </RouterLink>
    <RouterLink to="/blog">
        <el-card shadow="never">网  盘</el-card>
    </RouterLink>
    <RouterLink to="/blog">
        <el-card shadow="never">待  定</el-card>
    </RouterLink>
    <RouterLink to="/blog">
        <el-card shadow="never">待  定</el-card>
    </RouterLink>
    <RouterLink to="/blog">
        <el-card shadow="never">待  定</el-card>
    </RouterLink>
  </div>
</template>
<style scoped>
.el-card{
    width: 550px;
    margin-bottom: 10px;
    opacity: 0.7;
}
.el-card:hover{
    background-color: aqua;
}
</style>