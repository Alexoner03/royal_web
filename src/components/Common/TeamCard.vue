<template>
  <div class="bg-white p-8 pb-12 max-w-sm mx-6">
    <img
      :src="require(`@/assets/img/${member.photo}`)"
      alt="photo de personal"
      class="mb-4"
    />
    <p class="text-center font-black text-royalblue tracking-wider text-xl">{{ member.name }}</p>
    <p class="text-center text-royalorange tracking-wider">{{ member.position }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    member: Object,
  },
};
</script>

<style></style>
