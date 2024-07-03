/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto';

import movie from '@/components/movieList.vue';
import movieDetails from '@/pages/movie_details.vue';

const routes = [
  {
    path: '/movie',
    component: movie
  },
  {
    path: '/movie/:id',
    name: 'movieDetails',
    component: movieDetails,
    props: true  // props를 활성화하여 URL 파라미터를 컴포넌트의 props로 전달합니다.
  }
];
// 라우터 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // base URL을 설정합니다.
  routes
});

export default router;
