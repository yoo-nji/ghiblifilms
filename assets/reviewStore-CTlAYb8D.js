import{al as o,ak as s}from"./index-Dsv4tHYH.js";const a=o("reviewStore",{state:()=>({reviewCounts:{}}),actions:{async fetchReviewCount(e){const{data:t,error:r}=await s.from("ghibli").select("*").eq("movie_id",e);r?console.error("Error fetching reviews:",r):this.reviewCounts[e]=t.length}}});export{a as u};
