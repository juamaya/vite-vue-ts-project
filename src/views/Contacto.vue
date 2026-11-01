<script setup lang="ts">
import ContactForm from "../components/ContactForm.vue";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const handleContact = (data: ContactData) => {
  console.log("Datos del formulario:", data);

  // Aquí conectarás tu backend o servicio de correo.
};
</script>

<template>
  <ContactForm @submit="handleContact" />
</template>
