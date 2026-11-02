<script setup lang="ts"></script>
<template>
  <div>
    <section class="px-6 md:px-12 lg:px-20 pb-24">
      <div
        class="relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-indigo-700 to-purple-800 p-10 md:p-16"
      >
        <div
          class="absolute -right-20 -top-32 w-96 h-96 rounded-full border border-white/10"
        ></div>
        <div
          class="absolute -right-10 -top-20 w-72 h-72 rounded-full border border-white/10"
        ></div>

        <div class="relative z-10 max-w-2xl">
          <span
            class="text-indigo-200 text-xs font-bold tracking-widest uppercase"
          >
            Construyamos algo juntos
          </span>

          <h2
            class="mt-5 text-3xl md:text-5xl text-white font-bold leading-tight"
          >
            Tu próxima gran idea comienza aquí.
          </h2>

          <p class="mt-6 text-indigo-100 leading-8">
            Estamos preparados para ayudarte a crear algo extraordinario.
            Cuéntanos tu proyecto y hagámoslo realidad.
          </p>

          <RouterLink
            to="/contacto"
            class="group mt-9 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300"
          >
            Contactar ahora
            <span class="group-hover:translate-x-1 transition-transform"
              >→</span
            >
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
