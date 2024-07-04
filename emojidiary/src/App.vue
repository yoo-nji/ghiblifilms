<template>
  <!-- 앱 전체의 배경 스타일을 설정 -->
  <v-app style="background-color: #f4f8f9">
    <v-main class="main-content">
      <div class="contentContainer">
        <v-container>
          <h2>
            하루 <u>한줄</u> 기록해 보세요
            <span class="mdi mdi-lead-pencil"></span>
          </h2>
          <!-- 기록 추가 버튼 -->
          <v-btn
            prepend-icon="mdi-note-plus-outline"
            @click="openModal"
            class="my-5"
            color="#5A6B79"
            rounded
          >
            기록 추가
          </v-btn>

          <!-- 검색창 -->
          <v-text-field
            v-model="searchQuery"
            variant="outlined"
            label="저장된 기록을 검색해 보세요"
            rounded
            prepend-inner-icon="mdi-magnify"
            :loading="loading"
            :style="{ color: '#8198aa' }"
          ></v-text-field>

          <!-- 감정 필터 선택 -->
          <div class="keywordFilter">
            <v-chip
              v-for="emotion in emotions"
              :key="emotion"
              :class="{ active: emotionFilter === emotion }"
              @click="toggleEmotionFilter(emotion)"
              variant="elevated"
              color="#fff"
              style="font-size: 20px"
            >
              {{ emotion }}
            </v-chip>
            <v-chip @click="clearAllFilter" variant="elevated" color="#fff">
              전체 보기
            </v-chip>
            <v-chip @click="clearAllDiaries" variant="elevated" color="#eceff1">
              전체 삭제
            </v-chip>
          </div>

          <!-- 기록 목록 -->
          <div class="diaryList">
            <div class="diaryListContent">
              <v-list>
                <!-- 각 기록 아이템 -->
                <v-list-item
                  v-for="diary in filteredDiaries"
                  :key="diary.id"
                  class="diaryItem"
                  @click="openViewModal(diary)"
                >
                  <div class="listBox">
                    <div>
                      <v-chip class="pa-5" color="#8198aa">
                        <span class="mr-2" style="font-size: 20px">
                          {{ diary.emotion }}</span
                        >
                        <strong>{{ diary.date }}</strong>
                      </v-chip>

                      <span class="ml-6" style="font-size: 18px">
                        {{ diary.title }}</span
                      >
                    </div>
                  </div>
                  <template v-slot:append>
                    <div class="d-flex" style="gap: 8px">
                      <!-- 수정 버튼 -->
                      <v-btn
                        size="small"
                        icon
                        @click.stop="editDiary(diary.id)"
                      >
                        <v-icon>mdi-pencil-outline</v-icon>
                      </v-btn>
                      <!-- 삭제 버튼 -->
                      <v-btn
                        size="small"
                        icon
                        @click.stop="deleteDiary(diary.id)"
                      >
                        <v-icon>mdi-trash-can-outline</v-icon>
                      </v-btn>
                    </div>
                  </template>
                </v-list-item>
              </v-list>
            </div>
          </div>

          <!-- 기록 추가 모달 -->
          <v-dialog v-model="addModalOpen" max-width="600px">
            <v-card>
              <v-card-title>
                <v-btn
                  @click="closeAddModal"
                  density="comfortable"
                  variant="text"
                  class="mr-5"
                  icon
                >
                  <v-icon size="large">mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>
                <form @submit.prevent="saveDiary">
                  <!-- 날짜 입력 -->
                  <v-date-picker v-model="selectedDate" show-adjacent-months />
                  <v-text-field
                    v-model="formattedDate"
                    variant="underlined"
                    label="선택된 날짜"
                    rounded
                    readonly
                  />

                  <!-- 제목 입력 -->
                  <v-text-field
                    v-model="currentDiary.title"
                    variant="underlined"
                    label="제목"
                    required
                    rounded
                  ></v-text-field>
                  <!-- 감정 선택 -->
                  <v-select
                    v-model="currentDiary.emotion"
                    variant="outlined"
                    :items="emotions"
                    label="감정 선택"
                    required
                    rounded
                  ></v-select>
                  <!-- 기록 내용 입력 -->
                  <v-textarea
                    v-model="currentDiary.content"
                    variant="outlined"
                    label="기록"
                    rows="3"
                    auto-grow
                    rounded
                    clearable
                  ></v-textarea>
                  <!-- 등록 버튼 -->
                  <v-btn type="submit" color="#5A6B79" dark rounded>
                    등록
                  </v-btn>
                </form>
              </v-card-text>
            </v-card>
          </v-dialog>

          <!-- 기록 보기 모달 -->
          <v-dialog v-model="viewModalOpen" max-width="600px">
            <v-card>
              <v-card-title>
                <v-btn
                  @click="closeViewModal"
                  density="comfortable"
                  variant="text"
                  class="mr-5"
                  icon
                >
                  <v-icon size="large">mdi-close</v-icon>
                </v-btn>
                <strong>{{ viewedDiary.date }}</strong>
              </v-card-title>
              <v-card-text style="font-size: 18px" v-if="viewedDiary">
                <p class="mb-4">
                  나의 기분은?
                  <span class="emotionBox">{{ viewedDiary.emotion }}</span>
                </p>
                <strong class="mb-6"> {{ viewedDiary.title }}</strong>
                <v-textarea
                  v-model="viewedDiary.content"
                  variant="outlined"
                  style="width: 70%"
                  label="내용"
                  auto-grow
                  rounded
                  readonly
                  >{{ viewedDiary.content }}</v-textarea
                >
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { defaultDiaries } from "@/assets/defaultData";

