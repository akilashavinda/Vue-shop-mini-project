<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Search } from 'lucide-vue-next';

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    variant?: 'light' | 'dark'; // light = white bg (used on green hero), dark = normal input
  }>(),
  { placeholder: 'Search', variant: 'light' }
);

const router = useRouter();
const query = ref('');

function handleSubmit() {
  const trimmed = query.value.trim();
  if (trimmed.length > 0) {
    router.push({ path: '/search', query: { q: trimmed } });
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="relative">
    <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    <input
      v-model="query"
      type="text"
      :placeholder="props.placeholder"
      :class="[
        'w-full rounded-full pl-9 pr-4 py-2 focus:outline-none focus:ring-2',
        props.variant === 'light'
          ? 'text-gray-800 focus:ring-white'
          : 'border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-primary'
      ]"
    />
  </form>
</template>