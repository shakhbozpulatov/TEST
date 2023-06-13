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
// -------------------------------------------
import "./assets/bootstrap.min.css";

const vuetify = createVuetify({
  components,
  directives,
  icons,
});

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).use(vuetify);

app.mount("#app");
