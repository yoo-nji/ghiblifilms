<template>
  <div class="sec">
    <div class="searchBox">
      <img src="@/assets/img/search_img.png" alt="#" />
      <div>
        <input
          id="ghibliSearch"
          list="movieTitles"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="영화 제목으로 검색"
        />
        <datalist id="movieTitles"> </datalist>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div id="movieBoxSet">
      <span v-if="!movies.length"> 영화 정보를 불러오는 중입니다...</span>
      <div v-else v-for="movie in movies" :key="movie.id">
        <router-link :to="`/movie/${movie.id}`" class="custom-link">
          <div class="movieBox">
            <div
              class="movieInfo"
              :style="{ backgroundImage: 'url(' + movie.image + ')' }"
            >
              <div>{{ movie.title }}</div>
              <div>
                <div>
                  <span>release date</span>
                  <span>{{ movie.release_date }}</span>
                </div>
                <div>
                  <span>running time</span>
                  <span>{{ movie.running_time }}</span>
                </div>
              </div>
            </div>
            <h2>{{ movie.title }}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// Header 컴포넌트 불러오기
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
    // console.log("First movie:", movies.value[0]); // 첫 번째 영화 객체를 출력
    // console.log("First movie title:", movies.value[0].title); // 첫 번째 영화의 제목을 출력
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

onMounted(() => {
  fetchGhibliMovies();
});
</script>

<style scoped>
@import "@/assets/movie.css";
</style>
