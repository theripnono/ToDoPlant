<template>
    <div class="container">
        <Card style="width: 25rem; overflow: hidden; background-color: beige;">
            <template #header>

                <img class="imageHeader" alt="user header" src="@/components/imgs/card_info.png" />
            </template>
            <template #title>¿Cómo se planta?</template>
            <template #subtitle>Crea una tarea</template>
            <template #content>
                <p class="m-0">
                    Cada vez que crees una nueva tarea, se plantará la tarea.
                </p>
            </template>
        </Card>
        <Card class="delayCard" style="width: 25rem; overflow: hidden; background-color:beige;">
            <template #header>

                <img class="imageHeader" alt="user header" src="@/components/imgs/card_info2.png" />
            </template>
            <template #title>¿Cómo se cosecha?</template>
            <template #subtitle>Termina la tarea</template>
            <template #content>
                <p class="m-0">
                    Cuando termines la tarea, podrás cosechar la planta.
                </p>
            </template>
            <template #footer>
                <div style="text-align: center;" class="flex gap-4">

                    <RouterLink to="/main" class="start-button">¡A plantar!</RouterLink>

                </div>
            </template>
        </Card>
        <div class="avatar-container polloMove">
            <img src="@/components/avatars/Avatar1.png" alt="Icono avatar" class="avatar">
        </div>

        <div class="avatar-container polloMove">
            <img src="@/components/avatars/Avatar1.png" alt="Icono avatar" class="avatar">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: 'info',
        };
    },
    methods: {
        onStartClick() {
            console.log("Pasando a siguiente componente");
        },
    },
};
</script>
<style scoped>
.start-button {
    background-color: #cda582;
    color: white;
    font-size: 24px;
    padding: 1rem 2rem;
    text-decoration: none;
    /* Esto oculta el subrayado */
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.delayCard {
    animation: fadeIn 7s ease-in-out forwards;
    /* Añade esta línea */
    opacity: 0;
    /* Inicia con el botón invisible */
}

@keyframes fadeIn {
    to {
        opacity: 1;
        /* Cambia la opacidad a 1 para hacer el botón visible */
    }
}


.start-button:hover {
    background-color: #f1e0d1;
    color: #cda582;
}

.container {
    display: flex;
    flex-direction: row;
    /* Cambiado de column a row */
    justify-content: space-around;
    /* Añadido para centrar las tarjetas */
    align-items: center;
    height: 100vh;
}

.imageHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
}

.avatar {
    position: relative;
}

.polloMove {
    position: absolute;
    left: 30%;
    bottom: -10;
    animation: pollo-animation 1s ease-in-out infinite;
}

@keyframes pollo-animation {

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

/* Añade 'animation-timing-function' para cada rebote */
.polloMove {
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
}
</style>
