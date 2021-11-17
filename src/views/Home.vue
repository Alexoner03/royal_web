<template>
  <div class="w-full h-full relative">
    <swiper
      class="mySwiper swiper-h z-20"
      @swiper="onSwiper"
      :speed="1500"
      :mousewheel="true"
      :modules="[Mousewheel, EffectFade]"
    >
      <swiper-slide>
        <start />
      </swiper-slide>
      <swiper-slide>
        <service />
      </swiper-slide>
      <swiper-slide>
        <team />
      </swiper-slide>
      <!-- <swiper-slide>PORTFOLIO PAGE</swiper-slide> -->
      <swiper-slide><contact/></swiper-slide>
    </swiper>
    <XyzTransition xyz="fade right duration-10">
      <service-bar v-if="![2,3,4].includes(activeIndex)" />
    </XyzTransition>
    <next-button />
    <nav-menu :active="activeIndex" />
  </div>
</template>

<script>
import Service from "../components/Home/Service.vue";
import Start from "../components/Home/Start.vue";
import ServiceBar from "../components/Common/ServiceBar.vue";
import NextButton from "../components/Common/NextButton.vue";
import NavMenu from "../components/Common/NavMenu.vue";
import Team from "../components/Home/Team.vue";
import Contact from '../components/Home/Contact.vue';

import useSwiper from "../composables/useSwiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import SwiperCore, { Mousewheel, EffectFade } from "swiper";
SwiperCore.use([Mousewheel, EffectFade]);

export default {
  components: {
    Start,
    Service,
    Swiper,
    SwiperSlide,
    ServiceBar,
    NextButton,
    NavMenu,
    Team,
    Contact,
  },
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
      Mousewheel,
      EffectFade,
    };
  },
};
</script>
