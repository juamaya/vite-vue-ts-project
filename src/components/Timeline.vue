
<script setup lang="ts">
import { computed } from 'vue'

interface Project {
  id: number | string
  title: string
  description: string
  image: string
  date: string
  category?: string
  link?: string
}

const props = withDefaults(defineProps<{
  projects: Project[]
  title?: string
  subtitle?: string
}>(), {
  title: 'Nuestro recorrido',
  subtitle: 'Cada proyecto representa una nueva oportunidad para crear, innovar y transformar ideas en experiencias digitales.'
})

const sortedProjects = computed(() => {
  return [...props.projects].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}
</script>

<template>
  <section
    class="relative overflow-hidden py-24 px-5 md:px-10 lg:px-20
           bg-gray-50 dark:bg-[#0B0D17]
           text-gray-900 dark:text-white
           transition-colors duration-300"
  >

    <!-- DECORATIVE BACKGROUND -->
    <div
      class="absolute -top-40 -right-40 w-96 h-96
             rounded-full bg-indigo-500/10 blur-[120px]
             pointer-events-none"
    ></div>

    <div
      class="absolute bottom-0 -left-40 w-96 h-96
             rounded-full bg-purple-500/10 blur-[120px]
             pointer-events-none"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto">

      <!-- HEADER -->
      <div class="max-w-3xl mx-auto text-center mb-20">

        <span
          class="inline-flex items-center gap-2 px-4 py-2
                 rounded-full bg-indigo-100 dark:bg-indigo-500/10
                 border border-indigo-200 dark:border-indigo-500/20
                 text-indigo-700 dark:text-indigo-400
                 text-xs font-bold tracking-[0.2em] uppercase"
        >
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          Nuestro trabajo
        </span>

        <h2
          class="mt-6 text-4xl md:text-5xl lg:text-6xl
                 font-bold tracking-tight"
        >
          {{ title }}
          <span
            class="block mt-2 text-transparent bg-clip-text
                   bg-linear-to-r from-indigo-600 to-purple-600
                   dark:from-indigo-400 dark:to-purple-400"
          >
            Ideas que dejan huella.
          </span>
        </h2>

        <p
          class="mt-6 text-base md:text-lg leading-relaxed
                 text-gray-600 dark:text-gray-400"
        >
          {{ subtitle }}
        </p>

      </div>

      <!-- EMPTY STATE -->
      <div
        v-if="sortedProjects.length === 0"
        class="text-center py-20 rounded-3xl
               bg-white dark:bg-[#151827]
               border border-gray-200 dark:border-white/10"
      >
        <div
          class="w-16 h-16 mx-auto rounded-2xl
                 bg-indigo-100 dark:bg-indigo-500/10
                 text-indigo-600 dark:text-indigo-400
                 flex items-center justify-center text-3xl"
        >
          ◈
        </div>

        <h3 class="mt-6 text-xl font-bold">
          Próximamente nuevos proyectos
        </h3>

        <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Estamos preparando nuevas experiencias para compartir contigo.
        </p>
      </div>

      <!-- TIMELINE -->
      <div v-else class="relative">

        <!-- CENTRAL LINE DESKTOP -->
        <div
          class="absolute hidden md:block left-1/2 top-0 bottom-0
                 w-px -translate-x-1/2
                 bg-linear-to-b from-indigo-500
                 via-purple-500 to-transparent"
        ></div>

        <!-- LEFT LINE MOBILE -->
        <div
          class="absolute md:hidden left-3.75 top-0 bottom-0
                 w-px bg-linear-to-b from-indigo-500
                 via-purple-500 to-transparent"
        ></div>

        <div
          v-for="(project, index) in sortedProjects"
          :key="project.id"
          class="relative mb-16 last:mb-0"
        >

          <!-- TIMELINE ITEM -->
          <div
            class="grid grid-cols-1 md:grid-cols-2
                   gap-8 md:gap-16 items-center"
          >

            <!-- PROJECT CARD -->
            <article
              :class="[
                'group relative pl-10 md:pl-0',
                index % 2 === 0
                  ? 'md:col-start-1 md:row-start-1'
                  : 'md:col-start-2 md:row-start-1'
              ]"
            >

              <!-- MOBILE / DESKTOP DOT -->
              <div
                :class="[
                  'absolute z-20 top-8 left-1.75 md:left-auto',
                  index % 2 === 0
                    ? 'md:-right-18'
                    : 'md:-left-18',
                  'md:top-8'
                ]"
              >
                <div
                  class="w-4 h-4 rounded-full
                         bg-indigo-600 dark:bg-indigo-400
                         border-4 border-gray-50 dark:border-[#0B0D17]
                         ring-4 ring-indigo-500/20"
                ></div>
              </div>

              <!-- CARD -->
              <div
                class="overflow-hidden rounded-3xl
                       bg-white dark:bg-[#151827]
                       border border-gray-200 dark:border-white/10
                       shadow-lg shadow-gray-200/30 dark:shadow-black/20
                       hover:-translate-y-2
                       hover:border-indigo-500/40
                       hover:shadow-xl
                       transition-all duration-500"
              >

                <!-- IMAGE -->
                <div class="relative h-56 sm:h-72 overflow-hidden">

                  <img
                    :src="project.image"
                    :alt="project.title"
                    loading="lazy"
                    class="w-full h-full object-cover
                           group-hover:scale-110
                           transition-transform duration-700"
                  />

                  <div
                    class="absolute inset-0
                           bg-linear-to-t from-black/70
                           via-black/10 to-transparent"
                  ></div>

                  <!-- CATEGORY -->
                  <span
                    v-if="project.category"
                    class="absolute top-5 left-5
                           px-4 py-2 rounded-full
                           bg-white/20 backdrop-blur-md
                           border border-white/20
                           text-white text-xs font-semibold"
                  >
                    {{ project.category }}
                  </span>

                  <!-- DATE -->
                  <div
                    class="absolute bottom-5 left-5
                           flex items-center gap-2 text-white"
                  >
                    <span class="text-lg">◷</span>
                    <span class="text-sm font-semibold">
                      {{ formatDate(project.date) }}
                    </span>
                  </div>

                </div>

                <!-- CONTENT -->
                <div class="p-6 md:p-8">

                  <h3
                    class="text-xl md:text-2xl font-bold
                           group-hover:text-indigo-600
                           dark:group-hover:text-indigo-400
                           transition-colors duration-300"
                  >
                    {{ project.title }}
                  </h3>

                  <p
                    class="mt-4 text-sm md:text-base
                           leading-7 text-gray-600 dark:text-gray-400"
                  >
                    {{ project.description }}
                  </p>

                  <!-- PROJECT LINK -->
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-3 mt-6
                           text-sm font-bold
                           text-indigo-600 dark:text-indigo-400
                           hover:text-purple-600
                           dark:hover:text-purple-400
                           transition-colors"
                  >
                    Ver proyecto
                    <span
                      class="text-lg group-hover:translate-x-1
                             transition-transform duration-300"
                    >
                      →
                    </span>
                  </a>

                  <div
                    v-else
                    class="mt-6 w-12 h-1 rounded-full
                           bg-linear-to-r from-indigo-600 to-purple-600
                           group-hover:w-20 transition-all duration-300"
                  ></div>

                </div>
              </div>
            </article>

            <!-- DATE / YEAR DESKTOP -->
            <div
              :class="[
                'hidden md:flex items-center',
                index % 2 === 0
                  ? 'md:col-start-2 md:row-start-1 justify-start'
                  : 'md:col-start-1 md:row-start-1 justify-end'
              ]"
            >
              <div
                class="px-6 py-4 rounded-2xl
                       bg-white dark:bg-[#151827]
                       border border-gray-200 dark:border-white/10
                       shadow-sm"
              >
                <span
                  class="block text-xs uppercase tracking-widest
                         text-gray-400 dark:text-gray-500"
                >
                  Proyecto realizado
                </span>

                <span
                  class="block mt-1 text-3xl font-bold
                         text-transparent bg-clip-text
                         bg-linear-to-r from-indigo-600 to-purple-600
                         dark:from-indigo-400 dark:to-purple-400"
                >
                  {{ new Date(project.date).getFullYear() }}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- BOTTOM MESSAGE -->
      <div
        v-if="sortedProjects.length > 0"
        class="mt-20 text-center"
      >
        <div
          class="inline-flex items-center gap-3
                 px-6 py-3 rounded-full
                 bg-indigo-100 dark:bg-indigo-500/10
                 border border-indigo-200 dark:border-indigo-500/20
                 text-indigo-700 dark:text-indigo-400
                 text-sm font-semibold"
        >
          <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
          {{ sortedProjects.length }} proyectos en nuestro recorrido
        </div>
      </div>

    </div>
  </section>
</template>
