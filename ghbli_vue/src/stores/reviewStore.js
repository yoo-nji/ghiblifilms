import { defineStore } from 'pinia';
import supabase from '@/utils/supabase';

export const useReviewStore = defineStore('reviewStore', {
  state: () => ({
    reviewCounts: {}, // 각 영화의 댓글 수를 저장할 객체
  }),
  actions: {
    async fetchReviewCount(movieId) {
      const { data, error } = await supabase
        .from("ghibli")
        .select("*")
        .eq("movie_id", movieId);

      if (error) {
        console.error("Error fetching reviews:", error);
      } else {
        this.reviewCounts[movieId] = data.length; // 각 영화의 댓글 수 업데이트
      }
    }
  },
});