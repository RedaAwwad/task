<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core';
  import { useAuthStore } from '@/stores/auth';

  const authStore = useAuthStore();

  const target = ref<HTMLElement | null>(null);
  const isDropdownOpen = ref<boolean>(false);
  const submitting = ref<boolean>(false);

  interface IProps {
    user: IUser | null;
  }

  withDefaults(defineProps<IProps>(), {
    user: null,
  });

  const openDropdown = () => {
    isDropdownOpen.value = true;
  };

  onClickOutside(target, () => {
    isDropdownOpen.value = false;
  });

  const logoutUser = async () => {
    try {
      submitting.value = true;
      await authStore.logout();
    } finally {
      submitting.value = false;
    }
  };
</script>

<template>
  <div v-if="user" ref="target" class="flex relative">
    <button class="w-9 h-9 rounded-full" type="button" @click="openDropdown">
      <img class="w-full h-full" :src="user.avatar" :alt="user.name" />
    </button>

    <Transition name="fade">
      <div
        v-if="isDropdownOpen"
        class="absolute top-12 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <ul class="py-2 text-sm text-primary">
          <li>
            <NuxtLink
              to="/dashboard"
              class="block px-4 py-2 hover:bg-gray-100 hover:text-secondary dark:hover:text-white"
              >Dashboard</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              to="/favorites"
              class="block px-4 py-2 hover:bg-gray-100 hover:text-secondary dark:hover:text-white"
              >Favorites</NuxtLink
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 hover:text-secondary dark:hover:text-white"
              >Settings</a
            >
          </li>

          <li>
            <button
              type="button"
              class="block w-full text-start px-4 py-2 hover:bg-gray-100 hover:text-secondary dark:hover:text-white"
              @click="logoutUser"
            >
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
