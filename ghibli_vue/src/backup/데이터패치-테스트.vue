<template>
  <h2 style="color: black" v-if="movies.length">테스트{{ movies[0].title }}</h2>
  <li style="color: black" v-for="movie in movies" :key="movie.id">
    {{ movie.title }}
  </li>
</template>

<script setup>
import { ref, onMounted } from "vue";

const movies = ref([]);

const fetchGhibliMovies = async () => {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const json = await response.json();
    movies.value = json.map((v) => ({
      id: v.id,
      title: v.title,
      image: v.image,
      release_date: v.release_date,
      running_time: v.running_time,
    }));
    console.log("Fetched movies:", movies.value);
    console.log("First movie:", movies.value[0]); // 첫 번째 영화 객체를 출력
    console.log("First movie title:", movies.value[0].title); // 첫 번째 영화의 제목을 출력
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

onMounted(() => {
  fetchGhibliMovies();
});
</script>

<style>
/* 스타일이 필요하지 않으므로 비워둡니다. */
</style>
