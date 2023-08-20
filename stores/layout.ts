import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    isNavMenuOpen: false,
  }),
  actions: {
    updateNavMenuStatus(status: boolean) {
      this.isNavMenuOpen = status;
    },
  },
});
