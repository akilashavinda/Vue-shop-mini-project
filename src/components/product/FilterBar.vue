<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getCategories } from '../../services/api';
import type { Category } from '../../types/category';

const props = defineProps<{
  activeCategory?: string; // currently selected category slug, if any
}>();

const emit = defineEmits<{
  select: [slug: string]; // emits the chosen category slug to the parent
}>();

const categories = ref<Category[]>([]);

onMounted(async () => {
  categories.value = await getCategories();
});
</script>

<template>
  <div class="flex flex-wrap gap-2 mb-8">
    <button
      v-for="category in categories"
      :key="category.slug"
      @click="emit('select', category.slug)"
      :class="[
        'px-4 py-1.5 rounded-full text-sm font-medium border transition capitalize',
        props.activeCategory === category.slug
          ? 'bg-primary text-white border-primary'
          : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-primary'
      ]"
    >
      {{ category.name }}
    </button>
  </div>
</template>