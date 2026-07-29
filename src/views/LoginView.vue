<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { loginUser } from '../services/api';
import { useAuth } from '../composables/useAuth';
import { ShoppingCart } from 'lucide-vue-next';

const router = useRouter();
const { setUser } = useAuth();

const email = ref(''); // used as "username" behind the scenes for DummyJSON
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

async function handleSubmit() {
  errorMessage.value = '';
  isLoading.value = true;
  try {
    const user = await loginUser({ username: email.value, password: password.value });
    setUser(user);
    router.push('/');
  } catch (err) {
    errorMessage.value = 'Invalid email/username or password.';
    console.error(err);
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div class="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary-light/20 via-white to-primary-dark/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
    <div class="w-full max-w-sm bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8">
      <div class="flex flex-col items-center mb-6">
        <ShoppingCart class="w-10 h-10 text-primary mb-2" />
        <h1 class="text-xl font-bold dark:text-white">Welcome Back</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">Login to continue shopping</p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="text-sm font-medium dark:text-gray-200">Email</label>
          <input
            v-model="email"
            type="text"
            placeholder="Enter your email"
            required
            class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label class="text-sm font-medium dark:text-gray-200">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            required
            class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-primary text-white font-semibold rounded-full py-2 hover:bg-primary-dark transition disabled:opacity-60"
        >
          {{ isLoading ? 'Logging in...' : 'Submit' }}
        </button>
      </form>

      <div class="flex items-center gap-3 my-5">
        <div class="flex-1 h-px bg-gray-200 dark:bg-gray-600"></div>
        <span class="text-xs text-gray-400">or</span>
        <div class="flex-1 h-px bg-gray-200 dark:bg-gray-600"></div>
      </div>

      <div class="flex gap-3">
        <button type="button" class="flex-1 border border-gray-200 dark:border-gray-600 rounded-full py-2 text-sm dark:text-white"> Apple</button>
        <button type="button" class="flex-1 border border-gray-200 dark:border-gray-600 rounded-full py-2 text-sm dark:text-white"> Google</button>
      </div>

      <p class="text-center text-xs text-gray-400 mt-5">Terms & Conditions</p>
      <p class="text-center text-sm mt-2 dark:text-gray-300">
        Don't have an account?
        <RouterLink to="/register" class="text-primary font-medium hover:underline">Sign up</RouterLink>
      </p>
    </div>
  </div>
</template>