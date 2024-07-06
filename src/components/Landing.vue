<template>
    <div class="container">
        <h1 class="title">¡Bienvenido a tu listado de tareas en formato granero!</h1>
<<<<<<< HEAD

=======
        
>>>>>>> parent of 515cc6e (Merge pull request #11 from theripnono/dvd-branch-Logic)
        <RouterLink to="/avatar" class="start-button">Empezar</RouterLink>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
    methods: {
        onStartClick() {
            console.log("Pasando a siguiente componente");
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}
</style>