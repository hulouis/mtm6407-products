import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // 使用 appRouter

createApp(App).use(router).mount("#app");
