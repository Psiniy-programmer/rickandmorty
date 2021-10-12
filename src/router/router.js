import {createRouter, createWebHistory} from "vue-router";
import paths from '@/router/paths';
import Index from "@/pages/Index";
import Character from "@/pages/Character";
import Episode from "@/pages/Episode";

const routes = [
  {
    path: paths.index,
    component: Index
  },
  {
    path: paths.character,
    component: Character
  },
  {
    path: paths.episode,
    component: Episode
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;
