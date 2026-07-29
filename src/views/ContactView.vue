<script setup lang="ts">
import { ref } from 'vue';
import { MapPin, Mail, Phone } from 'lucide-vue-next';

import contactBanner from '../assets/contactus/contactus.jpg'
import contactBanner1 from '../assets/contactus/contactus1.jpg'
import contactBanner2 from '../assets/contactus/contactus2.jpg'

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');
const isSubmitted = ref(false);

// No real backend for contact form submissions in this project,
// so we simulate a successful send.
function handleSubmit() {
  isSubmitted.value = true;
}
</script>

<template>
  <div>
    <!-- Hero -->
   <!-- Hero -->
<section class="bg-gradient-to-br from-primary-dark to-primary-light">
  <div class="max-w-7xl mx-auto px-4 py-12 text-white">
    <h1 class="text-3xl md:text-4xl font-extrabold mb-3">
      Contact Us
    </h1>

    <p class="max-w-2xl text-white/90 mb-8">
      We'd love to hear from you! Whether you have a question about our products,
      need support, or want help with your order, our team is here to assist.
    </p>

    <div class="grid sm:grid-cols-3 gap-4 mb-10">
      <div class="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
        <MapPin class="w-5 h-5 shrink-0" />
        <span class="text-sm">Colombo, Sri Lanka</span>
      </div>

      <div class="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
        <Mail class="w-5 h-5 shrink-0" />
        <span class="text-sm">akila24sh@gmail.com</span>
      </div>

      <div class="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
        <Phone class="w-5 h-5 shrink-0" />
        <span class="text-sm">0781466541</span>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-8 items-center">
      <!-- Images -->
      <div class="grid grid-cols-2 gap-4">
        <img
          :src="contactBanner"
          alt="Support team"
          class="col-span-2 rounded-2xl h-56 w-full object-cover"
        />

        <img
          :src="contactBanner1"
          alt="Customer"
          class="rounded-2xl h-40 w-full object-cover"
        />

        <img
          :src="contactBanner2"
          alt="Support Desk"
          class="rounded-2xl h-40 w-full object-cover"
        />
      </div>

      <!-- Text -->
      <div>
        <h1 class="text-5xl font-bold mb-4">
          We're Here to Help
        </h1>

        <p class="text-white/90 mb-6">
          Our support team is dedicated to providing quick and friendly service
          to ensure your shopping experience is smooth and enjoyable. Feel free
          to contact us anytime.
        </p>

        <div class="flex gap-4">
          <button
            class="bg-white text-primary font-semibold rounded-full px-6 py-2 hover:bg-gray-100 transition"
          >
            Start Now
          </button>

          <button
            class="border border-white rounded-full px-6 py-2 hover:bg-white/10 transition"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
    

    <!-- Form -->
    <section class="max-w-3xl mx-auto px-4 py-12">
      <div v-if="isSubmitted" class="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl p-6 text-center">
        Thanks for reaching out! We'll get back to you soon.
      </div>

      <form v-else @submit.prevent="handleSubmit" class="space-y-4">
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="text-sm font-medium dark:text-gray-200">First Name</label>
            <input
              v-model="firstName"
              type="text"
              required
              class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label class="text-sm font-medium dark:text-gray-200">Last Name</label>
            <input
              v-model="lastName"
              type="text"
              class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div>
          <label class="text-sm font-medium dark:text-gray-200">Email Address</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label class="text-sm font-medium dark:text-gray-200">Message</label>
          <textarea
            v-model="message"
            rows="5"
            required
            class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-primary text-white font-semibold rounded-full px-8 py-2 hover:bg-primary-dark transition"
        >
          Send Message
        </button>
      </form>
    </section>
  </div>
</template>