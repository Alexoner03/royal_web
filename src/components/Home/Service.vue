<template>
  <div class="page flex service">
    <div class="h-full w-nobar flex relative">
      <div class="w-3/12 h-full flex flex-col p-8" data-aos="fade-in">
        <XyzTransition xyz="fade duration-30">
          <h1
            v-if="activeIndex === 1"
            class="
              text-2xl
              ease-in
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
        </XyzTransition>

        <img
          class="w-1/2 mb-8"
          :src="require('@/assets/img/logoHome.gif')"
          alt="logo de Royal businness"
        />
        <div class="position relative">
          <XyzTransitionGroup appear xyz="fade ease-in">
            <p
              v-if="textIndex === 0"
              class="text-justify text-royalblue font-semibold text-sm absolute"
            >
              {{ messages.service.text[textIndex] }}
            </p>
            <p
              v-if="textIndex === 1"
              class="text-justify text-royalblue font-semibold text-sm absolute"
            >
              {{ messages.service.text[textIndex] }}
            </p>
            <p
              v-if="textIndex === 2"
              class="text-justify text-royalblue font-semibold text-sm absolute"
            >
              {{ messages.service.text[textIndex] }}
            </p>
            <p
              v-if="textIndex === 3"
              class="text-justify text-royalblue font-semibold text-sm absolute"
            >
              {{ messages.service.text[textIndex] }}
            </p>
          </XyzTransitionGroup>
        </div>
      </div>
      <div class="w-9/12 h-full">
        <swiper
          class="swiper-v"
          style="width: 100% !important"
          :direction="'vertical'"
          :pagination="{
            clickable: true,
            renderBullet
          }"
        >
          <swiper-slide v-slot="{ isActive }">
            {{ isActive ? setValue(0) : "" }}
            <div class="w-full h-full relative">
              <div class="absolute z-20 bottom-1/4 ml-8">
                <XyzTransition
                  appear
                  xyz="small-25% iterate-1 duration-30 ease-out"
                >
                  <p
                    v-if="activeIndex === 1 && isActive"
                    class="bebas text-8xl text-royalblue"
                  >
                    CREACIÓN DE MARCA
                  </p>
                </XyzTransition>
                <XyzTransition
                  appear
                  xyz="small-25% iterate-1 duration-30 ease-out"
                >
                  <p
                    v-if="activeIndex === 1 && isActive"
                    class="bebas text-9xl text-royalorange pl-20"
                  >
                    BRANDING
                  </p>
                </XyzTransition>
              </div>
              <img
                class="h-full object-fill object-center z-10"
                :src="require('@/assets/img/service_1.png')"
                alt=""
              />
            </div>
          </swiper-slide>
          <swiper-slide v-slot="{ isActive }">
            {{ isActive ? setValue(1) : "" }}
            <div class="w-full h-full relative">
              <div class="absolute z-20 bottom-32 ml-16">
                <XyzTransition
                  appear
                  xyz="small-25% iterate-1 duration-30 ease-out"
                >
                  <p
                    v-if="isActive"
                    class="
                      bebas
                      text-9xl text-royalorange
                      leading-none
                      -mt-16
                      z-0
                    "
                  >
                    CREACIÓN
                  </p>
                </XyzTransition>
                <XyzTransition
                  appear
                  xyz="fade down iterate-1 duration-10 ease-out"
                >
                  <p
                    v-if="isActive"
                    class="
                      bebas
                      text-royalblue
                      pl-16
                      leading-none
                      -mt-16
                      opacity-80
                      z-10
                    "
                    style="font-size: 15rem"
                  >
                    DISEÑO
                  </p>
                </XyzTransition>
                <XyzTransition
                  appear
                  xyz="small-25% iterate-1 duration-30 ease-out"
                >
                  <p
                    v-if="isActive"
                    class="
                      bebas
                      text-9xl text-white
                      pl-80
                      leading-none
                      -mt-24
                      opacity-95
                    "
                  >
                    IMPRESIÓN
                  </p>
                </XyzTransition>
                <XyzTransition
                  appear
                  xyz="fade left iterate-1 duration-10 ease-out"
                >
                  <p
                    v-if="isActive"
                    class="
                      bebas
                      text-9xl text-royalcyan
                      pl-96
                      leading-none
                      -mt-12
                      z-30
                      opacity-95
                    "
                  >
                    PUBLICIDAD
                  </p>
                </XyzTransition>
              </div>
              <img
                class="h-full object-fill object-center z-10"
                :src="require('@/assets/img/service_2.png')"
                alt=""
              />
            </div>
          </swiper-slide>
          <swiper-slide v-slot="{ isActive }">
            {{ isActive ? setValue(2) : "" }}
            <div class="w-full h-full relative">
              <div class="absolute z-20 bottom-40 left-1/4">
                <XyzTransition
                  appear
                  xyz="fade small-25% iterate-1 duration-20 ease-out"
                >
                  <p
                    v-if="isActive"
                    class="bebas text-royalblue leading-none z-0"
                    style="font-size: 12rem"
                  >
                    SOCIAL
                  </p>
                </XyzTransition>
                <XyzTransition
                  appear
                  xyz="fade small-25% iterate-1 duration-20 ease-out"
                >
                  <p
                    v-if="isActive"
                    class="
                      bebas
                      text-royalorange
                      pl-40
                      leading-none
                      z-10
                      -mt-12
                    "
                    style="font-size: 12rem"
                  >
                    MEDIA
                  </p>
                </XyzTransition>
              </div>
              <img
                class="h-full object-fill object-center z-10"
                :src="require('@/assets/img/service_3.png')"
                alt=""
              />
            </div>
          </swiper-slide>
          <swiper-slide v-slot="{ isActive }">
            {{ isActive ? setValue(3) : "" }}
            <div class="w-full h-full relative">
              <div class="absolute z-20 bottom-40 pl-40">
                <XyzTransition
                  appear
                  xyz="fade small-25% iterate-1 duration-20 ease-out"
                >
                  <p
                    v-if="isActive"
                    class="bebas text-royalblue leading-none z-0"
                    style="font-size: 12rem"
                  >
                    DISEÑO
                  </p>
                </XyzTransition>
                <XyzTransition
                  appear
                  xyz="fade small-25% iterate-1 duration-20 ease-out"
                >
                  <p
                    v-if="isActive"
                    class="
                      bebas
                      text-royalorange
                      pl-72
                      leading-none
                      z-10
                      -mt-12
                    "
                    style="font-size: 12rem"
                  >
                    WEB
                  </p>
                </XyzTransition>
              </div>
              <img
                class="h-full object-fill object-center z-10"
                :src="require('@/assets/img/service_4.png')"
                alt=""
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

import useText from "@/composables/useText";
import useSwiper from "@/composables/useSwiper";
import { ref } from "@vue/reactivity";

export default {
  components: { Swiper, SwiperSlide },

  name: "ServicePage",
  setup() {
    const { messages } = useText();
    const { activeIndex } = useSwiper();
    const textIndex = ref(0);

    const setValue = (index) => {
      textIndex.value = index;
      return "";
    };

    const renderBullet = (index, className) => {
        return '<span class=\"' + className + '\">' + (index + 1) + '</span>';
    }

    return {
      messages,
      activeIndex,
      setValue,
      textIndex,
      renderBullet
    };
  },
};
</script>
