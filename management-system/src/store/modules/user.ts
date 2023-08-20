//创建用户相关小仓库
import { defineStore } from "pinia";
import { reqLogin } from "@/api/user/index";
import type { loginForm, loginResponseData } from "@/api/user/type";
import type { UserState } from "@/store/modules/types/type";
import { SET_TOKEN, GET_TOKEN } from "@/utils/localStorage";
const useUserStore = defineStore("User", {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
    };
  },
  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data);
      if (result.code == 200) {
        this.token = result.data.token as string;
        //本地存储
        SET_TOKEN(result.data.token as string);
        return "ok";
      } else {
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  getters: {},
});
export default useUserStore;
