import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/Pages/LandingPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    }
  ],
});

export default router;
