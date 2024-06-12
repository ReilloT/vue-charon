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
.common-layout{
  margin: 0px;
  /* background-image: url(./assets/app-bg.png);
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-attachment: fixed; */
}
</style>