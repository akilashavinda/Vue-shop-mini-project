import { ref } from 'vue';
import type { AuthUser } from '../types/auth';

// Same pattern as useDarkMode: state defined outside the function
// so every component sharing useAuth() sees the same logged-in user.
const storedUser = localStorage.getItem('authUser');
const currentUser = ref<AuthUser | null>(storedUser ? JSON.parse(storedUser) : null);

export function useAuth() {
  function setUser(user: AuthUser) {
    currentUser.value = user;
    localStorage.setItem('authUser', JSON.stringify(user));
  }

  function logout() {
    currentUser.value = null;
    localStorage.removeItem('authUser');
  }

  return { currentUser, setUser, logout };
}