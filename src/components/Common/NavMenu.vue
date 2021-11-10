<template>
  <ul
    class="absolute bottom-0 left-0 z-50 flex flex-col justify-end ml-8 mb-8"
    data-aos="fade-in"
  >
    <li
      :class="[
        'text-2xl font-medium cursor-pointer hover:text-royalblue hover:opacity-80 transition-all ease-in  duration-300',
        active === index ? 'text-royalblue' : 'text-gray-500 opacity-40',
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

export default {
  name: "NavMenu",
  props: {
    active: Number,
  },
  setup() {
    const { messages } = useText();
    return {
      messages,
    };
  },
};
</script>
