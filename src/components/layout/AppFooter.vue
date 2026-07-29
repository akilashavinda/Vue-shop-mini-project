<script setup lang="ts">
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-vue-next';
</script>

<template>
  <footer class="relative bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-12 animate-fade-up">

    <!-- Gradient accent bar -->
    <div class="h-1 w-full bg-gradient-to-r from-primary-dark via-primary to-primary-light"></div>

    <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

      <!-- Company Info -->
      <div>
        <h3 class="font-semibold mb-4 text-lg bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
          Online Shoping
        </h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
          We provide a wide range of high-quality products at affordable prices,
          from fashion to electronics.
        </p>

        <!-- Social Icons -->
        <div class="flex gap-3 mt-4">
          <a
            href="#"
            aria-label="Facebook"
            class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300
                   hover:bg-[#1877F2] hover:text-white
                   hover:scale-110 hover:-translate-y-1
                   transition-all duration-300"
          >
            <Facebook class="w-4 h-4" />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300
                   hover:bg-[#0A66C2] hover:text-white
                   hover:scale-110 hover:-translate-y-1
                   transition-all duration-300"
          >
            <Linkedin class="w-4 h-4" />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300
                   hover:bg-[#E4405F] hover:text-white
                   hover:scale-110 hover:-translate-y-1
                   transition-all duration-300"
          >
            <Instagram class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- About -->
      <div>
        <h4 class="relative inline-block font-semibold mb-4 dark:text-white after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-6 after:rounded-full after:bg-primary">
          About Us
        </h4>
        <ul class="space-y-2 text-sm mt-3">
          <li>
            <router-link
              to="/about"
              class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]"
            >
              Services
            </router-link>
          </li>
          <li>
            <a href="#" class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]">
              Blog
            </a>
          </li>
          <li>
            <router-link
              to="/contact"
              class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]"
            >
              Contact Us
            </router-link>
          </li>
          <li>
            <a href="#" class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]">
              Help
            </a>
          </li>
        </ul>
      </div>

      <!-- Team -->
      <div>
        <h4 class="relative inline-block font-semibold mb-4 dark:text-white after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-6 after:rounded-full after:bg-primary">
          Our Team
        </h4>
        <ul class="space-y-2 text-sm mt-3">
          <li>
            <a href="#" class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]">
              Jobs
            </a>
          </li>
          <li>
            <a href="#" class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]">
              Privacy Policy
            </a>
          </li>
          <li>
            <router-link
              to="/products"
              class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]"
            >
              Products
            </router-link>
          </li>
          <li>
            <a href="#" class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]">
              Shops
            </a>
          </li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h4 class="relative inline-block font-semibold mb-4 dark:text-white after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-6 after:rounded-full after:bg-primary">
          Support
        </h4>
        <ul class="space-y-2 text-sm mt-3">
          <li>
            <a href="#" class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]">
              Knowledge
            </a>
          </li>
          <li>
            <a href="#" class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]">
              Blog
            </a>
          </li>
          <li>
            <a href="#" class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]">
              Live Chat
            </a>
          </li>
          <li>
            <a href="#" class="text-primary bg-gradient-to-r from-primary to-primary bg-[length:0%_1.5px] bg-no-repeat bg-left-bottom pb-0.5 transition-all duration-300 hover:bg-[length:100%_1.5px]">
              Settings
            </a>
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom Footer -->
    <div
      class="border-t border-gray-100 dark:border-gray-800 px-4 py-4 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-gray-600 dark:text-gray-300"
    >
      <div class="flex items-center gap-2 mb-2 sm:mb-0">
        <Mail class="w-4 h-4 text-primary" />
        <span>akila24sh@gmail.com</span>
      </div>

      <div class="flex gap-6">
        <a href="#" class="hover:text-primary transition-colors duration-300">Terms & Conditions</a>
        <a href="#" class="hover:text-primary transition-colors duration-300">Privacy Policy</a>
      </div>
    </div>

  </footer>
</template>