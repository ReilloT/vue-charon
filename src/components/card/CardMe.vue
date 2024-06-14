<template>
    <el-card>
        <!-- 登录 -->
        <template v-if="user.login" class="use-login">
            <!-- 头像 -->
            <el-avatar size="large" :src="user.avator" fit="fill" />
            <!-- 分割线 -->
            <el-divider><i-ep-StarFilled/></el-divider>
            <!-- 开始写作按钮 -->
            <el-button type="primary">
                <i-ep-EditPen class="edit-pen-icon"/>开 始 写 作
            </el-button>
        </template>

        <!-- 未登录 -->
        <template v-else class="use-unlogin">
            <el-divider><i-ep-StarFilled/></el-divider>
            <el-button type="primary" @click="dialogVisible = true ">登录/注册</el-button>
            <el-divider><i-ep-StarFilled/></el-divider>
        </template>
    </el-card>


    <el-dialog v-model="dialogVisible" title="密码登录" width="500">
        <el-form label-position="left" label-width="auto" :model="userParam" style="max-width: 600px">
            <el-form-item label="账  户">
                <el-input v-model="userParam.account" />
            </el-form-item>
            <el-form-item label="密  码">
                <el-input v-model="userParam.password" />
            </el-form-item>
        </el-form>
        未注册的用户将自动注册
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">登  录 / 注  册</el-button>
            </div>
        </template>
    </el-dialog>
</template>


<script>
export default{

    data(){
        return{
            dialogVisible:false,
            user:{
                login:false,
                avator:require("@/assets/cutedog.png"),//默认头像
            },
            userParam:{
                account:"",
                password:"",
            }
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
.user-login el-button,.user-unlogin el-button{
    width: 100%;
    height: 45px;
    font-size: 20px;
}
</style>