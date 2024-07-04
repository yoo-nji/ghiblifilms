<template>
  <v-app>
    <v-main>
      <Header />
      <router-view />
    </v-main>
  </v-app>
</template>
<script setup>
// Header 컴포넌트 불러오기
import Header from "@/components/ghibliHeader.vue";
import "@/assets/header.css";
</script>
