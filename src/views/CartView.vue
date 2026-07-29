<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '../composables/useCart';
import { Trash2 } from 'lucide-vue-next';

const router = useRouter();

const { items, removeFromCart, updateQuantity, subtotal } = useCart();

const promoCode = ref('');
const appliedDiscount = ref(0);
const promoMessage = ref('');

// This is a simulated promo code (no real backend validation).
// Typing "SAVE10" applies a 10% demo discount.
function applyPromoCode() {
  if (promoCode.value.trim().toUpperCase() === 'SAVE10') {
    appliedDiscount.value = 0.1;
    promoMessage.value = '10% discount applied!';
  } else {
    appliedDiscount.value = 0;
    promoMessage.value = 'Invalid promotion code.';
  }
}

function handleQuantityChange(productId: number, event: Event) {
  const value = Number((event.target as HTMLInputElement).value);
  updateQuantity(productId, value);
}

function goToCheckout() {
  router.push('/checkout');
}

const discountAmount = computed(() => subtotal.value * appliedDiscount.value);
const total = computed(() => subtotal.value - discountAmount.value);
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold text-primary mb-6">
      Shopping Cart
    </h1>

    <div
      v-if="items.length === 0"
      class="text-gray-500 dark:text-gray-400"
    >
      Your cart is empty.
      <RouterLink
        to="/products"
        class="text-primary hover:underline"
      >
        Start shopping
      </RouterLink>
    </div>

    <template v-else>

      <table class="w-full text-left mb-8">

        <thead>
          <tr class="border-b border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
            <th class="py-2">Product</th>
            <th class="py-2">Price</th>
            <th class="py-2">Quantity</th>
            <th class="py-2">Subtotal</th>
            <th class="py-2"></th>
          </tr>
        </thead>

        <tbody>

          <tr
            v-for="item in items"
            :key="item.product.id"
            class="border-b border-gray-100 dark:border-gray-800"
          >

            <td class="py-3 flex items-center gap-3">
              <img
                :src="item.product.thumbnail"
                :alt="item.product.title"
                class="w-12 h-12 rounded object-cover"
              />

              <span class="text-sm dark:text-white">
                {{ item.product.title }}
              </span>
            </td>

            <td class="py-3 dark:text-gray-200">
              ${{ item.product.price.toFixed(2) }}
            </td>

            <td class="py-3">
              <input
                type="number"
                min="1"
                :value="item.quantity"
                @change="handleQuantityChange(item.product.id, $event)"
                class="w-16 rounded border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-2 py-1"
              />
            </td>

            <td class="py-3 font-medium dark:text-white">
              ${{ (item.product.price * item.quantity).toFixed(2) }}
            </td>

            <td class="py-3">
              <button
                @click="removeFromCart(item.product.id)"
                aria-label="Remove item"
              >
                <Trash2 class="w-4 h-4 text-red-500" />
              </button>
            </td>

          </tr>

        </tbody>

      </table>

      <div class="grid md:grid-cols-2 gap-8">

        <!-- Promotion -->
        <div>

          <h2 class="font-semibold mb-3 dark:text-white">
            Promotion Code
          </h2>

          <div class="flex gap-2">

            <input
              v-model="promoCode"
              type="text"
              placeholder="Enter code"
              class="flex-1 rounded-lg border border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white px-4 py-2"
            />

            <button
              @click="applyPromoCode"
              class="bg-primary text-white rounded-lg px-4 py-2 hover:bg-primary-dark transition"
            >
              Apply Now
            </button>

          </div>

          <p
            v-if="promoMessage"
            class="text-sm mt-2"
            :class="appliedDiscount ? 'text-green-600' : 'text-red-500'"
          >
            {{ promoMessage }}
          </p>

          <p class="text-xs text-gray-400 mt-2">
            Try "SAVE10" for a demo discount.
          </p>

        </div>

        <!-- Totals -->
        <div>

          <h2 class="font-semibold mb-3 dark:text-white">
            Cart Totals
          </h2>

          <div class="space-y-2 text-sm dark:text-gray-200">

            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>

            <div class="flex justify-between">
              <span>Discount</span>
              <span>-${{ discountAmount.toFixed(2) }}</span>
            </div>

            <div class="flex justify-between font-bold text-primary text-base border-t border-gray-200 dark:border-gray-700 pt-2">
              <span>Total</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>

          </div>

          <button
            @click="goToCheckout"
            class="w-full mt-4 bg-primary text-white rounded-full py-2 hover:bg-primary-dark transition"
          >
            Proceed to Checkout
          </button>

        </div>

      </div>

    </template>

  </div>
</template>