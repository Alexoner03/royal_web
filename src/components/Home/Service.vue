<template>
  <div class="page flex service">
    <div class="h-full w-nobar flex relative">
      <div class="w-3/12 h-full flex flex-col p-8">
        <h1
          class="
            text-2xl
            font-semibold
            text-royalblue
            mb-8
            select-none
            leading-none
            w-1/2
          "
        >
          {{ messages.service.title }}
        </h1>
        <img
          class="w-1/2 mb-8"
          :src="require('@/assets/img/logoHome.gif')"
          alt="logo de Royal businness"
        />
        <p class="text-justify text-royalblue font-semibold text-sm">
          {{ messages.service.text }}
        </p>
      </div>
      <div class="w-9/12 h-full">
        <swiper
          class="swiper-v"
          style="width: 100% !important"
          :direction="'vertical'"
        >
          <swiper-slide>
            <img
              class="h-full object-fill object-center"
              :src="require('@/assets/img/service_1.png')"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="h-full object-fill object-center"
              :src="require('@/assets/img/service_2.png')"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="h-full object-fill object-center"
              :src="require('@/assets/img/service_3.png')"
              alt=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="h-full object-fill object-center"
              :src="require('@/assets/img/service_4.png')"
              alt=""
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";

import useText from "@/composables/useText";
import useSwiper from "@/composables/useSwiper";

export default {
  components: { Swiper, SwiperSlide },
  name: "ServicePage",
  setup() {
    const { messages } = useText();
    const { activeIndex } = useSwiper();

    return {
      messages,
      activeIndex,
    };
  },
};
</script>
