import { ref, watchEffect } from 'vue';

// This state is defined OUTSIDE the function, so every component
// that calls useDarkMode() shares the SAME isDark value (a simple
// global state pattern without needing Pinia).
const isDark = ref(localStorage.getItem('theme') === 'dark');

watchEffect(() => {
  const root = document.documentElement;
  if (isDark.value) {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

export function useDarkMode() {
  function toggleDark() {
    isDark.value = !isDark.value;
  }
  return { isDark, toggleDark };
}