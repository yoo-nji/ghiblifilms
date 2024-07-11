<template>
  <v-container class="mt-16">
    <v-row>
      <v-col
        v-for="(video, index) in videos"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-title>{{ video.title }}</v-card-title>
          <v-card-text>
            <iframe
              :src="video.src"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          title: "Castle in the Sky",
          src: "https://www.youtube.com/embed/8ykEy-yPBFc",
        },
        {
          title: "Grave of the Fireflies",
          src: "https://www.youtube.com/embed/4vPeTSRd580",
        },
        {
          title: "My Neighbor Totoro",
          src: "https://www.youtube.com/embed/92a7Hj0ijLs",
        },
        {
          title: "Kiki's Delivery Service",
          src: "https://www.youtube.com/embed/4bG17OYs-GA",
        },
        {
          title: "Only Yesterday",
          src: "https://www.youtube.com/embed/z1a9AV5ii_o?si=Udq2TAjgokVgc4Kc",
        },
        {
          title: "Porco Rosso",
          src: "https://www.youtube.com/embed/awEC-aLDzjs",
        },
        {
          title: "Pom Poko",
          src: "https://www.youtube.com/embed/_7cowIHjCD4?si=o4dDroino3WnV76n",
        },
        {
          title: "Whisper of the Heart",
          src: "https://www.youtube.com/embed/0pVkiod6V0U",
        },
        {
          title: "Princess Mononoke",
          src: "https://www.youtube.com/embed/4OiMOHRDs14",
        },
        {
          title: "My Neighbors the Yamadas",
          src: "https://www.youtube.com/embed/1C9ujuCPlnY",
        },
        {
          title: "Spirited Away",
          src: "https://www.youtube.com/embed/ByXuk9QqQkk",
        },
        {
          title: "The Cat Returns",
          src: "https://www.youtube.com/embed/Gp-H_YOcYTM",
        },
        {
          title: "Howl's Moving Castle",
          src: "https://www.youtube.com/embed/iwROgK94zcM",
        },
        {
          title: "Tales from Earthsea",
          src: "https://www.youtube.com/embed/8hxYx3Jq3kI",
        },
        {
          title: "Ponyo",
          src: "https://www.youtube.com/embed/CsR3KVgBzSM",
        },
        {
          title: "Arrietty",
          src: "https://www.youtube.com/embed/9CtIXPhPo0g",
        },
        {
          title: "From Up on Poppy Hill",
          src: "https://www.youtube.com/embed/9nzpk_Br6yo",
        },
        {
          title: "The Wind Rises",
          src: "https://www.youtube.com/embed/PhHoCnRg1Yw",
        },
        {
          title: "The Tale of the Princess Kaguya",
          src: "https://www.youtube.com/embed/W71mtorCZDw?si=OgYa3mjuB8K17otz",
        },
        {
          title: "When Marnie Was There",
          src: "https://www.youtube.com/embed/jjmrxqcQdYg",
        },
        {
          title: "The Red Turtle",
          src: "https://www.youtube.com/embed/Sw7BggqBpTk",
        },
        {
          title: "Earwig and the Witch",
          src: "https://www.youtube.com/embed/wZg2iEf-fTA?si=PEoiiBsS1KBMT77y",
        },
      ],
    };
  },
};
</script>

<style scoped>
iframe {
  width: 100%;
  height: 215px; /* 유튜브 비디오의 기본 16:9 비율 */
}
</style>
