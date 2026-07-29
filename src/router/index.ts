import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import CategoryView from '../views/CategoryView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import CartView from '../views/CartView.vue';
import SearchResultsView from '../views/SearchResultsView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import ProfileView from '../views/ProfileView.vue'; // ✅ New Import

const router = createRouter({
  history: createWebHistory(),

  routes: [
    // Home Page
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    // All Products Page
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
    },

    // Single Product Details Page
    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetailView,
    },

    // Category Products Page
    {
      path: '/category/:slug',
      name: 'category',
      component: CategoryView,
    },

    // Search Results Page
    {
      path: '/search',
      name: 'search',
      component: SearchResultsView,
    },

    // Checkout Page
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView,
    },

    // About Page
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },

    // Contact Page
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },

    // Login Page
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    // Register Page
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },

    // Shopping Cart Page
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },

    // 👤 Profile Page
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
  ],
});

export default router;