<template>
  <div class="h-full w-bar bg-royalblue absolute right-0 top-0 z-50">
    <XyzTransition xyz="down duration-30">
      <div class="flex justify-center h-full w-full" v-if="mounted">
        <span
          class="
            text-white text-5-5rem text-center text-vertical
            select-none
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
    </XyzTransition>
  </div>
</template>

<script>
import useText from "@/composables/useText";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "ServiceBar",
  setup() {
    const { messages } = useText();
    const mounted = ref(false);

    onMounted(() => (mounted.value = true));

    return {
      messages,
      mounted,
    };
  },
};
</script>

<style></style>
