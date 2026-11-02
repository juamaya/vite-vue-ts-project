<script setup lang="ts">
const values = [
  {
    icon: "✦",
    title: "Creatividad",
    description:
      "Transformamos ideas en experiencias digitales únicas y memorables.",
  },
  {
    icon: "⌘",
    title: "Innovación",
    description: "Apostamos por nuevas tecnologías y soluciones inteligentes.",
  },
  {
    icon: "◈",
    title: "Compromiso",
    description: "Trabajamos con dedicación para alcanzar cada objetivo.",
  },
  {
    icon: "◇",
    title: "Excelencia",
    description: "Cuidamos cada detalle para conseguir resultados de calidad.",
  },
];
</script>
<template>
  <div>
    <section class="py-24 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span
            class="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase"
          >
            Nuestros valores
          </span>
          <h2 class="mt-4 text-4xl md:text-5xl font-bold">Nuestra esencia.</h2>
          <p class="mt-5 text-gray-600 dark:text-gray-400">
            Los principios que definen nuestra forma de trabajar.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article
            v-for="value in values"
            :key="value.title"
            class="group p-7 rounded-2xl bg-white dark:bg-[#151827] border border-gray-200 dark:border-white/5 hover:border-indigo-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            <div
              class="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300"
            >
              {{ value.icon }}
            </div>
            <h3 class="mt-6 text-xl font-bold">{{ value.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              {{ value.description }}
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
