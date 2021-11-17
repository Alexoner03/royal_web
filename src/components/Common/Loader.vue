<template>
  <audio id="musicplayer" autoplay>
  <source :src="require('@/assets/sounds/intro.mp3')">
</audio>
</template>

<script>
import { pleaseWait } from "please-wait";
import "please-wait/build/please-wait.css";
export default {
  name: "Loader",
  props: ["isLoading"],
  emits: ['onFinish'],
  watch: {
    isLoading: {
      handler(isLoading) {
        if (isLoading) {
          this.open();
        } else {
          this.close();
        }
      },
      immediate: true,
    },
  },
  methods: {
    open() {
      // Attaching a `pleaseWaitInstance` property (no need to declare)...
      if (!this.pleaseWaitInstance) {
        this.pleaseWaitInstance = pleaseWait({
          logo: require("@/assets/img/logoHome.gif"),
          backgroundColor: "#fff",
        });
      }
    },
    close() {
      if (this.pleaseWaitInstance) {
        this.pleaseWaitInstance.finish();
        this.pleaseWaitInstance = null;
        setTimeout(() => {
          this.$emit('onFinish')
        }, 1000);
      }
    },
  },
};
</script>

<style>
.loading-message {
  color: white;
}
.pg-loading-screen .pg-loading-center-middle {
  width: 100vw;
  height: 100vh;
  display: block !important;
}

.pg-loading-center-middle h1 {
  width: 100vw;
  height: 100vh;
  display: flex !important;
  justify-content: center;
  align-items: center;
}

.pg-loading-center-middle h1 img {
  transform: scale(1.3);
}

.pg-loading-screen.pg-loading .pg-loading-logo-header,
.pg-loading-screen.pg-loading .pg-loading-html:not(.pg-loaded) {
  animation: zoom-out 3s cubic-bezier(0.7, 0, 0.3, 1) both !important;
}

@keyframes zoom-out {
  0% {
    opacity: 0;

background-color: white;
    transform: scale(1.3);
  }
  100% {
    background-color: transparent;
    opacity: 1;
    transform: scale(0.8);
  }
}
</style>
