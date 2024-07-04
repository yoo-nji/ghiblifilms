<template>
  <div class="sec">
    <div id="mainSec"></div>
    <div class="sloganBox">
      <div class="sloganText">
        {{ randomText1 }}
      </div>
      <div class="sloganText2">{{ randomText2 }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import slogan from "@/data/slogan.json";

const randomText1 = ref("");
const randomText2 = ref("");

function setRandomBackground() {
  const $mainSec = document.getElementById("mainSec");

  const randomIndex = Math.floor(Math.random() * slogan.length);
  const randomImage = slogan[randomIndex].image_url;
  randomText1.value = slogan[randomIndex].quote;
  randomText2.value = slogan[randomIndex].movie;

  $mainSec.style.background = `url(${randomImage}) no-repeat center/cover`;
}

onMounted(() => {
  console.log(slogan); // 콘솔에 JSON 데이터 출력
  setRandomBackground();
});
</script>
<style scope>
@import "@/assets/ghibliMain.css";
</style>
