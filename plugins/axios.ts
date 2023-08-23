import axios from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const http = axios.create({
    baseURL: config.public.ApiBaseUrl,
  });

  http.interceptors.request.use(
    (axiosConfig) => {
      /**
       * NOTE: Global Token Config
       * We can use the following global config for axios to make the token set globbally, but it results CORS error 'Request header field authorization is not allowed by Access-Control-Allow-Headers'
       */
      // const token = useCookie('token');
      // axiosConfig.headers.Authorization = token.value;

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
