<template>
  <div class="fullpage">
    <transition-group>
      <start />
      <!-- <service /> -->
    </transition-group>
  </div>
</template>

<script>
import Service from '../components/Home/Service.vue';
import Start from '../components/Home/Start.vue';
export default {
  components: { Start, Service },
  name: "Home",
};
</script>
