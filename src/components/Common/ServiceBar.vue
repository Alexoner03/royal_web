<template>
  <div class="h-full w-bar bg-royalblue">
    <div class="flex justify-center h-full w-full" data-aos="fade-up">
      <span
        class="
          text-white text-5-5rem text-center text-vertical
          transform
          rotate-180
          leading-none
          bebas
          spacing-vertical
        "
      >
        {{ messages.serviceMessage }}
      </span>
    </div>
  </div>
</template>

<script>
import useText from "@/composables/useText"

export default {
  name: "ServiceBar",
  setup() {
    const { messages } = useText()
    return {
      messages
    }
  },
};
</script>

<style></style>
