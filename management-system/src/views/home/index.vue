<template>
  <div class="container">
    <div class="aside-nav">
      <div class="title">大聪明甄选运用平台</div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Monitor /></el-icon>
          <span>数据大屏</span>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><Lock /></el-icon>
            <span>权限管理</span>
          </template>
          <el-menu-item index="3-1">item one</el-menu-item>
          <el-menu-item index="3-2">item two</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Handbag /></el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="3-1">item one</el-menu-item>
          <el-menu-item index="3-2">item two</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="container-right">
      <div class="header"></div>

      <div class="main">
        <div style="height: 10000px; background-color: aqua">
          <a href="">12312321312</a>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { House, Lock, Monitor, Handbag } from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background-color: aquamarine;
  display: flex;
  .aside-nav {
    width: $aside-nav-width;
    height: 100vh;
    background-color: $aside-nav-bacground-color;
  }
  .container-right {
    display: flex;
    flex-direction: column;
    background-color: brown;
    flex: 1;
    .header {
      height: $container-right-header-height;
      background-color: cadetblue;
    }
    .main {
      flex: 1;
      padding: 20px;
      background-color: chocolate;
      overflow: auto;
    }
  }
}
::-webkit-scrollbar-thumb {
  background-color: #8b8b8b;

  border-radius: 10px;
}
</style>
