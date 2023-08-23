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
      const token = useCookie('token');
      const user = useCookie<IUser | null>('user');
      const authenticated = !!token.value;

      this.authUser = user.value;
      this.authenticated = authenticated;

      return authenticated;
    },
    async login(userCredentials: IUserCredentials) {
      const http = useNuxtApp().$http;
      const token = useCookie('token');

      const payload = {
        ...userCredentials,
        uniq_device_id: 'nqo7vl8bb6qrx2x3pfws7nmq7llfke5wj',
        device_type: 'browser',
        device_os: 'Windows 10',
      };

      const res = await http.post<HttpResponse<IAuthData>>(
        '/login/signin',
        payload,
      );

      const responseData = res.data?.data;
      const user = useCookie<IUser | null>('user');

      const tokenData = responseData?.auth_token;
      const userData = {
        ...responseData,
        /* @ts-ignore */
        profile_id: res.data?.profiles[0]?.id,
      };

      token.value = tokenData;
      user.value = userData;

      this.authenticated = true;
      this.authUser = userData;

      return navigateTo('/dashboard');
    },
    async logout() {
      const http = useNuxtApp().$http;
      const token = useCookie('token');
      const user = useCookie<IUser | null>('user');

      await http.post('/logout');

      token.value = null;
      user.value = null;

      this.authenticated = false;
      this.authUser = null;

      return navigateTo('/auth/login');
    },
  },
});
