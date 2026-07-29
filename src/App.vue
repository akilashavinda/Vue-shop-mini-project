<script setup lang="ts">
import NavBar from './components/layout/NavBar.vue';
import AppFooter from './components/layout/AppFooter.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
    <NavBar />
    <main class="flex-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>