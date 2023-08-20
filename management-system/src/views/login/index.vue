<template>
    <div class="container">
        <div class="form">
            <div class="header">
                <div class="title">
                    <span>Hello</span>
                </div>
                <div class="welcome">
                    <span>欢迎使用大聪明甄选</span>
                </div>
            </div>
            <div class="input">
                <el-input v-model="loginForm.username" class="el-input" size="large" :prefix-icon="User"
                    placeholder="请输入账号" />
                <el-input v-model="loginForm.password" type="password" show-password class="el-input" size="large"
                    :prefix-icon="Lock" placeholder="请输入密码" />
                <el-button :loading="isLoading" @click="loginHandler" size="large" style="width: 100%;" type="primary">登录</el-button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import useUserStore from '@/store/modules/user';
import {useRouter} from 'vue-router'
import  message  from '@/utils/notification';
import { reactive, ref } from 'vue'


// 登录相关start
let loginForm = reactive({ username: '', password: '' })
let useStore = useUserStore();
let $router = useRouter();
let isLoading = ref(false)
const loginHandler = async () => {
    isLoading.value = true;
    try {
        //通知仓库发送请求
        await useStore.userLogin(loginForm)
        //请求成功跳转到首页
        $router.push('/')
        message('success','登陆成功')
        isLoading.value = false;
    } catch (error) {
        //请求失败，提示信息
        message('error',(error as Error).message)
        isLoading.value = false;
    }

    
    
}

// 登录相关end
</script>

<style scoped lang="scss">
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-image: url('@/assets/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    .form {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 40vw;
        height: 485px;
        background-color: rgba(36, 45, 55, 0.5);
        border-radius: 10px;
        backdrop-filter: blur(10px);
        box-shadow: 0 10px 20px rgba(5, 29, 60, 0.8);

        .header {
            margin: 3vh auto;
            width: 36vw;
            font-size: 60px;
            color: white;
            border-bottom: 1px solid white;

            .title {
                margin-bottom: 1vh;
            }

            .welcome {
                font-size: 30px;
                margin-bottom: 3vh;
            }
        }

        .input {
            width: 30vw;
            margin: 4vh auto;
            opacity: 0.7;

            .el-input {
                margin-bottom: 3vh;

            }
        }
    }
}</style>