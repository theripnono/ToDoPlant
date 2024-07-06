<!--Seleccion de Avatar/pagina 2-->
<template>
    <div class="container">
        <h1 class="title">Selecciona un Avatar:</h1>

        <div class="listaAvatares">
<<<<<<< HEAD
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[0] }"
                @click="seleccionarAvatar(avatarList[0])"><img src="@/components/avatars/Avatar1.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[1] }"
                @click="seleccionarAvatar(avatarList[1])"><img src="@/components/avatars/Avatar2.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[2] }"
                @click="seleccionarAvatar(avatarList[2])"><img src="@/components/avatars/Avatar3.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[3] }"
                @click="seleccionarAvatar(avatarList[3])"><img src="@/components/avatars/Avatar4.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[4] }"
                @click="seleccionarAvatar(avatarList[4])"><img src="@/components/avatars/Avatar5.png" alt=""></button>
=======
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[0]}" style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[0])"><img src="/imgs/avatars/Avatar1.png" alt="avatar 1"></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[1] }" style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[1])"><img src="/imgs/avatars/Avatar2.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[2] }" style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[2])"><img src="/imgs/avatars/Avatar3.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[3] }" style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[3])"><img src="/imgs/avatars/Avatar4.png" alt=""></button>
            <button :class="{ seleccionado: avatarSeleccionado === avatarList[4] }" style="background-color: white; border-radius: 5px; border:none"
                @click="seleccionarAvatar(avatarList[4])"><img src="/imgs/avatars/Avatar5.png" alt=""></button>
>>>>>>> 88141e30b4351cdff1fbb8cabd9c5735c5f5154f
        </div>

<<<<<<< HEAD

=======
        
>>>>>>> parent of 515cc6e (Merge pull request #11 from theripnono/dvd-branch-Logic)

        <RouterLink v-if="avatarSeleccionado" to="/info" class="start-button">Siguiente</RouterLink>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            avatarList: ["avatar1", "avatar2", "avatar3", "avatar4", "avatar5"],
            avatarSeleccionado: "",
            errorMessage: ""
        }
    },
    methods: {
        seleccionarAvatar(avatar) {
            this.avatarSeleccionado = avatar;
<<<<<<< HEAD
            this.errorMessage = ""; // Clear error message when an avatar is selected
=======
            this.selectedAvatarStore.setAvatar(avatar)
>>>>>>> 88141e30b4351cdff1fbb8cabd9c5735c5f5154f
        },
        handleNextClick() {
            if (!this.avatarSeleccionado) {
                this.errorMessage = "Con lo monos que son... no entiendo como no escoges uno";
            } else {
                this.$router.push('/info');
            }
        }
    }
}
</script>

<style scoped>
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
<<<<<<< HEAD
=======

.avatar{
    position: relative;
    height: 5rem;
    width: 4rem;
}


.avatarMove{
    position: absolute;
    left: 50%;
    top: 75%;
    animation: animation 0.75s ease-in-out infinite;
}

@keyframes animation {
    0%, 100% {
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
>>>>>>> 88141e30b4351cdff1fbb8cabd9c5735c5f5154f
</style>