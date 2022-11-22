import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import persistedState from "pinia-plugin-persistedstate";
import router from "./router";

const pinia = createPinia();
pinia.use(persistedState);

createApp(App).use(router).use(pinia).mount("#app");
