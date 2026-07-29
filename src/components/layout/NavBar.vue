<script setup lang="ts">
import { ref } from 'vue';
import {
  Bookmark,
  ShoppingCart,
  Sun,
  Moon,
  Menu as MenuIcon,
  X
} from 'lucide-vue-next';

import logo from '../../assets/logo.png';

import { useDarkMode } from '../../composables/useDarkMode';
import { useAuth } from '../../composables/useAuth';
import { useCart } from '../../composables/useCart';

const { isDark, toggleDark } = useDarkMode();
const { currentUser, logout } = useAuth();
const { totalItems } = useCart();
const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">

    <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="flex items-center gap-2 font-bold text-lg"
      >
        <img
          :src="logo"
          alt="MyShop Logo"
          class="h-14 w-14 object-contain hover:scale-110 hover:rotate-3 transition-transform duration-300"
        />

        <span class="hidden sm:inline bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
          Online Shop
        </span>
      </RouterLink>

      <!-- Desktop Links -->
      <ul class="hidden md:flex items-center gap-1 font-medium">

        <li>
          <RouterLink
            to="/"
            class="px-3 py-2 rounded-full dark:text-white hover:text-primary transition-colors"
            active-class="text-primary bg-primary/10"
          >
            Menu
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/products"
            class="px-3 py-2 rounded-full dark:text-white hover:text-primary transition-colors"
            active-class="text-primary bg-primary/10"
          >
            Products
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/about"
            class="px-3 py-2 rounded-full dark:text-white hover:text-primary transition-colors"
            active-class="text-primary bg-primary/10"
          >
            About Us
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/contact"
            class="px-3 py-2 rounded-full dark:text-white hover:text-primary transition-colors"
            active-class="text-primary bg-primary/10"
          >
            Contact Us
          </RouterLink>
        </li>

      </ul>

      <!-- Right Side -->
      <div class="flex items-center gap-2">

        <!-- Dark Mode -->
        <button
          @click="toggleDark"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white transition-colors"
          aria-label="Toggle dark mode"
        >
          <Sun v-if="isDark" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </button>

        <!-- Wishlist -->
        <button
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white hidden sm:inline-flex transition-colors"
          aria-label="Bookmarks"
        >
          <Bookmark class="w-5 h-5" />
        </button>

        <!-- Cart With Badge -->
        <RouterLink
          to="/cart"
          class="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white hidden sm:inline-flex transition-colors"
        >
          <ShoppingCart class="w-5 h-5" />

          <span
            v-if="totalItems > 0"
            class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
          >
            {{ totalItems }}
          </span>
        </RouterLink>

        <!-- Login Button -->
        <RouterLink
          v-if="!currentUser"
          to="/login"
          class="hidden md:inline-block bg-gradient-to-r from-primary-dark to-primary-light text-white rounded-full px-5 py-2 shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
        >
          Login
        </RouterLink>

        <!-- User Profile -->
        <RouterLink
          v-else
          to="/profile"
          class="hidden md:flex items-center gap-2 hover:opacity-80 transition"
        >
          <img
            :src="currentUser.image"
            :alt="currentUser.username"
            class="w-8 h-8 rounded-full ring-2 ring-primary/40"
          />

          <span class="text-sm font-medium dark:text-white">
            {{ currentUser.username }}
          </span>
        </RouterLink>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden dark:text-white p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <component :is="mobileMenuOpen ? X : MenuIcon" class="w-6 h-6" />
        </button>

      </div>

    </nav>

    <!-- Mobile Menu -->
    <ul
      v-if="mobileMenuOpen"
      class="md:hidden flex flex-col gap-1 px-4 pb-4 font-medium"
    >

      <li>
        <RouterLink
          to="/"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-full dark:text-white"
          active-class="text-primary bg-primary/10"
        >
          Menu
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/products"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-full dark:text-white"
          active-class="text-primary bg-primary/10"
        >
          Products
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/about"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-full dark:text-white"
          active-class="text-primary bg-primary/10"
        >
          About Us
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/contact"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-full dark:text-white"
          active-class="text-primary bg-primary/10"
        >
          Contact Us
        </RouterLink>
      </li>

      <!-- Mobile Cart -->
      <li>
        <RouterLink
          to="/cart"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-full dark:text-white"
          active-class="text-primary bg-primary/10"
        >
          Cart ({{ totalItems }})
        </RouterLink>
      </li>

      <!-- Mobile Login -->
      <li v-if="!currentUser">
        <RouterLink
          to="/login"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-full dark:text-white"
          active-class="text-primary bg-primary/10"
        >
          Login
        </RouterLink>
      </li>

      <!-- Mobile Logout -->
      <li v-else>
        <button
          @click="logout"
          class="block px-3 py-2 rounded-full dark:text-white text-left w-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Logout
        </button>
      </li>

    </ul>

  </header>
</template>