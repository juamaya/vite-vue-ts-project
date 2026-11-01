
<script setup lang="ts">
import Card from '../components/Card.vue'

const projects = [
  {
    title: 'Diseño digital',
    description: 'Creamos experiencias digitales modernas, intuitivas y atractivas para todo tipo de proyectos.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    link: '/servicios'
  },
  {
    title: 'Desarrollo web',
    description: 'Desarrollamos soluciones web rápidas, escalables y adaptadas a cualquier dispositivo.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
    link: '/proyectos'
  },
  {
    title: 'Creatividad',
    description: 'Convertimos ideas innovadoras en productos digitales con personalidad propia.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    link: '/nosotros'
  }
]
</script>

<template>
  <section
    class="py-20 px-6 md:px-12 lg:px-20
           bg-gray-50 dark:bg-[#0B0D17]
           transition-colors duration-300"
  >

    <div class="max-w-7xl mx-auto">

      <!-- SECTION HEADER -->
      <div class="text-center max-w-2xl mx-auto mb-14">

        <span
          class="text-indigo-600 dark:text-indigo-400
                 text-xs font-bold tracking-[0.2em] uppercase"
        >
          Nuestros proyectos
        </span>

        <h2
          class="mt-4 text-3xl md:text-5xl font-bold
                 text-gray-900 dark:text-white"
        >
          Ideas que se convierten
          <span class="text-indigo-600 dark:text-indigo-400">
            en realidad.
          </span>
        </h2>

        <p class="mt-5 text-gray-600 dark:text-gray-400">
          Descubre nuestras soluciones digitales y todo
          lo que podemos crear juntos.
        </p>

      </div>

      <!-- CARDS GRID -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2
               lg:grid-cols-3 gap-8"
      >
        <Card
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </div>

    </div>

  </section>
</template>
