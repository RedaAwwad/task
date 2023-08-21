<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useLayoutStore } from '@/stores/layout';
  import { useAuthStore } from '@/stores/auth';

  const { authenticated, user } = storeToRefs(useAuthStore());
  const layoutStore = useLayoutStore();
  const { isNavMenuOpen } = storeToRefs(useLayoutStore());

  const toggleNavbarMenu = () => {
    layoutStore.updateNavMenuStatus(!isNavMenuOpen.value);
  };
</script>

<template>
  <nav class="p-4 bg-transparent">
    <div class="container mx-auto" dir="ltr">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-x-10">
          <NuxtLink to="/">
            <NuxtImg src="/imgs/logo.png" height="45" />
          </NuxtLink>

          <MainMenu />
        </div>
        <button
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          @click="toggleNavbarMenu"
        >
          <Icon name="clarity:menu-line" size="1.5rem" />
        </button>
        <div class="hidden md:block">
          <ul class="flex items-center gap-x-4">
            <li>
              <CBtn variant="link" class="px-2">
                <Icon name="circum:search" size="1.5rem" />
              </CBtn>
            </li>
            <li>
              <CBtn variant="link" class="px-2">
                <Icon name="mingcute:notification-fill" size="1.5rem" />
              </CBtn>
            </li>
            <li v-if="!authenticated">
              <CBtnLink to="/auth/login">Sign In</CBtnLink>
            </li>
            <li v-else class="flex">
              <UserDropdownMenu :user="user" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
