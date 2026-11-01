
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useTheme } from './composables/useTheme'

const { isDark } = useTheme()
</script>

<template>
  <div
    class="min-h-screen w-full transition-colors duration-300"
    :class="isDark
      ? 'bg-[#0B0D17] text-gray-100'
      : 'bg-gray-50 text-gray-900'"
  >
    <Navbar />

    <main id="app" class="w-full pt-20">
      <RouterView v-slot="slotProps">
        <Transition
          name="page"
          mode="out-in"
          appear
        >
          <component
            v-if="slotProps.Component"
            :is="slotProps.Component"
            :key="slotProps.route.fullPath"
          />
        </Transition>
      </RouterView>
    </main>

   <Footer/>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity .35s ease,
              transform .35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: all .2s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(.5);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(.5);
}
</style>
