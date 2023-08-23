<script setup lang="ts">
  import { breakpointsTailwind } from '@vueuse/core';
  import { storeToRefs } from 'pinia';
  import { useLayoutStore } from '@/stores/layout';

  interface IUser {
    unique_id?: string;
    firstName?: string;
    lastName?: string;
    name?: string;
    email?: string;
    avatar?: string;
  }

  interface IProps {
    user: IUser | null;
  }

  withDefaults(defineProps<IProps>(), {
    user: null,
  });

  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isSmallScreen = breakpoints.smallerOrEqual('md');
  const { isNavMenuOpen } = storeToRefs(useLayoutStore());
</script>

<template>
  <Transition name="fade">
    <div
      v-if="!isSmallScreen || isNavMenuOpen"
      class="block fixed z-100 md:static left-0 top-16 bottom-0 w-full md:w-auto"
    >
      <ul
        class="h-full flex flex-col md:flex-row align-center gap-4 text-base font-medium p-4 md:p-0 mt-4 md:mt-0 bg-primary md:bg-transparent"
      >
        <li v-if="user" class="mb-4 md:hidden">
          <ul>
            <li class="">{{ user.name }}</li>
            <li>{{ user.email }}</li>
            <NuxtLink
              to="/favorites"
              class="inline-block py-2 hover:text-white"
            >
              Favorites
            </NuxtLink>
            <li class="mt-3">
              <hr />
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/" class="hover:text-white"> Home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/live" class="hover:text-white"> Live </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/programs" class="hover:text-white">
            Programs
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/series" class="hover:text-white"> Series </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/movies" class="hover:text-white"> Movies </NuxtLink>
        </li>
      </ul>
    </div>
  </Transition>
</template>
