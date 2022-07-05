import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Prueba from "../views/Prueba.vue";
import Noticias from "../views/Noticias.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "prueba",
      component: Prueba,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/noticias",
      name: "noticias",
      component: Noticias,
    },
  ],
});

export default router;
