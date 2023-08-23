<template>
  <div class="container">
    <AsideNav></AsideNav>
    <div class="container-right">
      <div class="header">
        <Tabbar></Tabbar>
      </div>
      <div class="main">
        <router-view v-if="flag"></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AsideNav from '@/components/AsideNav.vue'
import Tabbar from '@/components/tabbar/index.vue'
import useSettingStore from '@/store/modules/setting';
import {watch,ref,nextTick} from 'vue';

let settingStore = useSettingStore();
let flag = ref(true)
watch(()=> settingStore.refresh , () => {
  flag.value=false
  //nextTick保证响应数据更新后dom更新完毕的状态
  //在这里表示我们销毁了 router-view组件的状态
  nextTick(()=>{
    //重新渲染router-view 达到刷新的效果
    flag.value=true
  })
})
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;

  display: flex;

  .container-right {
    display: flex;
    flex-direction: column;
    background-color: brown;
    flex: 1;
    .header {
      height: $container-right-header-height;
      background-color: $container-right-header-bacground-color;
    }
    .main {
      flex: 1;
      padding: 20px;
      background-color: $container-right-main-bacground-color;
      overflow: auto;
    }
  }
}

</style>
