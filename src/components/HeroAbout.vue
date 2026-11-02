<script setup lang="ts"></script>
<template>
  <div>
    <section class="relative min-h-145 flex items-center">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85"
          alt="Oficina moderna NEX"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/30 dark:from-[#0B0D17] dark:via-[#0B0D17]/90 dark:to-[#0B0D17]/40"
        ></div>
      </div>

      <div
        class="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 py-24"
      >
        <div class="max-w-3xl">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase"
          >
            <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
            Sobre nosotros
          </span>

          <h1
            class="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            Somos Juamaya<span class="text-indigo-600">NEX</span>
          </h1>

          <h1
            class="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
          >
            <span
              class="block text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
            >
              somos innovación.</span
            >
          </h1>

          <p
            class="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300"
          >
            Creemos en el poder de las ideas y en la tecnología como herramienta
            para transformar el futuro. Creamos experiencias digitales que
            inspiran.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <RouterLink
              to="/contacto"
              class="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Hablemos de tu proyecto
              <span class="group-hover:translate-x-1 transition-transform"
                >→</span
              >
            </RouterLink>

            <a
              href="#historia"
              class="inline-flex items-center px-8 py-4 rounded-xl border border-gray-300 dark:border-white/20 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
            >
              Conócenos
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
