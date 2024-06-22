<template>
    <Card :style="{ width: '25rem', overflow: 'hidden' }">
        <template #title>{{ tarea.nombreTarea }}</template>
        <template #subtitle>{{ tarea.categoriaTarea }}</template>
        <template #content>
            <p class="m-0">
                Fecha de finalización: {{ tarea.fecha }}
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="¡Conseguida!" severity="secondary" outlined class="w-full" />
                <Button label="Editar" class="w-full" />
                <Button label="Borrar" @click="emitDelete" class="w-full" />
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
        emitDelete() {
            this.$emit('delete', this.tarea);
        }
    }
}
</script>