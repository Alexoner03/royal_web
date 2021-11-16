<template>
  <div class="page flex service">
    <div class="h-full w-full flex relative justify-center items-center">
      <div class="absolute w-full h-full top-0 left-0 z-0 flex flex-col">
        <div class="h-3/5 bg-green-400">
          <img
            class="w-full h-full object-cover object-center"
            :src="require('@/assets/img/teambg.png')"
            alt="fondo de equipo"
          />
        </div>
        <div class="h-2/5 bg-gray-300"></div>
      </div>

      <div class="absolute top-0 left-0 z-0 flex flex-col ml-10 mt-10">
        <span class="font-normal text-white text-2xl">NUESTRO</span>
        <span
          class="
            font-semibold
            text-white text-3xl
            pb-2
            border-b-4
            mb-4
            border-royalorange
          "
          >EQUIPO</span
        >
        <img
          :src="require('@/assets/img/logoHome.gif')"
          alt="logoroyal"
          class="w-20 mx-auto"
        />
      </div>

      <div class="relative z-10 flex justify-between px-8 items-center w-full">
        <button
          @click="navigation(false)"
          class="
            bg-white
            h-12
            w-12
            flex
            justify-center
            items-center
            rounded-full
            hover:text-royalorange
            transition-all
            ease-in
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div class="flex">
          <transition appear name="fade" mode="out-in">
            <div class="flex" v-if="index === 1">
              <team-card
                v-for="member in getArray(1)"
                :key="member.name"
                :member="member"
              />
            </div>
            <div class="flex" v-else-if="index === 2">
              <team-card
                v-for="member in getArray(2)"
                :key="member.name"
                :member="member"
              />
            </div>
            <div class="flex" v-else>
              <team-card
                v-for="member in getArray(3)"
                :key="member.name"
                :member="member"
              />
            </div>
          </transition>
        </div>

        <button
          @click="navigation(true)"
          class="
            bg-white
            h-12
            w-12
            flex
            justify-center
            items-center
            rounded-full
            hover:text-royalorange
            transition-all
            ease-in
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import TeamCard from "../Common/TeamCard.vue";

export default {
  components: { TeamCard },
  name: "TeamPage",
  setup() {
    const team = ref([
      {
        name: "ALEJANDRA JIMENEZ",
        position: "Director Ejecutivo",
        photo: "alejandra.png",
      },
      {
        name: "LORENA MENDOZA",
        position: "Director Ejecutivo",
        photo: "lorena.png",
      },
      {
        name: "SEBASTIAN GUERRERO",
        position: "Diseñador Grafico",
        photo: "sebas.png",
      },
      {
        name: "ISAÍAS RAMOS",
        position: "Diseñador Grafico",
        photo: "isaias.png",
      },
      {
        name: "MIRELY ROQUE SORIANO",
        position: "Directora de Social Media",
        photo: "mirely.png",
      },
      {
        name: "GABRIELA REVAK",
        position: "Interpetre",
        photo: "gabriela.png",
      },
      {
        name: "ALEXANDER ORTIZ",
        position: "Programador web",
        photo: "alexander.png",
      },
    ]);

    const index = ref(1);

    const navigation = (isNext) => {
      if ((index.value === 1 && !isNext) || (index.value === 3 && isNext)) {
        return;
      }

      if (isNext) {
        index.value++;
      } else {
        index.value--;
      }
    };

    const getArray = (value) => {
      switch (value) {
        case 1:
          return team.value.slice(0, 2);
        case 2:
          return team.value.slice(2, 4);
        default:
          return team.value.slice(4, 7);
      }
    };
    return {
      team,
      getArray,
      navigation,
      index,
    };
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transform: scale(1);
  transition: all 1s ease-in-out;
  
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(1.1);
}
</style>
