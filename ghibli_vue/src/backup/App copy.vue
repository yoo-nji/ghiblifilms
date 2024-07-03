<template>
  <header>
    <a href="#"><img src="@/assets/home_ico.png" alt="#" /></a>
    <div class="navSet">
      <a href="#">MOVIE</a>
      <a href="#">HISTORY</a>
      <a href="#">GAME</a>
      <a href="#">TRAILER</a>
    </div>
    <a class="loginBt" href="#">LOGIN</a>
    <span class="material-symbols-outlined navIco">menu</span>
  </header>
  <div class="sec">
    <div class="searchBox">
      <img src="#" alt="#" />
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
      <!-- <div class="movieBox">
        <div class="movieInfo">
          <div>My Neighbor Totoro</div>
          <div>
            <div>
              <span>
                release date
              </span>
              <span>
                1988
              </span>
            </div>
            <div>
              <span>
                running time
              </span>
              <span>
                86
              </span>
            </div>
          </div>
        </div>
        <h2>
          My Neighbor Totor
        </h2>
      </div> -->
      <span> 영화 정보를 불러오는 중입니다...</span>
    </div>
  </div>
</template>
<script setup>
// import MovieList from "@/components/MovieList.vue";
</script>
<!-- <script>
import { fetchGhibliMovies } from "./utils/ghibli_movie";

export default {
  data() {
    return {
      searchInput: "",
      movies: [],
      movieTitles: [],
      loading: true,
    };
  },
  computed: {
    filteredMovies() {
      return this.movies.filter((movie) =>
        movie.title.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
  },
  methods: {
    navigateToDetails(movieId) {
      console.log(`Navigating to movieDetails with ID: ${movieId}`);
      // 여기에 상세 페이지로 이동하는 로직 추가
    },
  },
  created() {
    fetchGhibliMovies(
      this.searchInput,
      this.movies,
      this.movieTitles,
      this.navigateToDetails
    )
      .then((movies) => {
        this.movies = movies;
        this.movieTitles = movies.map((movie) => movie.title);
        this.loading = false;
      })
      .catch((error) => console.error("Error:", error));
  },
};
</script> -->
