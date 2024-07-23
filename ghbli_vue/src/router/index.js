
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import Main from '@/pages/Main.vue';
import Movies from '@/pages/Movies.vue';
import Movie from '@/pages/Movie.vue';
import Trailer from '@/pages/Trailer.vue';

const routes = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/movies',
    component: Movies,
  },
  { path: '/movies/:id', component: Movie },
  {
    path: '/trailer',
    component: Trailer,
  },
];

const router = createRouter({
  history: createWebHistory('/btest/'),  // GitHub Pages URL 경로 설정
  routes: setupLayouts(routes),
});

export default router;
