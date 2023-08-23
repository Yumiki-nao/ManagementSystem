<template>
    <div class="aside-nav" :class="{fold:settingStore.fold?true:false}">
        <div class="title">
            <img class="logo" :src="setting.logo" v-if="setting.logoHidden">
            <span class="name">{{ setting.title }}</span>
        </div>
        <el-scrollbar class="scrollbar">
            <el-menu class="menu" background-color="#001529" text-color="white" :default-active="$route.path" :collapse="settingStore.fold">
                <Menu :menuList="userStore.menuRoutes"></Menu>
            </el-menu>
            
          
        </el-scrollbar>

    </div>
</template>

<script setup lang="ts">
import setting from "@/setting";
import Menu from '@/components/menu/Menu.vue'
import useUserStore from '@/store/modules/user';
import {useRoute} from 'vue-router';
import  useSettingStore  from "@/store/modules/setting";

let settingStore = useSettingStore()
let $route = useRoute();
let userStore = useUserStore();

</script>

<style lang="scss" scoped>
.aside-nav {
    width: $aside-nav-width;
    height: 100vh;
    background-color: $aside-nav-bacground-color;
    
    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: $container-right-header-height;
        color: white;
        font-size: $aside-nav-title-size;
        padding: 0 20px;

        .logo {
            width: $aside-nav-logo-size;
            height: $aside-nav-logo-size;
            
        }
        .name{
            line-height: $aside-nav-logo-size;
            margin-left: 10px;
        }
    }
    .scrollbar {
        width: 100%;
        height: calc(100vh - $container-right-header-height);
        .menu {
            border-right: none;
        }

    }
}
.fold{
    width: 70px;
    transition: all 0.3s linear;
    .title {
        .name {
            display: none;
        }
    }
}
</style>