<template>
  <header :class="headerClass">
       <router-link to=/>
       <img src="@/assets/img/home_ico.png" alt="#" /></router-link>
    <div class="navSet">
      <router-link to=/movies> MOVIE</router-link>
      <a href="#">HISTORY</a>
      <!-- <a href="#">GAME</a> -->
      <router-link to=/trailer>TRAILER</router-link>
    </div>
     <a v-if="!isLoggedIn" class="loginBt" @click="signInWithGithub">LOGIN</a>
    <a v-else class="logoutBt" @click="signOut">LOGOUT</a>
    <span class="material-symbols-outlined navIco">menu</span>
  </header>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import supabase from '@/utils/supabase'; // supabase 클라이언트 불러오기

const props = defineProps({
  headerClass: String
});

const isLoggedIn = ref(false); // 로그인 상태를 저장하는 변수

// GitHub 로그인 함수
const signInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      // redirectTo: window.location.href, // 현재 페이지로 리다이렉트
      redirectTo: 'https://yoo-nji.github.io/GhibliFilms/', // 💥빌드용

    },
  });
  if (error) {
    console.error('Error during GitHub sign-in:', error);
  }
};

// 로그아웃 함수
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error during sign-out:', error);
  } else {
    isLoggedIn.value = false;
    //페이지 새로고침
    // window.location.reload();
    //💥빌드용
         const redirectTo = 'https://yoo-nji.github.io/GhibliFilms/'; 
    console.log('Redirecting to:', redirectTo);
    window.location.href = redirectTo;
  }
};

// 로그인 상태 확인 함수
const checkLogin = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  isLoggedIn.value = !!session;
};

// 컴포넌트가 마운트될 때 로그인 상태를 확인합니다.
onMounted(() => {
  checkLogin();
});

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
<style>
@import "@/assets/header.css";

.header-main {
 background-color: rgba(0, 0, 0, 0.7);
  color: white;
}
.header-default {
  background-color: #214436;
}
</style>


