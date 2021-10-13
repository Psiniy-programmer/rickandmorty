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
    path: paths.character.url,
    component: Character,
    props: true
  },
  {
    path: paths.episode.url,
    component: Episode,
    props: true
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router;
