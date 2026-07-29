<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getProductById, getProductsByCategory } from '../services/api';
import type { Product } from '../types/product';
import { useCart } from '../composables/useCart';
import ProductGrid from '../components/product/ProductGrid.vue';

const route = useRoute();
const { addToCart } = useCart();

const product = ref<Product | null>(null);
const relatedProducts = ref<Product[]>([]);
const isLoading = ref(true);
const errorMessage = ref('');
const showAllRelated = ref(false);

// Show 3 related products first, expand to all when "More" is clicked
const visibleRelated = computed(() =>
  showAllRelated.value ? relatedProducts.value : relatedProducts.value.slice(0, 3)
);

async function loadProduct(id: string) {
  isLoading.value = true;
  errorMessage.value = '';
  showAllRelated.value = false;
  try {
    const data = await getProductById(Number(id));
    product.value = data;

    // Fetch related products from the same category, excluding this one
    const categoryData = await getProductsByCategory(data.category);
    relatedProducts.value = categoryData.products.filter((p) => p.id !== data.id);
  } catch (err) {
    errorMessage.value = 'Could not load this product.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => loadProduct(route.params.id as string));

// Re-fetch if the user navigates from one product detail page straight to another
// (e.g. by clicking a related product), since Vue Router reuses this component.
watch(
  () => route.params.id,
  (newId) => loadProduct(newId as string)
);

function handleAddToCart() {
  if (product.value) addToCart(product.value, 1);
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-10">
    <p v-if="isLoading" class="text-gray-500 dark:text-gray-400">Loading product...</p>
    <p v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>

    <template v-else-if="product">
      <h1 class="text-2xl font-bold text-primary mb-6 capitalize">{{ product.title }}</h1>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
          <img :src="product.thumbnail" :alt="product.title" class="w-full h-80 object-cover" />
        </div>

        <div>
          <h2 class="text-xl font-bold dark:text-white mb-2">{{ product.title }}</h2>
          <p class="text-2xl font-bold text-primary mb-4">${{ product.price.toFixed(2) }}</p>
          <p class="text-gray-600 dark:text-gray-300 mb-6">{{ product.description }}</p>

          <div class="flex gap-4 mb-4">
            <button
              @click="handleAddToCart"
              class="bg-primary text-white font-semibold rounded-full px-6 py-2 hover:bg-primary-dark transition"
            >
              Add to Cart
            </button>
            <RouterLink
              to="/cart"
              class="border border-primary text-primary rounded-full px-6 py-2 hover:bg-primary/10 transition"
            >
              View Cart
            </RouterLink>
          </div>

          <div class="text-sm text-gray-500 dark:text-gray-400 space-y-1">
            <p>Brand: <span class="font-medium text-gray-700 dark:text-gray-200 capitalize">{{ product.brand }}</span></p>
            <p>Category: <span class="font-medium text-gray-700 dark:text-gray-200 capitalize">{{ product.category }}</span></p>
            <p>Rating: <span class="font-medium text-gray-700 dark:text-gray-200">{{ product.rating }} / 5</span></p>
            <p>Stock: <span class="font-medium text-gray-700 dark:text-gray-200">{{ product.stock }} available</span></p>
          </div>
        </div>
      </div>

      <!-- Related products -->
      <div v-if="relatedProducts.length > 0">
        <ProductGrid :products="visibleRelated" />

        <div v-if="!showAllRelated && relatedProducts.length > 3" class="text-center mt-6">
          <button
            @click="showAllRelated = true"
            class="border border-gray-300 dark:border-gray-600 rounded-full px-8 py-2 text-sm dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            More
          </button>
        </div>
      </div>
    </template>
  </div>
</template>