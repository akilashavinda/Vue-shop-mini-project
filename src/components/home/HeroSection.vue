<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SearchBar from '../ui/SearchBar.vue';
import shoppingImage from '../../assets/online-shopping.jpg'
import shoppingImage1 from '../../assets/online-shopping1.jpg'
import shoppingImage2 from '../../assets/online-shopping2.jpg'
</script>

<template>

  <section class="relative overflow-hidden bg-gradient-to-br from-primary-dark to-primary-light">

    <!-- Soft floating glow shapes for a subtle "alive" background feel -->
    <div class="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
    <div class="pointer-events-none absolute -bottom-24 -right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-slow" style="animation-delay: 2s;"></div>

    <div class="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 py-12 items-center">

      <!-- Left: Text -->
      <div class="text-white">

        <!-- Search Component -->
        <div class="mb-8 max-w-sm">
          <SearchBar />
        </div>

        <h1 class="text-6xl md:text-7xl font-extrabold leading-tight mb-4 animate-glow-pulse bg-gradient-to-r from-white via-white to-primary-light/80 bg-clip-text text-transparent">
          Discover Your Style.<br />
          Shop Smart.
        </h1>

        <h4 class="mb-8 text-white/90">
          Trendy fashion, electronics & more all in one place at unbeatable prices.
        </h4>

        <div class="flex gap-4 mb-6">

          <RouterLink
            to="/products"
            class="bg-white text-primary font-semibold rounded-full px-6 py-2 shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 transition-all"
          >
            Start Now
          </RouterLink>

          <RouterLink
            to="/products"
            class="border border-white text-white rounded-full px-6 py-2 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
          >
            Explore
          </RouterLink>

        </div>

        <p class="text-sm text-white/80 max-w-md">
          Shop high-quality products across fashion, electronics, and more at affordable prices,
          with fast delivery, secure payments, and a smooth, reliable shopping experience from start to finish.
        </p>

      </div>

      <!-- Right: Image Collage -->
      <div class="grid grid-cols-2 gap-4">

        <div class="col-span-2 overflow-hidden rounded-2xl shadow-xl shadow-black/20">
          <img
            :src="shoppingImage"
            alt="Shopping lifestyle"
            class="object-cover h-56 w-full hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="overflow-hidden rounded-2xl shadow-xl shadow-black/20">
          <img
            :src="shoppingImage1"
            alt="Shopping bags"
            class="object-cover h-40 w-full hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="overflow-hidden rounded-2xl shadow-xl shadow-black/20">
          <img
            :src="shoppingImage2"
            alt="Online checkout"
            class="object-cover h-40 w-full hover:scale-105 transition-transform duration-500"
          />
        </div>

      </div>

    </div>

  </section>

</template>