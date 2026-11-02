<script setup lang="ts">
const stats = [
  { number: "05+", label: "Años de experiencia" },
  { number: "80+", label: "Proyectos realizados" },
  { number: "50+", label: "Clientes satisfechos" },
  { number: "100%", label: "Compromiso" },
];
</script>
<template>
  <div>
    <section
      class="py-20 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#111421] border-y border-gray-200 dark:border-white/5"
    >
      <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <h3
            class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          >
            {{ stat.number }}
          </h3>
          <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
