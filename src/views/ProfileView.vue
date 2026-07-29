<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';
import { Mail, User, LogOut } from 'lucide-vue-next';

const router = useRouter();
const { currentUser, logout } = useAuth();

// If someone lands on /profile without being logged in (e.g. they
// typed the URL directly), send them to the login page instead of
// showing a broken/empty profile.
if (!currentUser.value) {
  router.push('/login');
}

function handleLogout() {
  logout();
  router.push('/');
}
</script>

<template>
  <div v-if="currentUser" class="max-w-2xl mx-auto px-4 py-12">
    <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 text-center">
      <img
        :src="currentUser.image"
        :alt="currentUser.username"
        class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
      />
      <h1 class="text-xl font-bold dark:text-white mb-1">
        {{ currentUser.firstName }} {{ currentUser.lastName }}
      </h1>
      <p class="text-gray-500 dark:text-gray-400 mb-6">@{{ currentUser.username }}</p>

      <div class="text-left space-y-3 border-t border-gray-100 dark:border-gray-700 pt-6">
        <div class="flex items-center gap-3 text-sm dark:text-gray-200">
          <User class="w-4 h-4 text-primary" />
          <span>Username: {{ currentUser.username }}</span>
        </div>
        <div class="flex items-center gap-3 text-sm dark:text-gray-200">
          <Mail class="w-4 h-4 text-primary" />
          <span>Email: {{ currentUser.email }}</span>
        </div>
      </div>

      <button
        @click="handleLogout"
        class="mt-8 inline-flex items-center gap-2 border border-red-300 text-red-500 rounded-full px-6 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition"
      >
        <LogOut class="w-4 h-4" />
        Logout
      </button>
    </div>
  </div>
</template>