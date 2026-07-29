<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { searchProducts } from '../services/api';
import type { Product } from '../types/product';
import ProductGrid from '../components/product/ProductGrid.vue';
import SearchBar from '../components/ui/SearchBar.vue';

const route = useRoute();
const products = ref<Product[]>([]);
const isLoading = ref(true);
const errorMessage = ref('');
const currentQuery = ref((route.query.q as string) ?? '');

async function runSearch(q: string) {
  if (!q) {
    products.value = [];
    isLoading.value = false;
    return;
  }
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const data = await searchProducts(q);
    products.value = data.products;
  } catch (err) {
    errorMessage.value = 'Something went wrong while searching.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => runSearch(currentQuery.value));

// Re-run the search whenever the ?q= URL param changes
// (e.g. user searches again from this same page)
watch(
  () => route.query.q,
  (newQ) => {
    currentQuery.value = (newQ as string) ?? '';
    runSearch(currentQuery.value);
  }
);
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <div class="max-w-md mb-8">
      <SearchBar variant="dark" placeholder="Search products..." />
    </div>

    <h1 class="text-xl font-bold dark:text-white mb-6">
      Search results for "<span class="text-primary">{{ currentQuery }}</span>"
    </h1>

    <p v-if="isLoading" class="text-gray-500 dark:text-gray-400">Searching...</p>
    <p v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <p v-else-if="products.length === 0" class="text-gray-500 dark:text-gray-400">
      No products matched your search.
    </p>
    <ProductGrid v-else :products="products" />
  </div>
</template>