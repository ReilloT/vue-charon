<template>
    <el-header class="me-area">
      <el-row class="me-header">
  
        <el-col :span="2" class="me-header-left">
          <router-link to="/" class="me-title">
            <img src="@/assets/img/charon-logo.png" />
          </router-link>
        </el-col>
  
        <!-- V-IF -->
        <el-col :span="12">
          <el-menu 
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="1">热点</el-menu-item>
            <el-menu-item index="1">标签</el-menu-item>
            <el-menu-item index="1">分类</el-menu-item>
          </el-menu>
        </el-col>
  
        <!-- <template v-else>
          <slot></slot>
        </template> -->
      </el-row>
    </el-header>
  </template>
  
  <script>
  
  </script>
  
  <style>
    .el-header {
      position: fixed;
      z-index: 1024;
      min-width: 100%;
      box-shadow: 0 2px 3px hsla(0, 0%, 7%, .1), 0 0 0 1px hsla(0, 0%, 7%, .1);
    }
  
    .me-title {
      margin-top: 10px;
      font-size: 24px;
    }
  
    .me-header-left {
      margin-top: 10px;
    }
  
    .me-title img {
      max-height: 2.4rem;
      max-width: 100%;
    }
  
    .me-header-picture {
      width: 36px;
      height: 36px;
      border: 1px solid #ddd;
      border-radius: 50%;
      vertical-align: middle;
      background-color: #5fb878;
    }
    .el-select{
      margin: 4% auto auto auto;
    }
  </style>
  