<script setup>
  definePageMeta({
    middleware: 'auth',
  });
</script>

<template>
  <div class="container mx-auto px-6 py-10">
    <h1 class="mb-4 text-3xl">Dashboard</h1>
    <h2 class="mb-6">Welcome,</h2>
    <div class="p-6">
      <CBtnLink to="/favorites" size="sm" class="py-3"
        >Go to Favorites</CBtnLink
      >
    </div>
  </div>
</template>
