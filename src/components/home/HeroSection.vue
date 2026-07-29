<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SearchBar from '../ui/SearchBar.vue';
import shoppingImage from '../../assets/online-shopping.jpg'
import shoppingImage1 from '../../assets/online-shopping1.jpg'
import shoppingImage2 from '../../assets/online-shopping2.jpg'

</script>


<template>

  <section class="bg-gradient-to-br from-primary-dark to-primary-light">

    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 py-12 items-center">


      <!-- Left: Text -->
      <div class="text-white">


        <!-- Search Component -->
        <div class="mb-8 max-w-sm">
          <SearchBar />
        </div>



        <h1 class="text-6xl md:text-7xl font-extrabold leading-tight mb-4 animate-glow-pulse">
          Discover Your Style.<br />
          Shop Smart.
        </h1>


        <h4 class="mb-8 text-white/90">
          Trendy fashion, electronics & more all in one place at unbeatable prices.
        </h4>



        <div class="flex gap-4 mb-6">


          <RouterLink
            to="/products"
            class="bg-white text-primary font-semibold rounded-full px-6 py-2 hover:bg-gray-100 transition"
          >
            Start Now
          </RouterLink>



          <RouterLink
            to="/products"
            class="border border-white text-white rounded-full px-6 py-2 hover:bg-white/10 transition"
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


        <img
          :src="shoppingImage"
          alt="Shopping lifestyle"
          class="col-span-2 rounded-2xl object-cover h-56 w-full"
        />

        <img
          :src="shoppingImage1"
          alt="Shopping bags"
          class="rounded-2xl object-cover h-40 w-full"
        />

        <img
          :src="shoppingImage2"
          alt="Online checkout"
          class="rounded-2xl object-cover h-40 w-full"
        />

      </div>

    </div>

  </section>

</template>