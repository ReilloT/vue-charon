<template>
    <el-card>
        <!-- 头像 -->
        <el-avatar size="large" :src="circleUrl" fit="fill" />
        <!-- 分割线 -->
        <el-divider><i-ep-StarFilled/></el-divider>
        <!-- 开始写作按钮 -->
        <el-button type="primary">
            <i-ep-EditPen class="edit-pen-icon"/>开 始 写 作
        </el-button>
    </el-card>
</template>


<script>
export default{
    data(){
        return{
            
            circleUrl: require("@/assets/cutedog.png"),
        }
    }
}
</script>

<style scoped>
.el-card{
    text-align: center;
}
.edit-pen-icon{
    margin-right: 10px;
}
.el-button{
    width: 100%;
    height: 45px;
    font-size: 20px;
}
</style>