//创建用户相关小仓库
import { defineStore } from "pinia";
import { reqLogin, reqUserInfo } from "@/api/user/index";
import type { loginForm, loginResponseData } from "@/api/user/type";
import type { UserState } from "@/store/modules/types/type";
import { SET_TOKEN, GET_TOKEN,SET_USERNAME,GET_USERNAME,SET_AVATAR,GET_AVATAR } from "@/utils/localStorage";
import { constantRouter } from "@/router/routes";

const useUserStore = defineStore("User", {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRouter,//仓库存储生成菜单需要的数组
      username:GET_USERNAME(),
      avatar:GET_AVATAR()

    };
  },
  actions: {
    //用户登录的方法
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data);
      if (result.code == 200) {
        this.token = result.data.token as string;
        //本地存储
        SET_TOKEN(result.data.token as string);
        //获取用户信息
        this.userInfo()
        return "ok";
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },
    // 获取用户信息的方法
    async userInfo() {
      let result = await reqUserInfo();
      if(result.code === 200){
        SET_AVATAR(result.data.checkUser.avatar);
        SET_USERNAME(result.data.checkUser.username);
      }else{
        Promise.reject('获取用户信息失败')
      }
    },
    //清除用户数据的方法
    userLogout() {
      this.username = '';
      this.token = '';
      this.avatar = '';
      localStorage.removeItem('TOKEN');
      localStorage.removeItem('USERNAME');
      localStorage.removeItem('AVATAR');
    }
  },
  getters: {},
});
export default useUserStore;
