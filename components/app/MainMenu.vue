<script setup lang="ts"></script>

<template>
  <div
    class="hidden fixed md:static left-0 top-16 bottom-0 w-full md:block md:w-auto"
  >
    <ul
      class="h-full flex flex-col md:flex-row align-center gap-4 text-base font-medium p-4 md:p-0 mt-4 md:mt-0 bg-primary md:bg-transparent"
    >
      <li>
        <NuxtLink to="/" class="hover:text-white"> Home </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/live" class="hover:text-white"> Live </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/programs" class="hover:text-white"> Programs </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/series" class="hover:text-white"> Series </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/movies" class="hover:text-white"> Movies </NuxtLink>
      </li>
    </ul>
  </div>
</template>
