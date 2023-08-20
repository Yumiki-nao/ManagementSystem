import { ElNotification } from "element-plus";
const message = (
  type: "success" | "error",
  msg: string,
  title?: undefined | string,
) => {
  if (type === "success") {
    ElNotification({
      type: "success",
      message: msg,
      title: title,
    });
  } else {
    ElNotification({
      type: "error",
      message: msg,
      title: title,
    });
  }
};
export default message;
