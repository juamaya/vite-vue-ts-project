import { ref, watch } from "vue";

const savedTheme = localStorage.getItem("theme");

const isDark = ref(
  savedTheme
    ? savedTheme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches,
);

watch(
  isDark,
  (dark) => {
    document.documentElement.classList.toggle("dark", dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  },
  { immediate: true },
);

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggleTheme,
  };
}
