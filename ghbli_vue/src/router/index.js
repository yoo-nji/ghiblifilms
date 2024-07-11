/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';
import { setupLayouts } from 'virtual:generated-layouts';
// import Movie from '@/pages/Movie.vue';
// import About from '@/pages/About.vue';
// import Members from '@/pages/Members.vue';

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: setupLayouts,
  routes: [
    // { path: '/', component: Movie, },
    // { path: '/about', component: About, },
    // { path: '/members', component: Members, },
  ]
});

export default router;
