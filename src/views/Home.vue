<template>
  <div class="w-full h-full relative">
    <swiper
      class="mySwiper swiper-h"
      @swiper="onSwiper"
      :speed="1000"
      :mousewheel="true"
      :modules="[Mousewheel]"
    >
      <swiper-slide>
        <start />
      </swiper-slide>
      <swiper-slide>
        <service />
      </swiper-slide>
      <swiper-slide>Horizontal Slide 3</swiper-slide>
      <swiper-slide>Horizontal Slide 4</swiper-slide>
    </swiper>
    <service-bar />
    <next-button />
    <nav-menu :active="activeIndex"/>
  </div>
</template>

<script>
import Service from "../components/Home/Service.vue";
import Start from "../components/Home/Start.vue";
import useSwiper from "../composables/useSwiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import SwiperCore, { Mousewheel } from "swiper";
import ServiceBar from "../components/Common/ServiceBar.vue";
import NextButton from '../components/Common/NextButton.vue';
import NavMenu from '../components/Common/NavMenu.vue';
SwiperCore.use([Mousewheel]);
export default {
  components: { Start, Service, Swiper, SwiperSlide, ServiceBar, NextButton, NavMenu },
  name: "Home",
  setup() {
    const { setSwiper, activeIndex } = useSwiper();

    const onSwiper = (swiper) => {
      setSwiper(swiper);
    };

    return {
      // EffectFade,
      onSwiper,
      activeIndex,
      Mousewheel
    };
  },
};
</script>
