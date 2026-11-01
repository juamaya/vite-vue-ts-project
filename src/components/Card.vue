
<script setup lang="ts">
interface Props {
  title: string
  description: string
  image: string
  link: string
  buttonText?: string
}

withDefaults(defineProps<Props>(), {
  buttonText: 'Descubrir más'
})
</script>

<template>
  <article
    class="group relative w-full max-w-sm mx-auto
           overflow-hidden rounded-3xl
           bg-white dark:bg-[#151827]
           border border-gray-200 dark:border-white/10
           shadow-lg shadow-gray-200/40
           dark:shadow-black/20
           hover:-translate-y-2
           hover:shadow-2xl hover:shadow-indigo-500/10
           transition-all duration-500"
  >

    <!-- GRADIENT BACKGROUND -->
    <div
      class="absolute inset-0 pointer-events-none
             bg-linear-to-br
             from-indigo-500/10 via-transparent
             to-purple-500/10
             opacity-70 group-hover:opacity-100
             transition-opacity duration-500"
    ></div>

    <!-- IMAGE -->
    <div class="relative h-52 sm:h-60 overflow-hidden">

      <img
        :src="image"
        :alt="title"
        loading="lazy"
        class="w-full h-full object-cover
               group-hover:scale-110
               transition-transform duration-700"
      />

      <!-- IMAGE OVERLAY -->
      <div
        class="absolute inset-0
               bg-linear-to-t
               from-[#10111B]/50 to-transparent"
      ></div>

      <!-- DECORATIVE BADGE -->
      <div
        class="absolute top-4 left-4
               px-3 py-1.5 rounded-full
               bg-white/20 backdrop-blur-md
               border border-white/30
               text-white text-xs font-semibold"
      >
        NEX PROJECT
      </div>

    </div>

    <!-- CONTENT -->
    <div class="relative p-6 sm:p-7">

      <h3
        class="text-xl sm:text-2xl font-bold
               text-gray-900 dark:text-white
               tracking-tight
               group-hover:text-indigo-600
               dark:group-hover:text-indigo-400
               transition-colors duration-300"
      >
        {{ title }}
      </h3>

      <p
        class="mt-3 text-sm leading-7
               text-gray-600 dark:text-gray-400"
      >
        {{ description }}
      </p>

      <!-- BUTTON -->
      <div class="mt-7">
        <RouterLink
          :to="link"
          class="group/button inline-flex items-center
                 justify-center gap-3
                 w-full px-5 py-3.5 rounded-xl
                 text-sm font-semibold text-white
                 bg-linear-to-r
                 from-indigo-600 to-violet-600
                 hover:from-indigo-500 hover:to-purple-500
                 hover:shadow-lg hover:shadow-indigo-500/25
                 transition-all duration-300"
        >
          {{ buttonText }}

          <span
            class="transition-transform duration-300
                   group-hover/button:translate-x-1"
          >
            →
          </span>
        </RouterLink>
      </div>

    </div>

  </article>
</template>