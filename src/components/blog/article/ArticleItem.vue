<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-link type="default">标题</el-link>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" plain>置顶</el-button>
          </el-col>
          <el-col :span="3" :offset="9">
            <el-icon><View /></el-icon>
            <div class="grid-content ep-bg-purple">看过</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content ep-bg-purple">评论</div>
          </el-col>
        </el-row>
      </div>
    </template>
    

    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content ep-bg-purple">文章简介</div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="3">
        <div class="grid-content ep-bg-purple">作者</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content ep-bg-purple">标签列表</div>
      </el-col>
      <el-col :span="9">
        <div class="grid-content ep-bg-purple">创作时间</div>
      </el-col>
    </el-row>

  </el-card>
</template>

<script>
import {reactive} from 'vue';
export default{
  setup(){
    const articleitem = reactive({
      item:{
        name:"我是标题",
      }
    })
    return{
      articleitem
    }
  }
  
}
</script>

<style scoped>
.el-card{
  margin-left: 30%;
  margin-right: 20%;
}
.el-link{
  font-size: x-large;
}
</style>