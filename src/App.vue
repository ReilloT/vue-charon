<template>
  <div class="home-app">
    <GoTop></GoTop>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-divider />
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import GoTop from "./components/gotop/GoTop.vue";
export default{
  components:{
    GoTop
  }
}
</script>

<style scoped>
.el-header{
  text-align: center;
}
.el-main{
  min-height: 560px;
  text-align: center;
  display: flex;
  justify-content: center; 
  align-items: center;
  
}
.common-layout{
  background: url(./assets/app-bg.png) no-repeat center center;
  background-size: cover;
}
</style>