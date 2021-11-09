<template>
  <swiper class="mySwiper swiper-h">
    <swiper-slide>
      <start />
    </swiper-slide>
    <swiper-slide>
      <swiper class="mySwiper2 swiper-v" :direction="'vertical'">
        <swiper-slide> <service /></swiper-slide>
        <swiper-slide> <service /></swiper-slide>
        <swiper-slide> <service /></swiper-slide>
      </swiper>
    </swiper-slide>
    <swiper-slide>Horizontal Slide 3</swiper-slide>
    <swiper-slide>Horizontal Slide 4</swiper-slide>
  </swiper>
</template>

<script>
import Service from "../components/Home/Service.vue";
import Start from "../components/Home/Start.vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
export default {
  components: { Start, Service, Swiper, SwiperSlide },
  name: "Home",
};
</script>
