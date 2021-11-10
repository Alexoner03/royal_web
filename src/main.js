import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueAnimXyz from '@animxyz/vue3'

import 'swiper/swiper.scss';
import 'swiper/modules/effect-fade/effect-fade.scss'
import "swiper/modules/pagination/pagination.scss"

import '@animxyz/core'
import "./assets/css/tailwind.css";

const app = createApp(App);

app.use(VueAnimXyz)
app.use(router);
app.mount("#app");
