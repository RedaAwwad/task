import axios from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const http = axios.create({
    baseURL: config.public.ApiBaseUrl as string,
  });

  http.interceptors.request.use(
    (axiosConfig) => {
      const token = useCookie('token');
      axiosConfig.headers.Authorization = token.value;

      return axiosConfig;
    },
    (error) => Promise.reject(error),
  );

  // http.interceptors.response.use(
  //   (response) => response,
  //   (error) => Promise.reject(error),
  // );

  return {
    provide: {
      http,
    },
  };
});
