<script setup lang="ts">
interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

const team: TeamMember[] = [
  { name: 'John Alexander', role: 'CEO / Chief Executive Officer', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7h3GjOc7Kh8meKcFKTT-IwNkPh1ZyXAEJ44kH9orJlw&s=10' },
  { name: 'Michael Fernando', role: 'Co-Founder & Head of Product', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScL34qfmzAAjMM1lnCl52bi-PXbZVS9SWn6zV5IWbZ0gwMX10DsRNeSDTq&s=10' },
  { name: 'Sarah Williams', role: 'Co-Founder & Operations Lead', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmR4758-l4ByKZIM7HU_Vp1_Q8qBlbI7Qe1POJ4hW_Q&s=10' },
  { name: 'Daniel Perera', role: 'Co-Founder & Creative Director', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_491DQC5G8sdAudVq9ZP6qSfpbJgCP1qUfdtyg8Jthw&s=10' },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-primary-dark to-primary-light">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 py-12 items-center">
        <div class="text-white">
          <h1 class="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
          <p class="text-white/90 max-w-md">
            We are dedicated to creating products that break boundaries with modern
            functionality. Every detail matters to us from the materials we select to the
            final finishing touches  ensuring a perfect balance of quality, style, and
            performance.
          </p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSir6wJ9lmonusFRYITLmOkxUaG1S7c2nzEZ8vIEcN77VFFSyOJHLadnn4&s=10"
          alt="Our team"
          class="rounded-2xl w-full h-56 object-cover"
        />
      </div>
    </section>

    <!-- Approach cards -->
    <section class="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
      <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
        <h3 class="font-semibold text-primary mb-2">Simple, Minimal Design</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          Our approach stays focused on minimal design, personable craftsmanship, and everyday
          usability.
        </p>
      </div>
      <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
        <h3 class="font-semibold text-primary mb-2">Quality & Affordability</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          We believe great products should not only look great but also feel effortless in
          your daily life.
        </p>
      </div>
    </section>

    <!-- Team grid -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="member in team" :key="member.name">
          <img
            :src="member.photo"
            :alt="member.name"
            class="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
          />
          <h4 class="font-semibold dark:text-white">{{ member.name }}</h4>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ member.role }}</p>
        </div>
      </div>
    </section>

    <!-- Banner -->
    <section class="max-w-7xl mx-auto px-4">
      <div class="relative rounded-2xl overflow-hidden h-56">
        <img
          src="https://picsum.photos/seed/missionbanner/1200/400"
          alt="Our mission"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 class="text-white text-4xl md:text-5xl font-bold text-center">
            Our mission. Our vision. Our values.
          </h1>
        </div>
      </div>
    </section>

    <!-- Mission / Vision -->
    <section class="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
      <div>
        <h3 class="text-xl font-bold text-primary mb-2">Our Mission</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          Providing long-lasting, high-quality products to every customer, at fair prices,
          without compromising on craftsmanship or service.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-bold text-primary mb-2">Our Vision</h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          To become a trusted, everyday destination for quality shopping — recognized for
          reliability, style, and exceptional customer experience.
        </p>
      </div>
    </section>

    <!-- Story -->
    <section class="max-w-7xl mx-auto px-4 py-12">
      <h3 class="text-xl font-bold text-primary mb-2">Our Story</h3>
      <p class="text-gray-600 dark:text-gray-300 text-sm max-w-3xl">
        Our journey began with a simple idea: everyone deserves access to well-made products
        at honest prices. What started as a small passion project has grown into a platform
        trusted by thousands of happy customers.
      </p>
    </section>
  </div>
</template>