<template>
  <div class="absolute bottom-0 right-0 w-32 h-w-32 mb-8 z-50 nextBtn">
    <img
      class="absolute w-14 left-1/2 top-1/2 transformButton"
      :src="require(`@/assets/img/arrow.png`)"
      alt="flecha de navegación"
    />
    <img
      class="realtive rotation"
      :src="require(`@/assets/img/navigation_message.png`)"
      alt="mensaje de navegación"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
.nextBtn {
  margin-right: calc(7.5vw + 2rem);
}

.transformButton {
  transform: translate(-50%, -50%);
}

.rotation {
    animation: rotation 15s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
