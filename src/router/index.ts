import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/Pages/LandingPage.vue";
import GalleryPage from "@/Pages/GalleryPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/gallery",
      name: "GalleryPage",
      component: GalleryPage,
    },
  ],
});

export default router;
