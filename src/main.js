import "./assets/main.css";
import "primevue/resources/themes/aura-light-amber/theme.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";

import { createMemoryHistory, createRouter } from "vue-router";

import Landing from "./components/Landing.vue";
import Info from "./components/Info.vue";
import main from "./components/main.vue";
import Avatar from "./components/Avatar.vue";

import App from "./App.vue";

// Crear las rutas
const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/avatar",
    component: Avatar,
  },
  {
    path: "/info",
    component: Info,
  },
  {
    path: "/main",
    component: main,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

// Añadir los elementos de PrimeVue aqui enlanzandolos con un  '.'
createApp(App)
  .use(PrimeVue)
  .use(router)
  .component("Button", Button)
  .component("Dialog", Dialog)
  .component("Dropdown", Dropdown)
  .component("Textarea", Textarea)
  .component("Card", Card)
  .component("InputText", InputText)
  .component("Calendar", Calendar)
  .mount("#app");
