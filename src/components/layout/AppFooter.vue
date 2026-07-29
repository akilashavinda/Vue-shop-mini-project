<script setup lang="ts">
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-12 animate-fade-up">
    <div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

      <!-- Company Info -->
      <div>
        <h3 class="text-primary font-semibold mb-4">Online Shoping</h3>
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
        <h4 class="font-semibold mb-3 dark:text-white">About Us</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <router-link to="/about" class="text-primary hover:underline">
              Services
            </router-link>
          </li>
          <li>
            <a href="#" class="text-primary hover:underline">Blog</a>
          </li>
          <li>
            <router-link to="/contact" class="text-primary hover:underline">
              Contact Us
            </router-link>
          </li>
          <li>
            <a href="#" class="text-primary hover:underline">Help</a>
          </li>
        </ul>
      </div>

      <!-- Team -->
      <div>
        <h4 class="font-semibold mb-3 dark:text-white">Our Team</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="#" class="text-primary hover:underline">Jobs</a>
          </li>
          <li>
            <a href="#" class="text-primary hover:underline">Privacy Policy</a>
          </li>
          <li>
            <router-link to="/products" class="text-primary hover:underline">
              Products
            </router-link>
          </li>
          <li>
            <a href="#" class="text-primary hover:underline">Shops</a>
          </li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h4 class="font-semibold mb-3 dark:text-white">Support</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <a href="#" class="text-primary hover:underline">Knowledge</a>
          </li>
          <li>
            <a href="#" class="text-primary hover:underline">Blog</a>
          </li>
          <li>
            <a href="#" class="text-primary hover:underline">Live Chat</a>
          </li>
          <li>
            <a href="#" class="text-primary hover:underline">Settings</a>
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom Footer -->
    <div
      class="border-t border-gray-100 dark:border-gray-800 px-4 py-4 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto text-sm text-gray-600 dark:text-gray-300"
    >
      <div class="flex items-center gap-2 mb-2 sm:mb-0">
        <Mail class="w-4 h-4" />
        <span>akila24sh@gmail.com</span>
      </div>

      <div class="flex gap-6">
        <a href="#" class="hover:underline">Terms & Conditions</a>
        <a href="#" class="hover:underline">Privacy Policy</a>
      </div>
    </div>

  </footer>
</template>