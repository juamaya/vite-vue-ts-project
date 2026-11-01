
<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const links = [
  { name: 'Inicio', path: '/', icon: '⌂' },
  { name: 'Servicios', path: '/servicios', icon: '✧' },
  { name: 'Proyectos', path: '/proyectos', icon: '▧' },
  { name: 'Nosotros', path: '/nosotros', icon: '◎' },
  { name: 'Contacto', path: '/contacto', icon: '↗' }
]

const isActive = (path) => route.path === path


import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <nav
      class="relative w-full bg-white/85 backdrop-blur-xl
             border-b border-gray-200/70 shadow-sm"
    >
      <div
        class="w-full px-5 md:px-10 lg:px-16
               flex items-center justify-between h-20"
      >
        <!-- LOGO -->
        <RouterLink
          to="/"
          class="text-2xl font-bold tracking-tight text-gray-900"
          @click="menuOpen = false"
        >
          Juamaya<span class="text-indigo-600">26</span>
        </RouterLink>

        <!-- DESKTOP NAVIGATION -->
        <div class="hidden md:flex items-center gap-2">
          <RouterLink
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="relative px-5 py-3 rounded-xl text-sm
                   font-medium transition-all duration-300"
            :class="isActive(link.path)
              ? 'text-indigo-600 bg-indigo-50'
              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'"
          >
            {{ link.name }}

            <!-- ACTIVE INDICATOR -->
            <span
              class="absolute bottom-0 left-1/2 -translate-x-1/2
                     h-0.75 rounded-full bg-indigo-600
                     transition-all duration-300"
              :class="isActive(link.path)
                ? 'w-6 opacity-100'
                : 'w-0 opacity-0'"
            />
          </RouterLink>
        </div>


<!-- DARK MODE BUTTON -->
<button
  @click="toggleTheme"
  class="ml-4 w-11 h-11 rounded-xl flex items-center
         justify-center border transition-all duration-300
         border-gray-200 dark:border-gray-700
         bg-gray-100 dark:bg-gray-800
         hover:bg-indigo-100 dark:hover:bg-indigo-900"
  :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
>
  <Transition name="theme-icon" mode="out-in">
    <span
      :key="isDark"
      class="text-xl cursor-pointer"
    >
      {{ isDark ? '☀️' : '🌙' }}
    </span>
  </Transition>
</button>



        <!-- MOBILE BUTTON -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden w-11 h-11 flex items-center
                 justify-center rounded-xl bg-gray-100
                 hover:bg-indigo-50 transition"
          aria-label="Abrir menú"
          :aria-expanded="menuOpen"
        >
          <div class="flex flex-col gap-1.5">
            <span
              class="w-5 h-0.5 bg-gray-800 transition-all duration-300"
              :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
            />
            <span
              class="w-5 h-0.5 bg-gray-800 transition-all duration-300"
              :class="menuOpen ? 'opacity-0' : ''"
            />
            <span
              class="w-5 h-0.5 bg-gray-800 transition-all duration-300"
              :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
            />
          </div>
        </button>
      </div>

      <!-- MOBILE MENU -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-3"
      >
        <div
          v-if="menuOpen"
          class="md:hidden absolute top-full left-0 w-full
                 bg-white/95 backdrop-blur-xl
                 border-b border-gray-200 shadow-lg
                 px-5 py-5"
        >
          <div class="flex flex-col gap-2">
            <RouterLink
              v-for="(link, index) in links"
              :key="link.path"
              :to="link.path"
              @click="menuOpen = false"
              class="flex items-center gap-4 px-5 py-4
                     rounded-xl text-sm font-medium
                     transition-all duration-300"
              :class="isActive(link.path)
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'text-gray-600 hover:bg-gray-100'"
              :style="{ transitionDelay: `${index * 35}ms` }"
            >
              <span class="text-lg">{{ link.icon }}</span>
              {{ link.name }}

              <span v-if="isActive(link.path)" class="ml-auto">
                ●
              </span>
            </RouterLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
