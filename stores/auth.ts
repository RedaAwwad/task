import { defineStore } from 'pinia';

interface IAuthData extends IUser {
  auth_token: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    authUser: null as IUser | null,
  }),
  getters: {
    user: (state) => state.authUser,
  },
  actions: {
    checkAuthenticatedUser() {
      console.log('checkAuthenticatedUser');

      const token = useCookie<string | null>('token');
      const user = useCookie<IUser | null>('user');
      const authenticated = !!token.value;

      this.authUser = user.value;
      this.authenticated = authenticated;

      return authenticated;
    },
    async login(userCredentials: IUserCredentials) {
      const http = useNuxtApp().$http;
      const res = await http.post<HttpResponse<IAuthData>>(
        '/login',
        userCredentials,
      );

      const responseData = res.data?.data;
      const token = useCookie('token');
      const user = useCookie<IUser>('user');

      const tokenData = responseData?.auth_token;
      const userData = responseData;

      token.value = tokenData;
      user.value = userData;

      this.authenticated = true;
      this.authUser = userData;

      return navigateTo('/dashboard');
    },
  },
});
