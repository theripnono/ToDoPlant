<!--Seleccion de Avatar/pagina 2-->
<template>
    <div class="container">
        <h1 class="title">Selecciona un Avatar:</h1>

        <div class="listaAvatares">
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[0] }"
                style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[0])"><img src="/imgs/avatars/Avatar1.png" alt="avatar 1"></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[1] }"
                style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[1])"><img src="/imgs/avatars/Avatar2.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[2] }"
                style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[2])"><img src="/imgs/avatars/Avatar3.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[3] }"
                style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[3])"><img src="/imgs/avatars/Avatar4.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[4] }"
                style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[4])"><img src="/imgs/avatars/Avatar5.png" alt=""></button>
        </div>

        <router-link v-if="avatarSeleccionado" to="/info">
            <Button type="button" label="Siguiente" class="p-button" />
        </router-link>

        <router-link v-if="avatarSeleccionado" to="/">
            <Button type="button" severity="secondary" label="Volver" class="p-button" />
        </router-link>

        <!-- <img :src="selectedAvatarStore.avatar"> -->
        <div class="avatarMove">
            <img :src="`/imgs/avatars/${selectedAvatarStore.avatar}.png`" class="avatar">
        </div>

    </div>

</template>

<script>
import { useSelectedAvatarStore } from "@/stores/selectedAvatar"

export default {
    setup() {
        const selectedAvatarStore = useSelectedAvatarStore()
        return { selectedAvatarStore }
    },
    data() {
        return {
            avatarList: ["Avatar1", "Avatar2", "Avatar3", "Avatar4", "Avatar5"],
            avatarSeleccionado: "",
            errorMessage: "",

        }
    },
    methods: {
        seleccionarAvatar(avatar) {
            this.avatarSeleccionado = avatar;
            this.selectedAvatarStore.setAvatar(avatar)
        },

    }
}
</script>

<style scoped>
.start-button {
    background-color: #cda582;
    color: white;
    font-size: 24px;
    text-decoration: none;
    /* Esto oculta la subrayado */
    padding: 1rem 2rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.start-button:hover {
    background-color: #f1e0d1;
    color: #cda582;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 25px;
}

.listaAvatares {
    display: flex;
    gap: 15px;
    border-radius: 7px;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}



.start-button:hover {
    background-color: #f1e0d1;
    color: #cda582;
}

.seleccionado {
    border: 4px solid orange;
    border-radius: 7px;
}

.avatar {
    position: relative;
    height: 5rem;
    width: 4rem;
}


.avatarMove {
    position: absolute;
    left: 50%;
    top: 75%;
    animation: animation 0.75s ease-in-out infinite;
}

@keyframes animation {

    0%,
    100% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-100%);
    }

    50% {
        transform: translateY(0);
    }

    75% {
        transform: translateY(-50%);

    }

    90% {
        transform: translateY(0);

    }
}
</style>