import { ref, computed } from 'vue';
import type { Product } from '../types/product';
import type { CartItem } from '../types/cart';

// Shared global state, same pattern as useAuth/useDarkMode
const stored = localStorage.getItem('cartItems');
const items = ref<CartItem[]>(stored ? JSON.parse(stored) : []);

function persist() {
  localStorage.setItem('cartItems', JSON.stringify(items.value));
}

export function useCart() {
  function addToCart(product: Product, quantity = 1) {
    const existing = items.value.find((i) => i.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.value.push({ product, quantity });
    }
    persist();
  }

  function removeFromCart(productId: number) {
    items.value = items.value.filter((i) => i.product.id !== productId);
    persist();
  }

  function updateQuantity(productId: number, quantity: number) {
    const item = items.value.find((i) => i.product.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      persist();
    }
  }

  const totalItems = computed(() =>
    items.value.reduce((sum, i) => sum + i.quantity, 0)
  );

  const subtotal = computed(() =>
    items.value.reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  );

  return { items, addToCart, removeFromCart, updateQuantity, totalItems, subtotal };
}