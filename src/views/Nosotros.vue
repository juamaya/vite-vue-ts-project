
<script setup lang="ts">
import { RouterLink } from 'vue-router'

const stats = [
  { number: '05+', label: 'Años de experiencia' },
  { number: '80+', label: 'Proyectos realizados' },
  { number: '50+', label: 'Clientes satisfechos' },
  { number: '100%', label: 'Compromiso' }
]

const values = [
  {
    icon: '✦',
    title: 'Creatividad',
    description: 'Transformamos ideas en experiencias digitales únicas y memorables.'
  },
  {
    icon: '⌘',
    title: 'Innovación',
    description: 'Apostamos por nuevas tecnologías y soluciones inteligentes.'
  },
  {
    icon: '◈',
    title: 'Compromiso',
    description: 'Trabajamos con dedicación para alcanzar cada objetivo.'
  },
  {
    icon: '◇',
    title: 'Excelencia',
    description: 'Cuidamos cada detalle para conseguir resultados de calidad.'
  }
]

const team = [
  {
    name: 'Alex Morgan',
    role: 'Director creativo',
    image: 'photo-1560250097-0b93528c311a',
    description: 'Lidera la visión creativa y estratégica.'
  },
  {
    name: 'Sophia Williams',
    role: 'Diseñadora UI/UX',
    image: 'photo-1573496359142-b8d87734a5a2',
    description: 'Diseña experiencias digitales intuitivas.'
  },
  {
    name: 'Daniel Carter',
    role: 'Desarrollador web',
    image: 'photo-1500648767791-00dcc994a43e',
    description: 'Convierte ideas en soluciones tecnológicas.'
  }
]

const steps = [
  {
    number: '01',
    title: 'Escuchamos',
    description: 'Conocemos tus necesidades y comprendemos tus objetivos.'
  },
  {
    number: '02',
    title: 'Planificamos',
    description: 'Diseñamos una estrategia adaptada a tu proyecto.'
  },
  {
    number: '03',
    title: 'Creamos',
    description: 'Desarrollamos soluciones digitales modernas y funcionales.'
  },
  {
    number: '04',
    title: 'Evolucionamos',
    description: 'Seguimos mejorando para alcanzar nuevos resultados.'
  }
]
</script>

