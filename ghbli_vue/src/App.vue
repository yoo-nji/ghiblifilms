<template>
  <v-app>
    <v-main style="background: #f5f5f5" class="align-content-start">
      <Header :header-class="headerClass" />
      <router-view />
    </v-main>
  </v-app>
</template>
<script setup>
import Header from "@/components/ghibliHeader.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

const headerClass = ref("");
const route = useRoute();
const router = useRouter();

// 라우트 이동 시 스크롤을 맨 위로 이동
router.afterEach(() => {
  window.scrollTo(0, 0);
});

watch(route, (newRoute) => {
  if (newRoute.path === "/") {
    headerClass.value = "header-main";
  } else {
    headerClass.value = "header-default";
  }
});
</script>
