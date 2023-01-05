import axios from 'axios';

export const Request = axiosConfig => {
  const service = axios.create({
    baseURL: 'http://localhost:9999', // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长
  });

  return service(axiosConfig)
}

export const Get = ({url, params}) => {
  return Request({
    url,
    params,
    method: 'get',
  })
};

export const Post = ({url, data}) => {
  return Request({
    url,
    data,
    method: 'post',
  })
};

axios.interceptors.request.use(config=> {
  return config;
}, err=> {
  return Promise.resolve(err);
})

