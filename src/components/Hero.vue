o

<script setup>
import { RouterLink } from 'vue-router'

const heroImage = 'https://images.unsplash.com/photo-1752477296332-4194308c025f?auto=format&fit=crop&fm=jpg&q=85&w=2000'
</script>

<template>
  <section
    class="relative min-h-162.5 lg:min-h-190
           flex items-center overflow-hidden
           bg-gray-100 dark:bg-[#0B0D17]
           transition-colors duration-500"
  >
    <!-- BACKGROUND IMAGE -->
    <div class="absolute inset-0">
      <img
        :src="heroImage"
        alt="Arquitectura abstracta moderna"
        fetchpriority="high"
        class="w-full h-full object-cover object-center
               transition-transform duration-2000
               hover:scale-105"
      />

      <!-- IMAGE OVERLAY -->
      <div
        class="absolute inset-0
               bg-linear-to-r
               from-white via-white/90 to-white/20
               dark:from-[#0B0D17]
               dark:via-[#0B0D17]/85
               dark:to-[#0B0D17]/30
               transition-colors duration-500"
      ></div>

      <div
        class="absolute inset-0
               bg-linear-to-t
               from-white/50 to-transparent
               dark:from-[#0B0D17]/60"
      ></div>
    </div>

    <!-- CONTENT -->
    <div
      class="relative z-10 w-full px-6 md:px-12
             lg:px-20 py-24"
    >
      <div class="max-w-3xl">

        <!-- LABEL -->
        <div
          class="inline-flex items-center gap-2
                 px-4 py-2 rounded-full mb-8
                 bg-indigo-100 dark:bg-indigo-500/10
                 border border-indigo-200
                 dark:border-indigo-500/20"
        >
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>

          <span
            class="text-xs font-semibold tracking-widest
                   uppercase text-indigo-700
                   dark:text-indigo-400"
          >
            Innovación digital
          </span>
        </div>

        <!-- TITLE -->
        <h1
          class="text-5xl sm:text-6xl lg:text-8xl
                 font-bold tracking-tight leading-[1.05]
                 text-gray-900 dark:text-white"
        >
          Creamos el
          <span class="text-indigo-600 dark:text-indigo-400">
            futuro
          </span>
          <br />
          digital.
        </h1>

        <!-- DESCRIPTION -->
        <p
          class="mt-8 max-w-xl text-base md:text-lg
                 leading-relaxed
                 text-gray-600 dark:text-gray-300"
        >
          Transformamos ideas en experiencias digitales
          extraordinarias. Diseño, tecnología e innovación
          para llevar tu proyecto al siguiente nivel.
        </p>

        <!-- BUTTONS -->
        <div class="flex flex-col sm:flex-row gap-4 mt-10">

          <RouterLink
            to="/proyectos"
            class="group inline-flex items-center
                   justify-center gap-3
                   px-8 py-4 rounded-xl
                   bg-indigo-600 text-white
                   font-semibold text-sm
                   hover:bg-indigo-500
                   hover:shadow-xl hover:shadow-indigo-600/20
                   hover:-translate-y-1
                   transition-all duration-300"
          >
            Explorar proyectos

            <span
              class="transition-transform duration-300
                     group-hover:translate-x-1"
            >
              →
            </span>
          </RouterLink>

          <RouterLink
            to="/contacto"
            class="inline-flex items-center justify-center
                   px-8 py-4 rounded-xl
                   border border-gray-300
                   dark:border-white/20
                   text-gray-800 dark:text-white
                   font-semibold text-sm
                   hover:bg-gray-200/60
                   dark:hover:bg-white/10
                   transition-all duration-300"
          >
            Hablemos
          </RouterLink>

        </div>

        <!-- BOTTOM INFO -->
        <div
          class="flex items-center gap-4 mt-16
                 text-xs text-gray-500 dark:text-gray-400"
        >
          <div class="w-12 h-px bg-indigo-500"></div>
          DISEÑO · TECNOLOGÍA · INNOVACIÓN
        </div>

      </div>
    </div>

    <!-- DECORATIVE NUMBER -->
    <div
      class="hidden lg:block absolute bottom-12 right-16
             text-8xl font-bold
             text-gray-900/5 dark:text-white/5"
    >
      01
    </div>

  </section>
</template>
