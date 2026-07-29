<script setup lang="ts">
import type { Product } from '../../types/product';
import { useCart } from '../../composables/useCart';
import { Plus } from 'lucide-vue-next';

const props = defineProps<{
  product: Product;
}>();

const { addToCart } = useCart();

function handleAddToCart(event: Event) {
  event.preventDefault(); // stop the RouterLink from navigating
  event.stopPropagation();
  addToCart(props.product, 1);
}
</script>

<template>
  <RouterLink :to="`/product/${product.id}`" class="group block relative">
    <div class="aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-2 relative">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />
      <button
        @click="handleAddToCart"
        aria-label="Add to cart"
        class="absolute bottom-2 right-2 bg-primary text-white rounded-full p-2 shadow hover:bg-primary-dark transition"
      >
        <Plus class="w-4 h-4" />
      </button>
    </div>
    <h3 class="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
      {{ product.title }}
    </h3>
    <p class="text-primary font-bold">${{ product.price.toFixed(2) }}</p>
  </RouterLink>
</template>