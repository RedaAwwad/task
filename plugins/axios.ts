import axios from 'axios';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const http = axios.create({
    baseURL: config.public.ApiBaseUrl,
  });

  http.interceptors.request.use(
    (axiosConfig) => {
      const token = useCookie('token');
      const user = useCookie<IUser>('user');

      if (token.value) {
        axiosConfig.headers.Authorization = token.value;
        axiosConfig.headers.Profile = user.value?.profile_id;
      }

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
