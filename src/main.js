import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import "normalize.css";
// -------- Vuetify only for icons ) ---------
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import icons from "./plugins/vuetify.js";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// -------------------------------------------
import "./assets/bootstrap.min.css";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const vuetify = createVuetify({
  components,
  directives,
  icons,
});

const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(Vue3Toastify, { autoClose: 3000 });
app.use(router).use(pinia).use(vuetify).use(ElementPlus);

app.mount("#app");
