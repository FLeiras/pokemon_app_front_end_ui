import { createRouter, createWebHistory } from "vue-router";
import Landing from "../views/LandingView.vue";
import Home from "../components/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/landing",
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
