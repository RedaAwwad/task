<script setup lang="ts">
  import * as Yup from 'yup';
  import { useAuthStore } from '@/stores/auth';

  const authStore = useAuthStore();
  const submitting = ref<boolean>(false);
  const error = ref<string | null>(null);

  definePageMeta({
    middleware: 'guest',
  });

  interface ILoginForm {
    email: string;
    password: string;
  }
  const form = ref<ILoginForm>({
    email: '',
    password: '',
  });

  const formValidations = Yup.object().shape({
    email: Yup.string().required('Enter your Email Address').email(),
    password: Yup.string().required('Enter your Password'),
  });

  const submitForm = async () => {
    try {
      error.value = null;
      submitting.value = true;
      await authStore.login(form.value);
    } catch (e) {
      /* @ts-ignore */
      if (e?.message) {
        /* @ts-ignore */
        error.value = e.message as string;
      }
    } finally {
      submitting.value = false;
    }
  };
</script>

<template>
  <div class="container mx-auto px-4 py-6 sm:py-10">
    <div class="w-[500px] max-w-full mx-auto">
      <div class="mb-4 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-white">Log In</h1>
        <span class="py-1 text-red-600">{{ error }}</span>
      </div>
      <hr class="mb-4" />
      <div class="py-10">
        <CForm :validation-schema="formValidations" @submit="submitForm">
          <InputField
            v-model="form.email"
            required
            label="Email"
            name="email"
            class="mb-6"
          />

          <InputField
            v-model="form.password"
            type="password"
            required
            label="Password"
            name="password"
            class="mb-2"
          />

          <div class="flex justify-end">
            <a href="#">Forgot password?</a>
          </div>

          <template #submit>
            <CBtn type="submit" :loading="submitting" class="w-full py-3"
              >Log In</CBtn
            >
          </template>
        </CForm>
      </div>
    </div>
  </div>
</template>
