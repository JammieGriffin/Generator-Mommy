import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";
import { createPinia } from "pinia"
import persistedState from "pinia-plugin-persistedstate"
const pinia = createPinia();
pinia.use(persistedState);


createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');