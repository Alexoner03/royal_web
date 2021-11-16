<template>
  <div class="w-screen h-screen">
    <loading-screen
      :is-loading="isLoading"
      @on-finish="isOpenRouter = true"
    ></loading-screen>
    <router-view v-slot="{ Component }">
      <XyzTransition appear xyz="fade duration-30 ease-out-back">
        <component :is="Component" v-if="isOpenRouter" />
      </XyzTransition>
    </router-view>
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
      isOpenRouter: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  },
};
</script>
