<template>
  <header>
    <a href="#"><img src="@/assets/img/home_ico.png" alt="#" /></a>
    <div class="navSet">
      <router-link :to="{ name: 'movieList' }">
        <a href="#">MOVIE</a></router-link
      >
      <router-link :to="{ name: 'movieDetails' }">
        <a href="#">HISTORY</a></router-link
      >
      <a href="#">GAME</a>
      <a href="#">TRAILER</a>
    </div>
    <a class="loginBt" href="#">LOGIN</a>
    <span class="material-symbols-outlined navIco">menu</span>
  </header>
</template>
