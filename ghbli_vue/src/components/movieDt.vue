<template>
  <div v-if="movie">
    <div class="sec">
      <div class="topBanner">topBanner</div>
      <div class="inner">
        <!-- 영화 정보 -->
        <div class="movieDetails">
          <div class="moviePoster">
            <img :src="movie.image" alt="Poster img" />
          </div>
          <div class="content">
            <h1>{{ movie.title }}</h1>
            <div class="detailsText">
              <div>{{ movie.description }}</div>
              <div>
                <div>
                  <span>release date</span>
                  <span>{{ movie.release_date }}</span>
                </div>
                <div>
                  <span>running time</span>
                  <span>{{ movie.running_time }}</span>
                </div>
                <div>
                  <span>director</span>
                  <span>{{ movie.director }}</span>
                </div>
                <div>
                  <span>producer</span>
                  <span>{{ movie.producer }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 리뷰 컴포넌트 -->
    <reviewCon :movieId="movieId" />
  </div>
</template>

<script setup>
import reviewCon from "@/components/reviewCon.vue";
import { ref, onMounted, nextTick } from "vue";
import { useRoute } from "vue-router";
// import reviewsData from "@/data/reviews.json";

const route = useRoute();

const movieId = route.params.id;
// console.log("movieId:", movieId.value);
const movie = ref(null);
// const reviews = ref([]);

const fetchGhibliMovie = async (id) => {
  try {
    const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
    const data = await response.json();
    console.log(data);
    movie.value = {
      description: data.description,
      title: data.title,
      image: data.image,
      release_date: data.release_date,
      running_time: data.running_time,
      movie_banner: data.movie_banner,
      director: data.director,
      producer: data.producer,
    };
    // 배경 이미지 설정(배너가 돔에 렌더링된 후에 접근)
    await nextTick();
    const topBanner = document.querySelector(".topBanner");
    const moviePoster = document.querySelector(".moviePoster");

    if (topBanner) {
      topBanner.style.backgroundImage = `url(${data.movie_banner})`;
    }
    if (moviePoster) {
      moviePoster.style.backgroundImage = `url(${data.image})`;
    }

    // 리뷰 데이터 설정
    // const movieReviews = reviewsData.find((movie) => movie.id === id);
    // if (movieReviews) {
    //   reviews.value = movieReviews.comments;
    // }
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};

onMounted(() => {
  fetchGhibliMovie(movieId);
});
</script>

<style scoped>
@import "@/assets/movieDt.css";
</style>
