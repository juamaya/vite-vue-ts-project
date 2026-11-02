<script setup lang="ts">
const steps = [
  {
    number: "01",
    title: "Escuchamos",
    description: "Conocemos tus necesidades y comprendemos tus objetivos.",
  },
  {
    number: "02",
    title: "Planificamos",
    description: "Diseñamos una estrategia adaptada a tu proyecto.",
  },
  {
    number: "03",
    title: "Creamos",
    description: "Desarrollamos soluciones digitales modernas y funcionales.",
  },
  {
    number: "04",
    title: "Evolucionamos",
    description: "Seguimos mejorando para alcanzar nuevos resultados.",
  },
];
</script>
<template>
  <div>
    <section class="py-24 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span
            class="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase"
          >
            Nuestro proceso
          </span>

          <h2 class="mt-4 text-4xl md:text-5xl font-bold">
            Así hacemos realidad tus ideas.
          </h2>

          <p class="mt-5 text-gray-600 dark:text-gray-400">
            Cuatro pasos para transformar cada proyecto en una experiencia
            extraordinaria.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <article v-for="step in steps" :key="step.number" class="group">
            <span class="text-6xl font-bold text-indigo-500/20">
              {{ step.number }}
            </span>

            <h3
              class="mt-5 text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
            >
              {{ step.title }}
            </h3>

            <p class="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
              {{ step.description }}
            </p>

            <div
              class="mt-7 w-12 h-1 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 group-hover:w-20 transition-all duration-300"
            ></div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
