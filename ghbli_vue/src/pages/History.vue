<template>
  <div>
    <div class="historyBanner"></div>
    <div class="historyCon">
      <div
        v-for="(item, index) in history"
        :key="index"
        class="historyItem"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
      >
        <div>
          <img
            :src="`./src/assets/img/history_${index + 1}.png`"
            alt="history image"
          />
          <div class="historyTitle">{{ item.title }}</div>
          <div class="historyYear">{{ item.year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import history from "@/data/history.json";
onMounted(() => {
  AOS.init({
    duration: 600, // 지속 시간
    offset: 80, // 시작 지점
    delay: 100, // 지연 시간
  });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
/* Montserrat 폰트 - */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* border: 1px solid #d42424; */
  font-family: "Montserrat", sans-serif;
}

.historyCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
}
.historyCon::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 50%;
  width: 150px;
  height: 100%;
  background: linear-gradient(180deg, rgba(14, 156, 235, 0) 0%, #0e9ceb 100%),
    linear-gradient(180deg, #ffffff 4.5%, #81bedb 73%);
  transform: translateX(-50%);
  z-index: 0;
}
.historyItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
  width: 500px;
}
.historyItem:nth-of-type(2n) {
  align-items: flex-start;
}
.historyItem:nth-of-type(2n + 1) {
  align-items: flex-end;
}
.historyItem:nth-of-type(2n + 1) div {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.historyItem img {
  width: 250px;
  height: auto;
}
.historyCon .historyItem:nth-child(1) img {
  width: 230px;
}
.historyItem:nth-child(5) img {
  width: 190px;
}
.historyTitle {
  color: rgb(94, 94, 94);
  font-weight: bold;
  margin-top: 10px;
}
.historyYear {
  color: gray;
  margin-top: 5px;
  font-size: 20px;
}

/* 영화검색페이지 모바일 320-480 */
@media (max-width: 480px) {
  body {
    min-width: 320px;
  }
  .historyBanner > img {
    width: 200px;
  }
  .historyCon {
    margin-top: 150px;
  }
  .historyCon::before {
    width: 120px;
  }
  .historyItem {
    margin-bottom: 40px;
    width: 250px;
  }
  .historyItem img {
    width: 120px;
  }
  .historyCon .historyItem:nth-child(1) img {
    width: 110px;
  }
  .historyItem:nth-child(5) img {
    width: 80px;
  }
  .historyTitle {
    font-size: 14px;
  }
  .historyYear {
    font-size: 15px;
  }
}
</style>
