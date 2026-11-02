<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Avatar from "./Avatar.vue";

const avatarImage = `${import.meta.env.BASE_URL}images/juan.jpg`;
const currentYear = new Date().getFullYear();

const email = ref("");

const navigation = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Proyectos", path: "/proyectos" },
  { name: "Nosotros", path: "/nosotros" },
  { name: "Contacto", path: "/contacto" },
];

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "GitHub", url: "https://github.com" },
];
</script>

<template>
  <footer class="relative bg-[#10111B] text-white overflow-hidden">
    <!-- DECORATIVE BACKGROUND -->
    <div
      class="absolute -top-40 left-1/2 -translate-x-1/2 w-125 h-75 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none"
    ></div>

    <div class="relative w-full px-6 md:px-12 lg:px-20">
      <!-- TOP FOOTER -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
        <!-- BRAND -->
        <div class="lg:col-span-2 space-y-6">
          <RouterLink to="/" class="inline-block">
            <span class="text-3xl font-bold tracking-tight">
              Juamaya<span class="text-indigo-500">26</span>
            </span>
          </RouterLink>
          <Avatar name="Juamaya" :image="avatarImage" size="lg" />

          <p class="text-gray-400 text-sm leading-7 max-w-sm">
            Creamos experiencias digitales únicas, combinando diseño, tecnología
            e innovación para transformar ideas en resultados.
          </p>

          <!-- SOCIAL LINKS -->
          <div class="flex items-center gap-3 pt-2">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 text-xs font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:-translate-y-1 transition-all duration-300"
            >
              {{ social.name.slice(0, 2).toUpperCase() }}
            </a>
          </div>
        </div>

        <!-- NAVIGATION -->
        <div>
          <h3 class="text-white font-semibold text-sm mb-6">Navegación</h3>

          <ul class="space-y-4">
            <li v-for="link in navigation" :key="link.path">
              <RouterLink
                :to="link.path"
                class="text-gray-400 text-sm hover:text-indigo-400 hover:translate-x-1 inline-block transition-all duration-300"
              >
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- CONTACT -->
        <div>
          <h3 class="text-white font-semibold text-sm mb-6">Contacto</h3>

          <ul class="space-y-4 text-sm text-gray-400">
            <li>
              <span class="block text-gray-500 text-xs mb-1"> Email </span>
              <a
                href="mailto:hola@nex.com"
                class="hover:text-indigo-400 transition"
              >
                micorreo@gmail.com
              </a>
            </li>

            <li>
              <span class="block text-gray-500 text-xs mb-1"> Ubicación </span>
              Puerto Real, Cadiz, España
            </li>

            <li>
              <RouterLink
                to="/contacto"
                class="inline-flex items-center gap-2 mt-2 text-indigo-400 hover:text-indigo-300 transition"
              >
                Hablemos de tu proyecto
                <span>↗</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- BOTTOM FOOTER -->
    <div
      class="py-7 flex flex-col md:flex-row justify-between items-center gap-5 mx-10"
    >
      <p class="text-gray-500 text-xs text-center">
        © {{ currentYear }} Juamaya26. Todos los derechos reservados.
      </p>

      <a
        href="#app"
        class="text-gray-400 text-xs hover:text-indigo-400 transition flex items-center gap-2"
      >
        Volver arriba ↑
      </a>
    </div>
  </footer>
</template>
