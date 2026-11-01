
<script setup lang="ts">
import Timeline from '../components/Timeline.vue'

const projects = [
  {
    id: 1,
    title: 'Diseño web corporativo',
    description: 'Desarrollamos una página web moderna, responsive y optimizada para mejorar la presencia digital de nuestro cliente.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85',
    date: '2026-03-15',
    category: 'Diseño web',
    link: 'https://example.com'
  },
  {
    id: 2,
    title: 'Aplicación e-commerce',
    description: 'Creamos una tienda online con una experiencia de compra intuitiva, atractiva y adaptada a dispositivos móviles.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85',
    date: '2025-09-20',
    category: 'Desarrollo web',
    link: 'https://example.com'
  },
  {
    id: 3,
    title: 'Dashboard administrativo',
    description: 'Diseñamos una plataforma de gestión con estadísticas, visualización de datos y una interfaz intuitiva.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
    date: '2025-04-10',
    category: 'UI/UX',
    link: 'https://example.com'
  },
  {
    id: 4,
    title: 'Identidad digital',
    description: 'Creamos una identidad visual moderna y una experiencia digital coherente para una nueva marca.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85',
    date: '2024-11-05',
    category: 'Branding'
  }
]
</script>

<template>
  <main>
    <Timeline
      :projects="projects"
      title="Nuestros proyectos"
      subtitle="Descubre nuestro recorrido, los proyectos que hemos desarrollado y cómo transformamos ideas en soluciones digitales."
    />
  </main>
</template>
