<template>
  <ul class="flex flex-col justify-end" data-aos="fade-in">
    <li
      :class="[
        'text-2xl font-medium cursor-pointer hover:text-royalblue hover:opacity-80 transition-all ease-in',
        checkIfbeInPage(item.name) ? 'text-royalblue' : 'text-gray-500 opacity-40',
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
import usePage from "@/composables/usePage";

export default {
  name: "NavMenu",
  setup() {
    const { messages } = useText();
    const { checkIfbeInPage } = usePage()
    return {
      messages,
      checkIfbeInPage
    };
  },
};
</script>
