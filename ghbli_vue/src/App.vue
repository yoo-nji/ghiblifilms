<template>
  <v-app>
    <v-main style="background: #f5f5f5">
      <Header />
      <router-view />
    </v-main>
  </v-app>
</template>
<script setup>
// Header 컴포넌트 불러오기
import Header from "@/components/ghibliHeader.vue";
</script>
<style>
@import "@/assets/header.css";
</style>
