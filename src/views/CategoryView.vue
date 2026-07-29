<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getProductsByCategory } from '../services/api';
import type { Product } from '../types/product';
import ProductGrid from '../components/product/ProductGrid.vue';
import FilterBar from '../components/product/FilterBar.vue';

const route = useRoute();
const router = useRouter();
const products = ref<Product[]>([]);
const isLoading = ref(true);
const errorMessage = ref('');
const categorySlug = ref(route.params.slug as string);

// Same auto-loading trick as CategoryCard.vue: finds every image in
// the categories folder without needing one import line per file.
const imageModules = import.meta.glob('../assets/categories/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const categoryImages: Record<string, string> = {};
for (const path in imageModules) {
  const filename = path.split('/').pop() ?? '';
  const slugKey = filename.replace(/\.(jpg|jpeg|png)$/, '');
  categoryImages[slugKey] = imageModules[path];
}

// Falls back to a keyword-matched online photo if this category
// doesn't have a local image yet.
function getCategoryImage(slug: string): string {
  return categoryImages[slug] ?? `https://loremflickr.com/500/350/${slug.replace(/-/g, ',')}`;
}

async function loadProducts(slug: string) {
  isLoading.value = true;
  errorMessage.value = '';
  try {
    const data = await getProductsByCategory(slug);
    products.value = data.products;
  } catch (err) {
    errorMessage.value = 'Could not load products for this category.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => loadProducts(categorySlug.value));

watch(
  () => route.params.slug,
  (newSlug) => {
    categorySlug.value = newSlug as string;
    loadProducts(categorySlug.value);
  }
);

function handleCategorySelect(slug: string) {
  router.push(`/category/${slug}`);
}
</script>

<template>
  <div>
    <!-- Category hero banner -->
    <section class="bg-gradient-to-br from-primary-dark to-primary-light">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 py-12 items-center">
        <div class="text-white">
          <h1 class="text-3xl md:text-4xl font-extrabold mb-4 capitalize">
            {{ categorySlug.replace('-', ' ') }}
          </h1>
          <p class="text-white/90 max-w-md">
            Timeless comfort, modern design. Upgrade your space with quality products designed for lasting value.
          </p>
        </div>
        <img
          :src="getCategoryImage(categorySlug)"
          :alt="categorySlug"
          class="rounded-2xl w-full h-56 object-cover"
        />
      </div>
    </section>

    <!-- Product grid -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <FilterBar :active-category="categorySlug" @select="handleCategorySelect" />

      <p v-if="isLoading" class="text-gray-500 dark:text-gray-400">Loading products...</p>
      <p v-else-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
      <p v-else-if="products.length === 0" class="text-gray-500 dark:text-gray-400">
        No products found in this category.
      </p>
      <ProductGrid v-else :products="products" />
    </section>
  </div>
</template>