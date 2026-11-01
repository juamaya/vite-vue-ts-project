
<script setup lang="ts">
import { ref } from 'vue'
import Swal from 'sweetalert2'
// @ts-ignore The JavaScript composable does not currently provide TypeScript declarations.
import { useTheme } from '../composables/useTheme'

interface ContactData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const { isDark } = useTheme()

const loading = ref(false)

const form = ref<ContactData>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const subjects = [
  'Diseño web',
  'Desarrollo web',
  'Diseño UI/UX',
  'Consultoría',
  'Otro'
]

const emit = defineEmits<{
  submit: [data: ContactData]
}>()

const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}

const handleSubmit = async () => {
  if (loading.value) return

  loading.value = true

  try {
    // Emitimos los datos para que el componente padre
    // pueda enviarlos a un backend o servicio de correo.
    emit('submit', { ...form.value })

    await Swal.fire({
      icon: 'info',
      title: 'Formulario validado',
      text: 'Tus datos están preparados. Conecta un servicio de envío para recibir los mensajes.',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#4F46E5',
      background: isDark.value ? '#151827' : '#FFFFFF',
      color: isDark.value ? '#FFFFFF' : '#111827'
    })

    resetForm()

  } catch (error) {
    await Swal.fire({
      icon: 'error',
      title: 'Ha ocurrido un error',
      text: 'No se ha podido procesar el formulario.',
      confirmButtonColor: '#4F46E5',
      background: isDark.value ? '#151827' : '#FFFFFF',
      color: isDark.value ? '#FFFFFF' : '#111827'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section
    class="relative py-20 px-5 md:px-10 lg:px-20
           overflow-hidden
           bg-gray-50 dark:bg-[#0B0D17]
           transition-colors duration-300"
  >

    <!-- DECORATIVE GRADIENT -->
    <div
      class="absolute -top-40 -right-40
             w-96 h-96 rounded-full
             bg-indigo-500/10 blur-[120px]
             pointer-events-none"
    ></div>

    <div
      class="absolute -bottom-40 -left-40
             w-96 h-96 rounded-full
             bg-purple-500/10 blur-[120px]
             pointer-events-none"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto">

      <!-- HEADER -->
      <div class="text-center max-w-2xl mx-auto mb-14">

        <span
          class="inline-block text-xs font-bold
                 uppercase tracking-[0.2em]
                 text-indigo-600 dark:text-indigo-400"
        >
          Contacto
        </span>

        <h2
          class="mt-4 text-4xl md:text-5xl
                 font-bold tracking-tight
                 text-gray-900 dark:text-white"
        >
          Hablemos de tu
          <span
            class="text-transparent bg-clip-text
                   bg-linear-to-r
                   from-indigo-600 to-purple-600
                   dark:from-indigo-400 dark:to-purple-400"
          >
            proyecto.
          </span>
        </h2>

        <p
          class="mt-5 text-gray-600 dark:text-gray-400
                 leading-relaxed"
        >
          Cuéntanos tu idea. Estamos preparados para
          ayudarte a convertirla en una experiencia digital
          extraordinaria.
        </p>

      </div>

      <!-- FORM CARD -->
      <div
        class="grid grid-cols-1 lg:grid-cols-5
               overflow-hidden rounded-3xl
               bg-white dark:bg-[#151827]
               border border-gray-200 dark:border-white/10
               shadow-xl shadow-gray-200/40
               dark:shadow-black/20"
      >

        <!-- LEFT INFORMATION -->
        <div
          class="lg:col-span-2 relative p-8 md:p-10
                 bg-linear-to-br
                 from-indigo-600 via-indigo-700
                 to-purple-800 text-white
                 overflow-hidden"
        >

          <div
            class="absolute -right-20 -top-20
                   w-64 h-64 rounded-full
                   border border-white/10"
          ></div>

          <div
            class="absolute -right-10 -top-10
                   w-44 h-44 rounded-full
                   border border-white/10"
          ></div>

          <div class="relative z-10">

            <h3 class="text-2xl md:text-3xl font-bold">
              Construyamos algo increíble.
            </h3>

            <p class="mt-5 text-indigo-100 text-sm leading-7">
              Cuéntanos qué tienes en mente y trabajaremos
              juntos para hacerlo realidad.
            </p>

            <div class="mt-12 space-y-8">

              <div class="flex items-start gap-4">
                <div
                  class="w-11 h-11 shrink-0 rounded-xl
                         bg-white/10 flex items-center
                         justify-center text-xl"
                >
                  ✉
                </div>

                <div>
                  <p class="text-xs text-indigo-200">Email</p>
                  <a
                    href="mailto:hola@nex.com"
                    class="text-sm font-semibold hover:text-indigo-200"
                  >
                    hola@juamayanex.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-11 h-11 shrink-0 rounded-xl
                         bg-white/10 flex items-center
                         justify-center text-xl"
                >
                  ◎
                </div>

                <div>
                  <p class="text-xs text-indigo-200">Ubicación</p>
                  <p class="text-sm font-semibold">
               Puerto Real, Cadiz, España
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-11 h-11 shrink-0 rounded-xl
                         bg-white/10 flex items-center
                         justify-center text-xl"
                >
                  ↗
                </div>

                <div>
                  <p class="text-xs text-indigo-200">Disponibilidad</p>
                  <p class="text-sm font-semibold">
                    Nuevos proyectos
                  </p>
                </div>
              </div>

            </div>

            <div class="mt-16 pt-8 border-t border-white/20">
              <p class="text-xs text-indigo-200">
                  DISEÑO Y TECNOLOGÍA
              </p>
            </div>

          </div>
        </div>

        <!-- FORM -->
        <div class="lg:col-span-3 p-7 md:p-10">

          <form
            @submit.prevent="handleSubmit"
            class="space-y-6"
          >

            <!-- NAME + EMAIL -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label
                  for="contact-name"
                  class="block text-sm font-semibold
                         text-gray-800 dark:text-gray-200 mb-2"
                >
                  Nombre completo *
                </label>

                <input
                  id="contact-name"
                  v-model.trim="form.name"
                  type="text"
                  placeholder="Tu nombre"
                  autocomplete="name"
                  required
                  maxlength="100"
                  class="w-full px-4 py-3.5 rounded-xl
                         bg-gray-50 dark:bg-[#0B0D17]
                         border border-gray-200 dark:border-white/10
                         text-gray-900 dark:text-white
                         placeholder:text-gray-400
                         outline-none focus:ring-2
                         focus:ring-indigo-500/30
                         focus:border-indigo-500
                         transition-all duration-300"
                />
              </div>

              <div>
                <label
                  for="contact-email"
                  class="block text-sm font-semibold
                         text-gray-800 dark:text-gray-200 mb-2"
                >
                  Correo electrónico *
                </label>

                <input
                  id="contact-email"
                  v-model.trim="form.email"
                  type="email"
                  placeholder="tu@email.com"
                  autocomplete="email"
                  required
                  maxlength="254"
                  class="w-full px-4 py-3.5 rounded-xl
                         bg-gray-50 dark:bg-[#0B0D17]
                         border border-gray-200 dark:border-white/10
                         text-gray-900 dark:text-white
                         placeholder:text-gray-400
                         outline-none focus:ring-2
                         focus:ring-indigo-500/30
                         focus:border-indigo-500
                         transition-all duration-300"
                />
              </div>

            </div>

            <!-- PHONE + SUBJECT -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label
                  for="contact-phone"
                  class="block text-sm font-semibold
                         text-gray-800 dark:text-gray-200 mb-2"
                >
                  Teléfono
                </label>

                <input
                  id="contact-phone"
                  v-model.trim="form.phone"
                  type="tel"
                  placeholder="+34 600 000 000"
                  autocomplete="tel"
                  class="w-full px-4 py-3.5 rounded-xl
                         bg-gray-50 dark:bg-[#0B0D17]
                         border border-gray-200 dark:border-white/10
                         text-gray-900 dark:text-white
                         placeholder:text-gray-400
                         outline-none focus:ring-2
                         focus:ring-indigo-500/30
                         focus:border-indigo-500
                         transition-all duration-300"
                />
              </div>

              <div>
                <label
                  for="contact-subject"
                  class="block text-sm font-semibold
                         text-gray-800 dark:text-gray-200 mb-2"
                >
                  Tipo de proyecto *
                </label>

                <select
                  id="contact-subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3.5 rounded-xl
                         bg-gray-50 dark:bg-[#0B0D17]
                         border border-gray-200 dark:border-white/10
                         text-gray-700 dark:text-gray-200
                         outline-none focus:ring-2
                         focus:ring-indigo-500/30
                         focus:border-indigo-500
                         transition-all duration-300"
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  <option
                    v-for="subject in subjects"
                    :key="subject"
                    :value="subject"
                  >
                    {{ subject }}
                  </option>
                </select>
              </div>

            </div>

            <!-- MESSAGE -->
            <div>
              <label
                for="contact-message"
                class="block text-sm font-semibold
                       text-gray-800 dark:text-gray-200 mb-2"
              >
                Mensaje *
              </label>

              <textarea
                id="contact-message"
                v-model.trim="form.message"
                rows="5"
                placeholder="Cuéntanos más sobre tu proyecto..."
                required
                minlength="10"
                maxlength="2000"
                class="w-full px-4 py-4 rounded-xl resize-none
                       bg-gray-50 dark:bg-[#0B0D17]
                       border border-gray-200 dark:border-white/10
                       text-gray-900 dark:text-white
                       placeholder:text-gray-400
                       outline-none focus:ring-2
                       focus:ring-indigo-500/30
                       focus:border-indigo-500
                       transition-all duration-300"
              ></textarea>

              <p class="mt-2 text-xs text-gray-400 text-right">
                {{ form.message.length }}/2000 caracteres
              </p>
            </div>
 

              
           

            <!-- SUBMIT -->
            <button
              type="submit"
              :disabled="loading"
              class="group w-full flex items-center cursor-pointer
                     justify-center gap-3
                     px-6 py-4 rounded-xl
                     bg-linear-to-r
                     from-indigo-600 to-violet-600
                     hover:from-indigo-500 hover:to-purple-500
                     disabled:opacity-60 disabled:cursor-not-allowed
                     text-white font-semibold text-sm
                     shadow-lg shadow-indigo-600/20
                     hover:shadow-xl hover:-translate-y-0.5
                     transition-all duration-300"
            >
              <span v-if="loading">Procesando...</span>
              <span v-else>Enviar mensaje</span>

              <span v-if="!loading"
                class="group-hover:translate-x-1
                       transition-transform duration-300"
              >
                →
              </span>

              <span v-else
                class="w-4 h-4 border-2 border-white/30
                       border-t-white rounded-full animate-spin"
              ></span>
            </button>

            <p
              class="text-center text-xs
                     text-gray-400 dark:text-gray-500"
            >
              * Campos obligatorios
            </p>

          </form>

        </div>
      </div>
    </div>
  </section>
</template>
