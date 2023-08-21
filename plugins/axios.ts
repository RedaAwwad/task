import axios from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const http = axios.create({
    baseURL: config.public.ApiBaseUrl as string,
  });

  const AUTH_TOKEN = '';

  http.defaults.headers.common.Authorization = AUTH_TOKEN;

  http.interceptors.request.use(
    (axiosConfig) => {
      axiosConfig.headers.Authorization = AUTH_TOKEN;
      return axiosConfig;
    },
    (error) => Promise.reject(error),
  );

  http.interceptors.response.use(
    (response) => response,
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    },
  );

  return {
    provide: {
      http,
    },
  };
});
