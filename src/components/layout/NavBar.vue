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
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">

    <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="flex items-center gap-2 font-bold text-lg text-primary"
      >
        <img
          :src="logo"
          alt="MyShop Logo"
          class="h-14 w-14 object-contain hover:scale-110 transition-transform duration-300"
        />

        <span class="hidden sm:inline dark:text-white">
          Online Shop
        </span>
      </RouterLink>

      <!-- Desktop Links -->
      <ul class="hidden md:flex items-center gap-8 font-medium">

        <li>
          <RouterLink
            to="/"
            class="dark:text-white hover:text-primary"
            active-class="text-primary border-b-2 border-primary pb-1"
          >
            Menu
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/products"
            class="dark:text-white hover:text-primary"
            active-class="text-primary border-b-2 border-primary pb-1"
          >
            Products
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/about"
            class="dark:text-white hover:text-primary"
            active-class="text-primary border-b-2 border-primary pb-1"
          >
            About Us
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/contact"
            class="dark:text-white hover:text-primary"
            active-class="text-primary border-b-2 border-primary pb-1"
          >
            Contact Us
          </RouterLink>
        </li>

      </ul>

      <!-- Right Side -->
      <div class="flex items-center gap-4">

        <!-- Dark Mode -->
        <button
          @click="toggleDark"
          class="dark:text-white"
          aria-label="Toggle dark mode"
        >
          <Sun
            v-if="isDark"
            class="w-5 h-5"
          />

          <Moon
            v-else
            class="w-5 h-5"
          />
        </button>

        <!-- Wishlist -->
        <Bookmark
          class="w-5 h-5 hidden sm:block dark:text-white"
        />

        <!-- Cart With Badge -->
        <RouterLink
          to="/cart"
          class="relative hidden sm:block"
        >
          <ShoppingCart
            class="w-5 h-5 dark:text-white"
          />

          <span
            v-if="totalItems > 0"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
          >
            {{ totalItems }}
          </span>
        </RouterLink>

        <!-- Login Button -->
        <RouterLink
          v-if="!currentUser"
          to="/login"
          class="hidden md:inline-block bg-primary text-white rounded-full px-5 py-2 hover:bg-primary-dark transition"
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
            class="w-8 h-8 rounded-full"
          />

          <span class="text-sm font-medium dark:text-white">
            {{ currentUser.username }}
          </span>
        </RouterLink>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden dark:text-white"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <component
            :is="mobileMenuOpen ? X : MenuIcon"
            class="w-6 h-6"
          />
        </button>

      </div>

    </nav>

    <!-- Mobile Menu -->
    <ul
      v-if="mobileMenuOpen"
      class="md:hidden flex flex-col gap-3 px-4 pb-4 font-medium"
    >

      <li>
        <RouterLink
          to="/"
          @click="mobileMenuOpen = false"
          class="dark:text-white"
        >
          Menu
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/products"
          @click="mobileMenuOpen = false"
          class="dark:text-white"
        >
          Products
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/about"
          @click="mobileMenuOpen = false"
          class="dark:text-white"
        >
          About Us
        </RouterLink>
      </li>

      <li>
        <RouterLink
          to="/contact"
          @click="mobileMenuOpen = false"
          class="dark:text-white"
        >
          Contact Us
        </RouterLink>
      </li>

      <!-- Mobile Cart -->
      <li>
        <RouterLink
          to="/cart"
          @click="mobileMenuOpen = false"
          class="dark:text-white"
        >
          Cart ({{ totalItems }})
        </RouterLink>
      </li>

      <!-- Mobile Login -->
      <li v-if="!currentUser">
        <RouterLink
          to="/login"
          @click="mobileMenuOpen = false"
          class="dark:text-white"
        >
          Login
        </RouterLink>
      </li>

      <!-- Mobile Logout -->
      <li v-else>
        <button
          @click="logout"
          class="dark:text-white"
        >
          Logout
        </button>
      </li>

    </ul>

  </header>
</template>