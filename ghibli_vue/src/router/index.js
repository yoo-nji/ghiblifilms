/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';

import movieList from '@/components/movieList.vue';
// import movieDetails from '@/pages/movie_details.vue';

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/movielist',
      // name: 'moviePage',
      component: movieList,
    },
    // {
    //   path: '/movieDetails',
    //   // name: 'movieDetails',
    //   component: movieDetails,
    // },
  ]
});

export default router;
