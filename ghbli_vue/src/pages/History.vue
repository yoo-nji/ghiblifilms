<template>
  <div class="historyCon">
    <div class="historyLine"></div>
    <div
      v-for="(item, index) in history"
      :key="index"
      class="historyItem"
      :data-aos="index % 2 === 0 ? 'flip-left' : 'fade-left'"
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
</template>

<script setup>
import history from "@/data/history.json";
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* border: 1px solid #d42424; */
}
.historyLine {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 100px;
  background: linear-gradient(180deg, rgba(14, 156, 235, 0) 0%, #0e9ceb 100%),
    linear-gradient(180deg, #fff 4.5%, #81bedb 73%);
  transform: translateX(-50%);
  z-index: 0;
}

.historyCon {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0 0 0;
}
.historyItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 500px;
  z-index: 1;
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
.historyCon .historyItem:nth-child(2) img {
  width: 230px;
}
.historyItem:nth-child(6) img {
  width: 190px;
}

.historyTitle {
  font-weight: bold;
  margin-top: 10px;
}

.historyYear {
  color: gray;
  margin-top: 5px;
}
</style>
