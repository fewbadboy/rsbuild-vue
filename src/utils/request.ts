import axios from 'axios';
import { getToken } from '@/utils/token';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10 * 60 * 1000,
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    // 文件流下载
    // blob--size
    // arrayBuffer--byteLength
    // 下载文件的信息
    // headers: {
    //   'content-disposition': 'attachment;filename=%E7%BB%84%E7%BB%87%E6%9E%B6%E6%9E%84%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xls'
    // }
    const {
      status,
      config: { responseType },
      data: { size, arrayBuffer },
      data,
    } = response;
    if (/(blob|arrayBuffer)/.test(responseType as string)) {
      if (
        status === 200 && responseType === 'blob' ? size > 0 : arrayBuffer > 0
      ) {
        return Promise.resolve({
          data,
          disposition: decodeURIComponent(
            response.headers['content-disposition'],
          ),
        });
      }
      return Promise.reject(data);
    }

    const res = response.data;
    if (res.code !== 200) {
      // todo
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    /**
     * 超时请求
     * @todo 需要针对每一个请求去处理 catch error 问题
     */
    return Promise.reject(error);
  },
);

export default service;
