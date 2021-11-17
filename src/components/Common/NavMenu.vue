<template>
  <ul
    class="absolute bottom-0 left-0 z-50 flex flex-col justify-end ml-8 mb-8"
    data-aos="fade-in"
  >
    <li
      @click="go(index)"
      :class="[
        'text-2xl font-medium cursor-pointer hover:text-royalorange hover:opacity-80 transform hover:scale-105 transition-all ease-in  duration-300',
        active === index ? 
         [3].includes(index) ? 'text-royalorange' : 'text-royalblue' 
         : 'text-gray-500 opacity-40',
      ]"
      v-for="(item, index) in messages.nav"
      :key="index"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
import useText from "@/composables/useText";
import useSwiper from "../../composables/useSwiper";

export default {
  name: "NavMenu",
  props: {
    active: Number,
  },
  setup() {
    const { messages } = useText();
    const { getSwiper } = useSwiper();

    const go = (index) => {
      const swiper = getSwiper();
      swiper.slideTo(index);
    };

    return {
      messages,
      go,
    };
  },
};
</script>
