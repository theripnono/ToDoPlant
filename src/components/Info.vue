import Button from 'primevue/button';
<template>
    <div>
        <Splitter style="height: 100vh" class="mb-8">
            <SplitterPanel class="flex items-center justify-center">
          
                <h2 class="title">Cada vez que crees una tarea, una planta empezará a crecer.</h2>
                <div>
                    <img src="@/components/imgs/germinada.png" alt="semilla">
                </div>           
            </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> 
                <h2 class="title">Cuando la completes... ¡Coséchala!</h2> 
                <RouterLink to="/main" class="start-button">Empezar</RouterLink>
            </SplitterPanel>
        </Splitter>
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
    text-decoration: none; /* Esto oculta la subrayado */
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