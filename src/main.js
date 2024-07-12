import "./assets/main.css";
import "primevue/resources/themes/aura-light-amber/theme.css";
import { createPinia } from "pinia"


import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrash, faEdit, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";

import ProgressSpinner from 'primevue/progressspinner';


import { createWebHistory, createRouter } from "vue-router";

import Landing from "./components/Landing.vue";
import Info from "./components/Info.vue";
import main from "./components/main.vue";
import Avatar from "./components/Avatar.vue";

import App from "./App.vue";

const pinia = createPinia()

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
  history: createWebHistory(),
  routes,
});

// Añadir los elementos de PrimeVue aqui enlanzandolos con un  '.'
library.add(faHandHoldingHeart, faTrash, faEdit);

createApp(App)
  .use(PrimeVue)
  .use(router)
  .use(pinia)
  .component("Button", Button)
  .component("Dialog", Dialog)
  .component("Dropdown", Dropdown)
  .component("Textarea", Textarea)
  .component("Card", Card)
  .component("InputText", InputText)
  .component("Calendar", Calendar)
  .component("ProgressSpinner", ProgressSpinner)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount("#app");
