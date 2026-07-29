<script setup lang="ts">
import type { Product } from '../../types/product';
import ProductCard from './ProductCard.vue';

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>