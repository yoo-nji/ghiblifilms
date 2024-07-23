<template>
  <div class="secBox">
    <div class="searchBox">
      <img src="@/assets/img/search_img.png" alt="#" />
      <div>
        <input
          v-model="searchQuery"
          type="text"
          autocomplete="off"
          spellcheck="false"
          placeholder="Search by movie title"
        />
        <span class="mdi mdi-magnify"></span>
      </div>
    </div>
    <div id="movieBoxSet">
      <span v-if="loading">Loading movies...</span>
      <span v-else-if="!filteredMovies.length">No search results...</span>
      <div v-else v-for="movie in filteredMovies" :key="movie.id">
        <router-link :to="`/Movies/${movie.id}`">
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
                  <span>{{ movie.running_time }} min</span>
                </div>
              </div>
              <span v-if="reviewCounts[movie.id]" class="reviewBadge">{{
                reviewCounts[movie.id]
              }}</span>
            </div>
            <h2>{{ movie.title }}</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useReviewStore } from "@/stores/reviewStore"; // Pinia 스토어 가져오기

const movies = ref([]);
const searchQuery = ref("");
const loading = ref(true); // 로딩 상태 추가
const store = useReviewStore(); // Pinia 스토어 사용
const { reviewCounts, fetchReviewCount } = store;

// API에서 영화 데이터를 가져오는 함수
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
    // 각 영화의 리뷰 수를 가져오기
    movies.value.forEach((movie) => {
      fetchReviewCount(movie.id);
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
  } finally {
    loading.value = false; // 로딩 완료
  }
};

// 검색어에 따라 필터링된 영화 목록 계산 속성
const filteredMovies = computed(() => {
  if (!searchQuery.value) {
    return movies.value;
  }
  return movies.value.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// 컴포넌트가 마운트될 때 영화 데이터를 가져오는 함수 호출
onMounted(() => {
  fetchGhibliMovies();
});
</script>

<style scoped>
@import "@/assets/movie.css";
.movieBox {
  position: relative;
}

.reviewBadge {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  position: absolute;
  z-index: 200;
  top: -5px;
  right: -5px;
  background-color: #448569;
  /* background-color: #1867c0; */
  /* background-color: #c01e18; */
  padding: 5px 10px;
  min-width: 40px;
  height: 30px;
  border-radius: 15px / 50%;
  /* border: 1px solid #fff; */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
}

.movieInfo .reviewBadge {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
}
</style>
