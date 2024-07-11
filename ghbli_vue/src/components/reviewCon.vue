<template>
  <v-container>
    <v-card class="reviewInputBox no-shadow transparent-background">
      <!-- 리뷰 개수를 세어준 후 span에 넣기 -->
      <v-card-title class="d-flex">
        Review
        <v-badge
          :content="reviews.length"
          color="primary"
          class="ml-4"
          overlap
        ></v-badge>
      </v-card-title>
      <v-form @submit.prevent="addReview">
        <v-card-subtitle>
          <div class="userId">ID: {{ formatUserId(userId) }}</div>
        </v-card-subtitle>
        <v-textarea
          class="no-resize"
          variant="outlined"
          v-model="newReview"
          @input="checkCharLimit"
          name="review"
          :placeholder="
            isLoggedIn
              ? 'Please enter your review.'
              : 'Please log in to leave a review.'
          "
          required
          maxlength="300"
          auto-grow
          rows="3"
          max-rows="3"
        ></v-textarea>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="charCount">
            {{ newReview.length }}/300
            <v-alert
              v-if="newReview.length >= 300"
              type="error"
              dense
              class="warning"
              variant="outlined"
            >
              최대 300 자까지 입력 가능합니다.
            </v-alert>
          </div>

          <v-btn type="submit" variant="tonal" color="#316A52">등록</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <v-container v-if="reviews.length">
      <v-row>
        <v-col v-for="review in reviews" :key="review.id" cols="12">
          <v-card class="reviewBox no-shadow transparent-background">
            <v-card-text>
              <div class="pb-5">{{ formatUserId(review.user_id) }}</div>
              <div v-if="isEditing === review.id">
                <v-textarea
                  class="no-resize"
                  variant="outlined"
                  required
                  maxlength="300"
                  auto-grow
                  rows="3"
                  max-rows="3"
                  v-model="review.body"
                ></v-textarea>
              </div>
              <div v-else>
                <div class="bodyCon">{{ review.body }}</div>
              </div>
              <!-- 오른쪽정렬 -->
              <div>
                <span>{{ formatDateTime(review.created_at) }}</span>
              </div>

              <!-- 수정 및 삭제 버튼 -->
              <div class="d-flex justify-end" v-if="review.user_id === userId">
                <v-btn
                  v-if="isEditing === review.id"
                  @click="updateReview(review.id)"
                  color="#316A52"
                  class="mr-2"
                >
                  수정 완료
                </v-btn>
                <v-btn
                  v-else
                  @click="editReview(review.id)"
                  color="#316A52"
                  class="mr-2"
                  >수정</v-btn
                >
                <v-btn @click="deleteReview(review.id)" color="#626262"
                  >삭제</v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-alert type="info" variant="outlined" text>
        No reviews yet. Be the first to review!
      </v-alert>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import supabase from "@/utils/supabase";
import { useReviewStore } from "@/stores/reviewStore";

const props = defineProps({
  movieId: String,
});

//피니아로 댓글수 업데이트해서 카드로 표시
const store = useReviewStore();
const { fetchReviewCount } = store;

const reviews = ref([]);
const newReview = ref("");
const userId = ref(""); // 로그인된 유저 ID를 저장할 변수
const isEditing = ref(null); // 현재 수정 중인 리뷰 ID를 저장할 변수
const isLoggedIn = ref(false); // 로그인 상태를 저장할 변수

// 유저 ID를 가져오는 함수
const fetchUserId = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Error fetching user session:", error);
  } else if (data.session) {
    userId.value = data.session.user.id;
    isLoggedIn.value = true; // 로그인 상태 업데이트
  } else {
    isLoggedIn.value = false; // 로그인 상태 업데이트
  }
};

// 리뷰 데이터를 가져오는 함수
const fetchReviews = async () => {
  const { data, error } = await supabase
    .from("ghibli")
    .select("*")
    .eq("movie_id", props.movieId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  } else {
    // console.log(data);
    reviews.value = data;
    fetchReviewCount(props.movieId); // 리뷰 수 업데이트
  }
};

// 새로운 리뷰를 추가하는 함수
const addReview = async () => {
  if (newReview.value.length <= 300) {
    const { data, error } = await supabase.from("ghibli").insert([
      {
        movie_id: props.movieId,
        body: newReview.value,
        user_id: userId.value,
      },
    ]);
    newReview.value = ""; // 리뷰 추가 후 입력 필드 초기화
    fetchReviews();
  }
};

// 글자 수 제한 확인 함수
const checkCharLimit = () => {
  if (newReview.value.length > 300) {
    newReview.value = newReview.value.slice(0, 300);
  }
};

// 리뷰를 수정하는 함수
const editReview = (reviewId) => {
  isEditing.value = reviewId;
};

const updateReview = async (reviewId) => {
  const reviewToUpdate = reviews.value.find((review) => review.id === reviewId);
  if (reviewToUpdate) {
    const { data, error } = await supabase
      .from("ghibli")
      .update({ body: reviewToUpdate.body })
      .eq("id", reviewId);
    if (error) {
      console.error("Error updating review:", error);
    } else {
      isEditing.value = null; // 수정 모드 종료
      fetchReviews(); // 업데이트된 리뷰 목록을 다시 가져옵니다.
    }
  }
};

//리뷰를 삭제하는 함수
const deleteReview = async (reviewId) => {
  await supabase.from("ghibli").delete().eq("id", reviewId);
  fetchReviews();
};

// 사용자 ID 변환 함수
const formatUserId = (userId) => {
  if (!userId) return "No ID";
  if (userId.length <= 6) return userId;
  return userId.slice(0, 4) + "******";
};

// 날짜와 시간을 형식화하는 함수
const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Seoul",
  }).format(date);
};

// 컴포넌트가 마운트될 때 리뷰 데이터를 가져옵니다.
onMounted(() => {
  fetchReviews();
  fetchUserId();
});
</script>

<style scoped>
/* 필요한 스타일 추가 */
.reviewBox {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.reviewText {
  display: flex;
  flex-direction: column;
}
.reviewText > div {
  margin-bottom: 5px;
}

/* 글자수제한 */
.warning {
  color: red;
  font-size: 12px;
}

input {
  width: 100%;
  height: 20px;
}

.bodyCon {
  height: auto;
  padding-bottom: 20px;
}

textarea.no-resize {
  width: 100%;
  height: 100px;
  resize: none;
  margin: 0;
  padding: 0;
}

/* 새로운 스타일 */
.no-shadow {
  box-shadow: none !important;
}

.transparent-background {
  background: transparent !important;
}
</style>
