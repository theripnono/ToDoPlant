import Button from 'primevue/button';
<template>
    <div class="container">
        <h1 class="title">Cada vez que añadas una tarea, una planta empezará a crecer.</h1>
        <img src="@/components/imgs/image 1.png" alt="">
        <RouterLink to="/main" class="start-button">Empezar</RouterLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'info',
        }
    },
    methods: {
        onStartClick() {
            console.log("Pasando a siguiente componente");
        },
    },
}
</script>

<style scoped>
.start-button {
    background-color: #cda582;
    color: white;
    font-size: 24px;
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
}
</style>