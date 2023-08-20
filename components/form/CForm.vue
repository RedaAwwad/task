<script setup lang="ts">
  import { Form } from 'vee-validate';
  import { ObjectShape } from 'yup';

  interface FormProps {
    submitting?: boolean;
    submitTitle?: string;
    validationSchema?: ObjectShape | null;
  }

  /**
   *** validationSchema ***
   *
   * - We use `yup` to generate object schema and pass it to `vee-validate`
   * - as follows:
   *   import * as Yup from 'yup';
   *  const formValidations = Yup.object().shape({
   *    fullname: Yup.string().nullable().required('Enter your Fullname'),
   *  });
   */

  withDefaults(defineProps<FormProps>(), {
    submitting: false,
    submitTitle: 'Submit',
    validationSchema: null,
  });

  const emit = defineEmits(['submit']);

  const submitForm = () => {
    emit('submit');
  };
</script>

<template>
  <Form
    id="form_11"
    key="form_11"
    :validation-schema="validationSchema"
    class="w-full"
    @submit="submitForm"
  >
    <div class="w-full mb-6">
      <slot />
    </div>

    <template v-if="$slots.submit">
      <slot name="submit" />
    </template>
    <template v-else>
      <CBtn type="submit" :loading="submitting">{{ submitTitle }}</CBtn>
    </template>
  </Form>
</template>