<template>
  <main class="overflow-hidden bg-gray-50 dark:bg-[#0B0D17] text-gray-900 dark:text-white transition-colors duration-300">

    <!-- HERO -->
    <section class="relative min-h-145 flex items-center">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85"
          alt="Oficina moderna NEX"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-linear-to-r from-white via-white/90 to-white/30 dark:from-[#0B0D17] dark:via-[#0B0D17]/90 dark:to-[#0B0D17]/40"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 py-24">
        <div class="max-w-3xl">
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-indigo-100 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-bold tracking-widest uppercase">
            <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
            Sobre nosotros
          </span>

          <h1 class="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            Somos Juamaya<span class= "text-indigo-600" >NEX</span></h1>
            
           <h1 class="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]">

             
             
             <span class=" block text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">  somos innovación.</span>
          </h1>
          
          <p class="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Creemos en el poder de las ideas y en la tecnología como herramienta para transformar el futuro. Creamos experiencias digitales que inspiran.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <RouterLink to="/contacto" class="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              Hablemos de tu proyecto
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </RouterLink>

            <a href="#historia" class="inline-flex items-center px-8 py-4 rounded-xl border border-gray-300 dark:border-white/20 font-semibold text-sm hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300">
              Conócenos
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ESTADISTICAS -->
    <section class="py-20 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#111421] border-y border-gray-200 dark:border-white/5">
      <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <h3 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            {{ stat.number }}
          </h3>
          <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- HISTORIA -->
    <section id="historia" class="py-24 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <div class="absolute -top-6 -left-6 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>

          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
            alt="Equipo colaborando"
            loading="lazy"
            class="relative w-full h-100 md:h-125 object-cover rounded-3xl shadow-xl"
          />

          <div class="absolute -bottom-6 -right-3 md:-right-6 bg-linear-to-br from-indigo-600 to-purple-700 text-white p-6 rounded-2xl shadow-xl">
            <p class="text-4xl font-bold">NEX</p>
            <p class="text-xs text-indigo-100 mt-1">Ideas que transforman</p>
          </div>
        </div>

        <div>
          <span class="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
            Nuestra historia
          </span>

          <h2 class="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Nacimos para
            <span class="text-indigo-600 dark:text-indigo-400">crear algo diferente.</span>
          </h2>

          <p class="mt-7 leading-8 text-gray-600 dark:text-gray-400">
            NEX nace de una idea sencilla: hacer que la tecnología y el diseño trabajen juntos para crear experiencias digitales extraordinarias.
          </p>

          <p class="mt-5 leading-8 text-gray-600 dark:text-gray-400">
            Somos un equipo multidisciplinar que combina creatividad, estrategia y desarrollo para ayudar a empresas y emprendedores a llevar sus proyectos al siguiente nivel.
          </p>

          <p class="mt-5 leading-8 text-gray-600 dark:text-gray-400">
            Nuestro compromiso es crear soluciones que no solamente se vean bien, sino que también aporten valor.
          </p>

          <div class="mt-8 flex items-center gap-4">
            <div class="w-12 h-1 rounded-full bg-linear-to-r from-indigo-600 to-purple-600"></div>
            <span class="text-sm font-semibold">Diseñamos el futuro, juntos.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- MISION Y VISION -->
    <section class="py-24 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#111421] border-y border-gray-200 dark:border-white/5">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
            Nuestra filosofía
          </span>
          <h2 class="mt-4 text-4xl md:text-5xl font-bold">Lo que nos impulsa.</h2>
          <p class="mt-5 text-gray-600 dark:text-gray-400">
            Nuestra misión y visión son el motor de cada proyecto.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <article class="group p-8 md:p-10 rounded-3xl bg-gray-50 dark:bg-[#151827] border border-gray-200 dark:border-white/10 hover:-translate-y-2 hover:border-indigo-500/40 transition-all duration-500">
            <div class="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-3xl">
              ◈
            </div>
            <h3 class="mt-7 text-2xl font-bold">Nuestra misión</h3>
            <p class="mt-4 leading-8 text-gray-600 dark:text-gray-400">
              Impulsar el crecimiento de personas y empresas mediante soluciones digitales innovadoras, accesibles y de alta calidad.
            </p>
          </article>

          <article class="group p-8 md:p-10 rounded-3xl bg-gray-50 dark:bg-[#151827] border border-gray-200 dark:border-white/10 hover:-translate-y-2 hover:border-purple-500/40 transition-all duration-500">
            <div class="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-3xl">
              ✦
            </div>
            <h3 class="mt-7 text-2xl font-bold">Nuestra visión</h3>
            <p class="mt-4 leading-8 text-gray-600 dark:text-gray-400">
              Convertirnos en un referente de innovación digital, creando experiencias que transformen la forma en que las personas interactúan con la tecnología.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- VALORES -->
    <section class="py-24 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <span class="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
            Nuestros valores
          </span>
          <h2 class="mt-4 text-4xl md:text-5xl font-bold">Nuestra esencia.</h2>
          <p class="mt-5 text-gray-600 dark:text-gray-400">
            Los principios que definen nuestra forma de trabajar.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <article v-for="value in values" :key="value.title" class="group p-7 rounded-2xl bg-white dark:bg-[#151827] border border-gray-200 dark:border-white/5 hover:border-indigo-500/40 hover:-translate-y-2 transition-all duration-300">
            <div class="w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
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

    <!-- EQUIPO -->
    <section class="py-24 px-6 md:px-12 lg:px-20 bg-white dark:bg-[#111421] border-y border-gray-200 dark:border-white/5">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span class="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
              Nuestro equipo
            </span>
            <h2 class="mt-4 text-4xl md:text-5xl font-bold">
              Las personas detrás de NEX.
            </h2>
            <p class="mt-5 max-w-xl text-gray-600 dark:text-gray-400">
              Un equipo apasionado que combina talento, creatividad y tecnología.
            </p>
          </div>

          <RouterLink to="/contacto" class="text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:underline">
            Únete a nosotros →
          </RouterLink>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="person in team" :key="person.name" class="group
ChatGPT es una IA y puede equivocarse.

                   overflow-hidden rounded-3xl bg-gray-50 dark:bg-[#151827] border border-gray-200 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl transition-all duration-500">

            <div class="relative overflow-hidden h-87.5">
              <img
                :src="`https://images.unsplash.com/${person.image}?auto=format&fit=crop&w=800&q=85`"
                :alt="person.name"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>

              <span class="absolute bottom-5 left-5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                Equipo NEX
              </span>
            </div>

            <div class="p-7">
              <h3 class="text-xl font-bold">{{ person.name }}</h3>

              <p class="mt-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                {{ person.role }}
              </p>

              <p class="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                {{ person.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- PROCESO -->
    <section class="py-24 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">

        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
            Nuestro proceso
          </span>

          <h2 class="mt-4 text-4xl md:text-5xl font-bold">
            Así hacemos realidad tus ideas.
          </h2>

          <p class="mt-5 text-gray-600 dark:text-gray-400">
            Cuatro pasos para transformar cada proyecto en una experiencia extraordinaria.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <article v-for="step in steps" :key="step.number" class="group">

            <span class="text-6xl font-bold text-indigo-500/20">
              {{ step.number }}
            </span>

            <h3 class="mt-5 text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ step.title }}
            </h3>

            <p class="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
              {{ step.description }}
            </p>

            <div class="mt-7 w-12 h-1 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 group-hover:w-20 transition-all duration-300"></div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="px-6 md:px-12 lg:px-20 pb-24">
      <div class="relative max-w-7xl mx-auto overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-indigo-700 to-purple-800 p-10 md:p-16">

        <div class="absolute -right-20 -top-32 w-96 h-96 rounded-full border border-white/10"></div>
        <div class="absolute -right-10 -top-20 w-72 h-72 rounded-full border border-white/10"></div>

        <div class="relative z-10 max-w-2xl">

          <span class="text-indigo-200 text-xs font-bold tracking-widest uppercase">
            Construyamos algo juntos
          </span>

          <h2 class="mt-5 text-3xl md:text-5xl text-white font-bold leading-tight">
            Tu próxima gran idea comienza aquí.
          </h2>

          <p class="mt-6 text-indigo-100 leading-8">
            Estamos preparados para ayudarte a crear algo extraordinario. Cuéntanos tu proyecto y hagámoslo realidad.
          </p>

          <RouterLink
            to="/contacto"
            class="group mt-9 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 hover:-translate-y-1 transition-all duration-300"
          >
            Contactar ahora
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </RouterLink>

        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
 
