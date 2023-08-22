<script setup lang="ts">
  interface IErrorProps {
    error: {
      statusMessage: string;
      statusCode: number;
    };
  }

  const props = withDefaults(defineProps<IErrorProps>(), {
    error: () => ({
      statusMessage: '',
      statusCode: 0,
    }),
  });

  const handleError = () => clearError({ redirect: '/' });

  onMounted(() => {
    console.error(
      `Error: 
      - Status Code: ${props.error.statusCode}
      - Error Message: ${props.error.statusMessage}`,
    );
  });
</script>

<template>
  <div class="h-screen flex justify-center items-center py-6 text-center">
    <div class="">
      <h1 v-if="error.statusCode === 404" class="py-6 px-4 text-xl">
        Page not found!
      </h1>
      <h1 v-else class="py-6 px-4 text-xl">
        Something went wrong, try again later!
      </h1>
      <button
        class="py-3 px-10 rounded bg-secondary hover:bg-red-600 text-sm text-white"
        @click="handleError"
      >
        Go to Home Page
      </button>
    </div>
  </div>
</template>
