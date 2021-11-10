import { ref } from "@vue/reactivity";

const swiper = ref(null);
const activeIndex = ref(0);

const useSwiper = () => {

  const setSwiper = (swiperInstance) => {
    swiper.value = swiperInstance;
    swiper.value.on(
      "slideChange",
      () => (activeIndex.value = swiper.value.activeIndex)
    );
  };

  const getSwiper = () => swiper.value;

  return {
    setSwiper,
    getSwiper,
    activeIndex,
  };
};

export default useSwiper;