// 기록 목록을 로컬 스토리지에서 불러옴
const diaryData = ref(JSON.parse(localStorage.getItem("diaryData")) || []);
const viewedDiary = ref(null);

// created 훅에서 기본 데이터 설정
onMounted(() => {
  if (!localStorage.getItem("diaryData")) {
    diaryData.value = defaultDiaries;
    localStorage.setItem("diaryData", JSON.stringify(diaryData.value));
  }
});

// 전체 삭제 함수
const clearAllDiaries = () => {
  localStorage.removeItem("diaryData");
  diaryData.value = [];
};

// 데이트피커 전처리
const selectedDate = ref(null);
const formattedDate = computed(() => {
  if (!selectedDate.value) return null;
  const year = selectedDate.value.getFullYear();
  const month = (selectedDate.value.getMonth() + 1).toString().padStart(2, "0");
  const day = selectedDate.value.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
});

// 모달 상태를 관리하는 변수들
const loading = ref(false);
const addModalOpen = ref(false);
const viewModalOpen = ref(false);
const editMode = ref(false);
const editIndex = ref(-1);

// 기록 데이터를 저장하는 변수
const currentDiary = ref({
  id: "",
  date: "",
  title: "",
  content: "",
  emotion: "",
});

// 검색어와 감정 필터를 저장하는 변수들
const searchQuery = ref("");
const emotions = ["😍", "🥲", "😡", "🙂", "😖"];
const emotionFilter = ref("");

// 검색어와 감정 필터에 따라 기록 필터링 추가
const filteredDiaries = computed(() => {
  return diaryData.value
    .filter((diary) => {
      const matchesTitle =
        diary.title && diary.title.includes(searchQuery.value);
      const matchesContent =
        diary.content && diary.content.includes(searchQuery.value);
      const matchesEmotion =
        !emotionFilter.value || diary.emotion === emotionFilter.value;
      return (matchesTitle || matchesContent) && matchesEmotion;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
});

// 감정 필터를 토글하는 함수
const toggleEmotionFilter = (emotion) => {
  if (emotionFilter.value === emotion) {
    emotionFilter.value = "";
  } else {
    emotionFilter.value = emotion;
  }
};

// 기록 추가 모달을 여는 함수
const openModal = () => {
  addModalOpen.value = true;
  editMode.value = false;
  resetCurrentDiary();
};

// 기록 추가 모달을 닫는 함수
const closeAddModal = () => {
  addModalOpen.value = false;
};

// 기록을 저장하는 함수
const saveDiary = () => {
  currentDiary.value.date = formattedDate.value;

  if (editMode.value) {
    diaryData.value[editIndex.value] = { ...currentDiary.value };
    editMode.value = false;
    editIndex.value = -1;
  } else {
    diaryData.value.push({ ...currentDiary.value, id: uuidv4() });
  }
  localStorage.setItem("diaryData", JSON.stringify(diaryData.value));
  closeAddModal();
};

// 기록 보기 모달을 여는 함수
const openViewModal = (diary) => {
  viewedDiary.value = { ...diary };
  viewModalOpen.value = true;
};

// 기록 보기 모달을 닫는 함수
const closeViewModal = () => {
  viewModalOpen.value = false;
};

// 기록 수정 모드를 여는 함수
const editDiary = (id) => {
  editIndex.value = diaryData.value.findIndex((diary) => diary.id === id);
  if (editIndex.value !== -1) {
    currentDiary.value = { ...diaryData.value[editIndex.value] };
    selectedDate.value = new Date(currentDiary.value.date); // 날짜를 selectedDate에 반영

    editMode.value = true;
    addModalOpen.value = true;
  }
};

// 기록을 삭제하는 함수
const deleteDiary = (id) => {
  const index = diaryData.value.findIndex((diary) => diary.id === id);
  if (index !== -1) {
    diaryData.value.splice(index, 1);
    localStorage.setItem("diaryData", JSON.stringify(diaryData.value));
  }
};

// 기록 입력 폼을 초기화하는 함수
const resetCurrentDiary = () => {
  currentDiary.value = {
    id: "",
    date: "",
    title: "",
    content: "",
    emotion: "",
  };
};

// 전체보기 버튼 클릭시 검색어랑 감정 필터를 초기화
const clearAllFilter = () => {
  emotionFilter.value = "";
  searchQuery.value = "";
};
</script>

<style scoped>
@import "@/assets/style.css";
</style>
