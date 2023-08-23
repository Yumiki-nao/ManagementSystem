<template>
    <div class="tabbar">
        <div class="left">
            <el-icon class="icon" :size="24" v-if="settingStore.fold" @click="handlerFold" >
                <Expand />
            </el-icon>
            <el-icon class="icon" :size="24" v-if="!settingStore.fold" @click="handlerFold" >
                <Fold />
            </el-icon>
            <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" :to="item.path">
                    <span>{{ item.meta.title }}</span>
                </el-breadcrumb-item>
                
            </el-breadcrumb>
        </div>
        <div class="right">
            <div class="btn-list">
                <div class="btn-list-item">
                    <el-icon class="icon" :size="20" @click="settingStore.refresh = !settingStore.refresh">
                        <Refresh />
                    </el-icon>
                </div>
                <div class="btn-list-item">
                    <el-icon class="icon" :size="20" @click="fullScreen">
                        <FullScreen />
                    </el-icon>
                </div>
                <div class="btn-list-item">
                    <el-icon class="icon" :size="20">
                        <Setting />
                    </el-icon>
                </div>
                <div class="btn-list-item">
                    <img :src="((userStore.avatar) as string|undefined)" alt="">
                </div>
                <el-dropdown class="username">
                    <span class="el-dropdown-link">
                        {{ userStore.username }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import  useSettingStore  from "@/store/modules/setting";
import {useRoute,useRouter} from 'vue-router'
import useUserStore from '@/store/modules/user';
let userStore = useUserStore();
let $route = useRoute();
let $router = useRouter();
let settingStore = useSettingStore()
const handlerFold = ()=>{
    settingStore.fold = !settingStore.fold
    
}
const fullScreen = ()=>{
    //dom属性的一个对象，可以用来判断是否是全屏模式
    let full = document.fullscreenElement;
    if(!full){
        //文档根节点的方法requestFullscreen实现全屏
        document.documentElement.requestFullscreen()
    }else{
        document.exitFullscreen()
    }
    
}
//退出登录
const logout = ()=>{
    userStore.userLogout()
    $router.push('/login')
    //发送请求，消除token
    //清除仓库信息
    //跳转到登录页
}


</script>

<style lang="scss" scoped>
.tabbar {
    height: 100%;
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .left {
        height: 100%;
        display: flex;
        align-items: center;

        .icon {
            margin-right: 20px;
        }
    }

    .right {
        height: 100%;

        .btn-list {
            height: 100%;
            display: flex;
            align-items: center;

            .btn-list-item {
                box-sizing: border-box;
                width: 40px;
                height: 40px;
                border-radius: 20px;
                border: 1px solid #bcbcbc;
                margin: 0 10px;
                overflow: hidden;

                .icon {
                    margin-top: 50%;
                    margin-left: 50%;
                    transform: translate(-50%, -50%);
                }

                img {
                    width: 40px;
                    height: 40px;
                }

            }

            .btn-list-item:hover {
                background-color: rgb(239, 255, 255);
            }

            .username {
                margin: 0 10px;
            }
        }
    }
}</style>