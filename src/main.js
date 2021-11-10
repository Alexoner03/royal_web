import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import DragScroll from "./directives/DragScroll";

import "aos/dist/aos.css";
import 'swiper/swiper.scss';
import 'swiper/modules/effect-fade/effect-fade.scss'
import "./assets/css/tailwind.css";

AOS.init({
    duration: 700, // values from 0 to 3000, with step 50ms
});

const app = createApp(App);

app.directive("dragscroll", DragScroll);
app.use(router);
app.mount("#app");
