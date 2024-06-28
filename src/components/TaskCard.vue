<template>
    <Card :style="{ width: '25rem', overflow: 'hidden' }">
        <template #title>{{ tarea.nombreTarea }}</template>
        <template #subtitle><span v-text="tarea.categoriaTarea.name"></span></template>
        <template #content>
            <p class="m-0">
                Día de la tarea: {{ formatDate(tarea.fecha) }}
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1 justify-between">
                <Button label="¡Conseguida!" severity="secondary" outlined class="w-full"></Button>
                <Button label="Editar" class="w-full"><font-awesome-icon :icon="['fas', 'edit']"/></Button>
                <Button label="Borrar" @click="emitDelete" class="w-full" ><font-awesome-icon :icon="['fas', 'trash']" /></Button>
            </div>
        </template>
    </Card>
</template>

<script>
export default {
    props: {
        tarea: {
            type: Object,
            required: true
        }
    },
    methods: {
        formatDate(date) {
            return new Date(date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
        },
        emitDelete() {
            this.$emit('delete', this.tarea);
        }
    }
}
</script>