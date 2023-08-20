import request from "@/utils/request";
import type { loginForm, loginResponseData, userReponseData } from "./type";
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info",
}
//登录接口方法
export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
//获取用户信息方法
export const reqUserInfo = () =>
  request.get<any, userReponseData>(API.USERINFO_URL);
