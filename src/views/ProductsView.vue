<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { getCategories } from '../services/api';
import type { Category } from '../types/category';

import CategoryCard from '../components/product/CategoryCard.vue';
import PromoBanner from '../components/home/PromoBanner.vue';
import SearchBar from '../components/ui/SearchBar.vue';
import productImg from "../assets/productpage.jpg";

const categories = ref<Category[]>([]);
const isLoading = ref(true);
const errorMessage = ref('');


onMounted(async () => {

  try {

    categories.value = await getCategories();

  } catch (err) {

    errorMessage.value = 'Could not load categories. Please try again later.';
    console.error(err);

  } finally {

    isLoading.value = false;

  }

});
</script>



<template>

  <div>


    <!-- Hero Banner -->
    <section class="bg-gradient-to-br from-primary-dark to-primary-light">


      <div class="max-w-7xl mx-auto px-4 py-10">


        <!-- Search Component -->
        <div class="max-w-md mb-6">
          <SearchBar />
        </div>




        <div class="rounded-2xl overflow-hidden relative h-56 md:h-64">


          <img
          :src="productImg"
          alt="Shop our collection"
          class="w-full h-full object-cover"
          />



          <div
            class="absolute inset-0 bg-black/30 flex flex-col justify-center px-8"
          >

            <h1 class="text-white text-7xl md:text-6xl font-extrabold">

              Everything You Love,<br />
              All in One Place

            </h1>

          </div>

        </div>

      </div>

    </section>


    <!-- Category Grid -->
    <section class="max-w-7xl mx-auto px-4 py-12 text-center">

<h2 class="text-4xl font-bold text-primary animate-fade-in-up">
  Best Selling
</h2>


      <p class="text-gray-500 dark:text-gray-400 mb-8">

        High-quality products designed for everyday use.

      </p>
      <hr>





      <!-- Loading -->
      <p
        v-if="isLoading"
        class="text-gray-500 dark:text-gray-400"
      >
        Loading categories...
      </p>





      <!-- Error -->
      <p
        v-else-if="errorMessage"
        class="text-red-500"
      >
        {{ errorMessage }}
      </p>



      <!-- Categories -->
      <div
        v-else
        class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-left"
      >

        <CategoryCard

          v-for="category in categories"

          :key="category.slug"

          :slug="category.slug"

          :name="category.name"

        />

      </div>

    </section>

    <PromoBanner />

  </div>
</template>