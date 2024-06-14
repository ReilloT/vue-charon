<template>
  <div class="home-app">
    <GoTop></GoTop>
    <div class="common-layout">
      <!-- <el-container> -->
        <el-main>
          <RouterView></RouterView>
        </el-main>
      <!-- </el-container> -->
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
.common-layout{
  /* background-image: url(./assets/app-bg.png);
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-attachment: fixed; */
}
</style>