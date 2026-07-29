<script setup lang="ts">
import promotion from '../../assets/promotion.jpg'

</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
    <img
      :src="promotion"
      alt="Promotion"
      class="rounded-2xl w-full h-64 object-cover"
    />
    <div>
      <h2 class="text-2xl font-bold text-primary mb-3">Best promotions</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Enjoy exclusive discounts on our best-selling categories this month. High-quality
        products, unbeatable prices, and fast delivery — every single time you shop with us.
      </p>
      <span class="inline-block bg-primary text-white font-bold text-lg rounded-full px-6 py-3">
        Exclusive 20% Off
      </span>
    </div>
  </section>
</template>