<script setup lang="ts">
  import * as Yup from 'yup';
  import { useAuthStore } from '@/stores/auth';

  const authStore = useAuthStore();
  const submitting = ref<boolean>(false);

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
      submitting.value = true;
      await authStore.login(form.value);
    } finally {
      submitting.value = false;
    }
  };
</script>

<template>
  <div class="container mx-auto px-4 py-6 sm:py-10">
    <div class="w-[500px] max-w-full mx-auto">
      <h1 class="mb-4 text-xl font-semibold text-white">Log In</h1>
      <hr />
      <div class="py-16">
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
