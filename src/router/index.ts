import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/Inicio.vue";
import Servicios from "../views/Servicios.vue";
import Proyectos from "../views/Proyectos.vue";
import Nosotros from "../views/Nosotros.vue";
import Contacto from "../views/Contacto.vue";

const routes = [
  { path: "/", component: Inicio },
  { path: "/servicios", component: Servicios },
  { path: "/proyectos", component: Proyectos },
  { path: "/nosotros", component: Nosotros },
  { path: "/contacto", component: Contacto },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // Volver al principio al cambiar de página
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return { top: 0, left: 0 };
    }

    return {
      top: 0,
      left: 0,
      behavior: "smooth",
      //behavior: "instant",
    };
  },
});

export default router;
