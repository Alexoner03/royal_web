<template>
  <div class="page flex service">
    <div class="h-full w-nobar flex relative">
      <next-button />
      Pagina de servicios
    </div>
    <service-bar />
  </div>
</template>

<script>
import ServiceBar from "../Common/ServiceBar.vue";
import NavMenu from "../Common/NavMenu.vue";
import useText from "@/composables/useText";
import NextButton from "../Common/NextButton.vue";

export default {
  components: { ServiceBar, NavMenu, NextButton },
  name: "ServicePage",
  setup() {
    const { messages } = useText();

    return {
      messages,
    };
  },
};
</script>
