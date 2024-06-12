<template>
  <div class="home-app">
    <GoTop></GoTop>
    <div class="common-layout">
      <el-container>
        <el-header></el-header>
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
  /* text-align: center; */
  /* display: flex;
  justify-content: center; 
  align-items: center; */
  
}
.common-layout{
  background-image: url(./assets/app-bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>