<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '../composables/useCart';

const router = useRouter();
const { items, subtotal } = useCart();

const fullName = ref('');
const address = ref('');
const city = ref('');
const phone = ref('');
const isPlacingOrder = ref(false);
const orderPlaced = ref(false);
const orderNumber = ref('');

// Simple flat-rate shipping for the simulation
const shippingFee = computed(() => (subtotal.value > 0 ? 5 : 0));
const total = computed(() => subtotal.value + shippingFee.value);

function generateOrderNumber(): string {
  return 'ORD-' + Math.floor(100000 + Math.random() * 900000);
}

function placeOrder() {
  isPlacingOrder.value = true;

  // Simulated network delay so it feels like a real checkout process.
  // No real backend call happens here - DummyJSON has no order endpoint.
  setTimeout(() => {
    orderNumber.value = generateOrderNumber();
    orderPlaced.value = true;
    isPlacingOrder.value = false;
    items.value = []; // clear the cart
    localStorage.setItem('cartItems', '[]');
  }, 1000);
}
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-10">
    <!-- Order confirmation state -->
    <div v-if="orderPlaced" class="text-center py-16">
      <div class="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-primary flex items-center justify-center mx-auto mb-4 text-3xl">
        ✓
      </div>
      <h1 class="text-2xl font-bold text-primary mb-2">Order Placed Successfully!</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-1">
        Your order number is <span class="font-semibold">{{ orderNumber }}</span>
      </p>
      <p class="text-gray-500 dark:text-gray-400 mb-8">
        A confirmation would normally be sent to your email. This is a simulated order for
        demo purposes.
      </p>
      <RouterLink
        to="/products"
        class="inline-block bg-primary text-white font-semibold rounded-full px-8 py-2 hover:bg-primary-dark transition"
      >
        Continue Shopping
      </RouterLink>
    </div>

    <!-- Empty cart guard -->
    <div v-else-if="items.length === 0" class="text-center py-16">
      <p class="text-gray-500 dark:text-gray-400 mb-4">Your cart is empty.</p>
      <RouterLink to="/products" class="text-primary hover:underline">Browse products</RouterLink>
    </div>

    <!-- Checkout form -->
    <template v-else>
      <h1 class="text-2xl font-bold text-primary mb-6">Checkout</h1>

      <div class="grid md:grid-cols-2 gap-10">
        <form @submit.prevent="placeOrder" class="space-y-4">
          <h2 class="font-semibold dark:text-white">Shipping Details</h2>

          <div>
            <label class="text-sm font-medium dark:text-gray-200">Full Name</label>
            <input
              v-model="fullName"
              type="text"
              required
              class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label class="text-sm font-medium dark:text-gray-200">Address</label>
            <input
              v-model="address"
              type="text"
              required
              class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-sm font-medium dark:text-gray-200">City</label>
              <input
                v-model="city"
                type="text"
                required
                class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label class="text-sm font-medium dark:text-gray-200">Phone</label>
              <input
                v-model="phone"
                type="tel"
                required
                class="w-full mt-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <button
            type="submit"
            :disabled="isPlacingOrder"
            class="w-full bg-primary text-white font-semibold rounded-full py-3 hover:bg-primary-dark transition disabled:opacity-60"
          >
            {{ isPlacingOrder ? 'Placing order...' : 'Place Order' }}
          </button>
        </form>

        <div>
          <h2 class="font-semibold mb-4 dark:text-white">Order Summary</h2>
          <div class="space-y-3 mb-4">
            <div
              v-for="item in items"
              :key="item.product.id"
              class="flex items-center gap-3 text-sm"
            >
              <img :src="item.product.thumbnail" :alt="item.product.title" class="w-12 h-12 rounded object-cover" />
              <div class="flex-1">
                <p class="dark:text-white">{{ item.product.title }}</p>
                <p class="text-gray-400">Qty: {{ item.quantity }}</p>
              </div>
              <span class="font-medium dark:text-gray-200">
                ${{ (item.product.price * item.quantity).toFixed(2) }}
              </span>
            </div>
          </div>

          <div class="space-y-2 text-sm border-t border-gray-200 dark:border-gray-700 pt-4 dark:text-gray-200">
            <div class="flex justify-between"><span>Subtotal</span><span>${{ subtotal.toFixed(2) }}</span></div>
            <div class="flex justify-between"><span>Shipping</span><span>${{ shippingFee.toFixed(2) }}</span></div>
            <div class="flex justify-between font-bold text-primary text-base border-t border-gray-200 dark:border-gray-700 pt-2">
              <span>Total</span><span>${{ total.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>