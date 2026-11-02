<script setup lang="ts">
import { RouterLink } from "vue-router";
import Estadisticas from "../components/Estadisticas.vue";
import Historia from "../components/Historia.vue";
import Vision from "../components/Vision.vue";
import Valores from "../components/Valores.vue";
import Proceso from "../components/Proceso.vue";
import HeroAbout from "../components/HeroAbout.vue";
import CtaFinal from "../components/CtaFinal.vue";

const juan = `${import.meta.env.BASE_URL}images/juan.jpg`;
const madre = `${import.meta.env.BASE_URL}images/madre.jpg`;
const padre = `${import.meta.env.BASE_URL}images/padre.jpg`;

const team = [
  {
    name: "Alex Morgan",
    role: "Director creativo",
    image: padre,
    description: "Lidera la visión creativa y estratégica.",
  },
  {
    name: "Sophia Williams",
    role: "Diseñadora UI/UX",
    image: madre,
    description: "Diseña experiencias digitales intuitivas.",
  },
  {
    name: "Daniel Carter",
    role: "Desarrollador web",
    image: juan,
    description: "Convierte ideas en soluciones tecnológicas.",
  },
];
</script>

<template>
  <main
    class="overflow-hidden bg-gray-50 dark:bg-[#0B0D17] text-gray-900 dark:text-white transition-colors duration-300"
  >
    <!-- HEROABOUT -->
    <HeroAbout />

    <!-- ESTADISTICAS -->
    <Estadisticas />

    <!-- HISTORIA -->
    <Historia />

    <!-- MISION Y VISION -->
    <Vision />
    <!-- VALORES -->
    <Valores />
    <!-- EQUIPO -->
    <section
      class="py-24 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#111421] border-y border-gray-200 dark:border-white/5"
    >
      <div class="max-w-7xl mx-auto">
        <div
          class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span
              class="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase"
            >
              Nuestro equipo
            </span>
            <h2 class="mt-4 text-4xl md:text-5xl font-bold">
              Las personas detrás de NEX.
            </h2>
            <p class="mt-5 max-w-xl text-gray-600 dark:text-gray-400">
              Un equipo apasionado que combina talento, creatividad y
              tecnología.
            </p>
          </div>

          <RouterLink
            to="/contacto"
            class="text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:underline"
          >
            Únete a nosotros →
          </RouterLink>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="person in team"
            :key="person.name"
            class="group overflow-hidden rounded-3xl bg-gray-50 dark:bg-[#151827] border border-gray-200 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
          >
            <div class="relative overflow-hidden h-87.5">
              <img
                :src="person.image"
                :alt="person.name"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div
                class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"
              ></div>

              <span
                class="absolute bottom-5 left-5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold"
              >
                Equipo NEX
              </span>
            </div>

            <div class="p-7">
              <h3 class="text-xl font-bold">{{ person.name }}</h3>

              <p
                class="mt-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400"
              >
                {{ person.role }}
              </p>

              <p
                class="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400"
              >
                {{ person.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- PROCESO -->
    <Proceso />
    <!-- CTA FINAL -->
    <CtaFinal />
  </main>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
