<template>
  <movieDt :movieId="route.params.id" />
</template>

<script setup>
import movieDt from "@/components/movieDt.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>
