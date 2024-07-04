<template>
  <header>
       <router-link to=/>
       <img src="@/assets/img/home_ico.png" alt="#" /></router-link>
    <div class="navSet">
      <router-link to=/movie> MOVIE</router-link>
      <a href="#">HISTORY</a>
      <a href="#">GAME</a>
      <a href="#">TRAILER</a>
    </div>
    <a class="loginBt" href="#">LOGIN</a>
    <span class="material-symbols-outlined navIco">menu</span>
  </header>
</template>
<script>
//스크롤시 헤더 색상, 투명도 변경
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 250) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});
</script>

