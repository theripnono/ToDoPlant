<!-- Pagina de Bienvenida/Pagina principal -->

<template>
    <div class="container">
        <h1>¡Bienvenido a tu listado de tareas en formato granero!</h1>
        <RouterLink to="/avatar" class="start-button">Empezar</RouterLink>
    </div>
</template>

<script>
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

.start-button {
    background-color: #cda582;
    color: white;
    font-size: 24px;
    text-decoration: none; /* Esto oculta la subrayado */
    padding: 1rem 2rem;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.start-button:hover {
    background-color: #f1e0d1;
    color: #cda582;
}
</style>