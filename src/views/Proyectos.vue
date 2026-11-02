
<script setup lang="ts">
import Timeline from '../components/Timeline.vue'

const  eldorado = `${import.meta.env.BASE_URL}images/eldorado.png`;
const  lamanuela = `${import.meta.env.BASE_URL}images/lamanuela.png`;
const  appweb = `${import.meta.env.BASE_URL}images/app-web.png`;
const  webrepo = `${import.meta.env.BASE_URL}images/web-repo.png`;

const projects = [
  {
    id: 1,
    title: 'Diseño web corporativo',
    description: 'Desarrollamos una página web moderna, responsive y optimizada para mejorar la presencia digital de nuestro cliente.',
    image: eldorado,
    date: '2026-10-15',
    category: 'Diseño web',
    link: 'https://juamaya.github.io/ElDorado/'
  },
    {
    id: 2,
    title: 'Diseño web corporativo',
    description: 'Desarrollamos una página web moderna, responsive y optimizada para mejorar la presencia digital de nuestro cliente.',
    image: lamanuela,
    date: '2026-03-25',
    category: 'Diseño web',
    link: 'https://juamaya.github.io/LaManuela/'
  },

  {
    id: 3,
    title: 'Aplicación  web interactiva',
    description: 'Creamos una web con una experiencia  a intuitiva, atractiva y adaptada a dispositivos móviles.',
    image: appweb,
    date: '2025-09-20',
    category: 'Desarrollo web',
    link: 'https://juamaya.github.io/vue-ts-project/'
  },

    {
    id: 4,
    title: 'Aplicación web interactiva',
    description: 'Creamos una web con una experiencia  a intuitiva, atractiva y adaptada a dispositivos móviles.',
    image: webrepo,
    date: '2024-11-10',
    category: 'Desarrollo web',
    link: 'https://juamaya.github.io/web-repositorios/#about'
  },
  {
    id: 5,
    title: 'Dashboard administrativo',
    description: 'Diseñamos una plataforma de gestión con estadísticas, visualización de datos y una interfaz intuitiva.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85',
    date: '2024-04-10',
    category: 'UI/UX',
    
  },
  {
    id: 6,
    title: 'Identidad digital',
    description: 'Creamos una identidad visual moderna y una experiencia digital coherente para una nueva marca.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85',
    date: '2023-11-05',
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
