<template>
  <div class="page flex start">
    <div class="h-full w-nobar flex relative">
      <div class="w-1/2 h-full flex flex-col">
        <div class="w-full h-1/2 p-8">
          <h1
            class="text-4xl font-medium text-royalblue mb-8 select-none"
            data-aos="fade-in"
          >
            {{ messages.start.title }}
          </h1>
          <img
            :src="require(`@/assets/img/logo.gif`)"
            alt="logo de royal business en gif__ revisar barras negras"
            data-aos="fade-up"
            data-aos-duration="3000"
            class="mb-8 w-11/12"
          />
          <h2
            class="text-3xl font-medium text-royalorange text-right w-11/12 select-none"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {{ messages.start.subtitle }}
          </h2>
        </div>
        <div class="w-full h-1/2 p-8 flex">
        </div>
      </div>
      <div class="w-1/2 h-full flex flex-col justify-end">
        <div
          class="h-1/2 pt-8 pl-0 pr-24 text-royalblue text-2xl text-justify select-none"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {{ messages.start.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useText from "@/composables/useText";
import useSwiper from "@/composables/useSwiper";

export default {
  name: "StartPage",
  setup() {
    const { messages } = useText();
    const { activeIndex } = useSwiper();
      
    return {
      messages,
      activeIndex
    };
  },
};
</script>
