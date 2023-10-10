import axios from "axios";
import router from "@/router";
import { Message } from "element-ui";

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 20000 // 请求超时时间
});

// axios 请求拦截器，有token值则配置上token值
service.interceptors.request.use(
  config => {
    let token = window.sessionStorage.getItem("token");
    // let token = "04a293a1de109cca8e1f7216c4708479";
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers["token"] = token;
    }
    else
    {
      config.headers["token"] = 'c576f07229eba617207055048b5c59d3';
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// axios 服务器响应拦截器，这里拦截403错误，并重新跳入登页重新获取token
service.interceptors.response.use(
  response => {
    if (response.data.code == "403") {
      // 这里写清除token的代码
      window.sessionStorage.removeItem("token");
      router.replace({
        path: "/"
      });
      Message.error("身份已失效,请重新登录");
    }
    return response;
  },
  error => {
    if (error.response) {
    }
    return Promise.reject(error.response.data);
  }
);

export default service;
