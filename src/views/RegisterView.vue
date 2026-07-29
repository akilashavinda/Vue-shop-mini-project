<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Account1 from "../assets/account.png";

const fullName = ref('');
const email = ref('');
const password = ref('');
const isSubmitted = ref(false);

// DummyJSON has no real "create account" endpoint that persists new
// users, so we simulate a successful signup here instead of calling
// a real API. This is clearly noted for the Report.pdf.
function handleSubmit() {
  isSubmitted.value = true;
}
</script>

<template>
  <div class="min-h-[85vh] flex items-center justify-center px-4 py-10">
    <div class="w-full max-w-4xl bg-gradient-to-br from-primary-dark to-primary-light rounded-3xl shadow-lg grid md:grid-cols-2 overflow-hidden">
      <!-- Left: form -->
      <div class="p-8 md:p-10 text-white">
        <h1 class="text-2xl font-bold mb-1">Create an account</h1>
        <p class="text-white/80 text-sm mb-6">Join us and start shopping today</p>

        <form v-if="!isSubmitted" @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="text-sm font-medium">Full Name</label>
            <input
              v-model="fullName"
              type="text"
              placeholder="Enter your name"
              required
              class="w-full mt-1 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label class="text-sm font-medium">Your Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
              class="w-full mt-1 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label class="text-sm font-medium">Password</label>
            <input
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
              class="w-full mt-1 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-white text-primary font-semibold rounded-full py-2 hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>

        <div v-else class="bg-white/10 rounded-xl p-6 text-center">
          <p class="font-semibold mb-1">Account created!</p>
          <p class="text-sm text-white/80">
            You can now log in with your details.
          </p>
        </div>

        <div v-if="!isSubmitted" class="flex gap-3 mt-5">
          <button type="button" class="flex-1 border border-white/50 rounded-full py-2 text-sm"> Apple</button>
          <button type="button" class="flex-1 border border-white/50 rounded-full py-2 text-sm"> Google</button>
        </div>

        <div class="flex justify-between text-xs mt-6 text-white/80">
          <span>
            Have an account?
            <RouterLink to="/login" class="underline font-medium">Login</RouterLink>
          </span>
          <span>Terms & Conditions</span>
        </div>
      </div>

      <!-- Right: image -->
      <div class="hidden md:block">
        <img
          :src="Account1"
          alt="Shopping"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>