<template>
  <div class="w-screen h-screen">
    <loading-screen :is-loading="isLoading"></loading-screen>
    <router-view v-if="!isLoading"/>
  </div>
</template>
<script>
import Loader from "@/components/Common/Loader";

export default {
  components: {
    "loading-screen": Loader,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  },
};
</script>
