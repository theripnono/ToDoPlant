import "./assets/main.css";
import "primevue/resources/themes/aura-light-amber/theme.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

import App from "./App.vue";

// Añadir los elementos de PrimeVue aqui enlanzandolos con un  '.'
createApp(App).use(PrimeVue).component("Button", Button).mount("#app");
