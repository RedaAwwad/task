<script setup lang="ts">
  import { Field, ErrorMessage } from 'vee-validate';

  const isVisiblePassword = ref<boolean>(false);
  const emit = defineEmits(['update:modelValue']);

  interface InputProps {
    modelValue?: string | number | null;
    type?: string;
    required?: boolean;
    name: string;
    label: string;
    placeholder?: string;
    attributes?: Record<string, unknown> | null;
  }

  const props = withDefaults(defineProps<InputProps>(), {
    modelValue: '',
    type: 'text',
    required: false,
    name: 'text-',
    label: '',
    placeholder: '',
    attributes: null,
  });

  const inputType = computed(() => {
    if (props.type === 'password') {
      return isVisiblePassword.value ? 'text' : 'password';
    }

    return props.type;
  });

  const togglePasswordVisibility = () => {
    isVisiblePassword.value = !isVisiblePassword.value;
  };
</script>

<template>
  <div class="w-full">
    <label class="flex align-center justify-between mb-2">
      <span class="flex">
        <span>{{ label }}</span>
        <span v-if="required" class="text-xs text-red-600">*</span>
      </span>
      <div
        v-if="type === 'password'"
        class="p-1 cursor-pointer"
        @click="togglePasswordVisibility"
      >
        <span v-if="isVisiblePassword">
          <Icon name="mdi:eye-off" size="1.2rem" />
        </span>
        <span v-else>
          <Icon name="ion:eye" size="1.2rem" />
        </span>
      </div>
    </label>

    <Field
      :type="inputType"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      v-bind="attributes"
      class="w-full block p-2.5 bg-[#13294b] border border-[#7286a8] focus:border-gray-600 text-white text-sm rounded-lg"
      @input="emit('update:modelValue', $event.target.value)"
    />

    <ErrorMessage :name="name" class="text-xs text-red-400" />
  </div>
</template>
