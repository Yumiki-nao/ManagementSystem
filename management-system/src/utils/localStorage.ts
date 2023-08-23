//封装本地存储
export const SET_TOKEN = (token: string) => {
  localStorage.setItem("TOKEN", token);
};
export const GET_TOKEN = () => {
  return localStorage.getItem("TOKEN");
};
export const SET_USERNAME = (username: string) => {
  localStorage.setItem("USERNAME", username);
};
export const GET_USERNAME = () => {
  return localStorage.getItem("USERNAME");
};
export const SET_AVATAR = (avatar: string) => {
  localStorage.setItem("AVATAR", avatar);
};
export const GET_AVATAR = () => {
  return localStorage.getItem("AVATAR");
};

