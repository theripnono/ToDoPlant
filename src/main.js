import "./assets/main.css";
import "primevue/resources/themes/aura-light-amber/theme.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import { createMemoryHistory, createRouter } from 'vue-router'

import Landing from "./components/Landing.vue";
import Info from "./components/Info.vue";
import main from "./components/main.vue";
import Avatar from "./components/Avatar.vue";

import App from "./App.vue";

// Crear las rutas
const routes = [
    {
        path: '/', component: Landing
    },
    {
        path: '/avatar', component: Avatar

    },
    {
        path: '/info', component: Info
    },
    {
        path: '/main', component: main
    }
]

const router = createRouter(
    {
        history: createMemoryHistory(),
        routes,
    }
)

// Añadir los elementos de PrimeVue aqui enlanzandolos con un  '.'
createApp(App).use(PrimeVue).use(router).component("Button", Button).mount("#app");

