<template>
    <Dialog :visible="visible" modal header="Confirmar Eliminación" :style="{ width: '20rem' }">
        <span>¿Estás seguro de que deseas eliminar esta tarea?</span>
        <div class="flex justify-end gap-2 mt-4">
            <Button label="No" @click="close"></Button>
            <Button label="Sí, eliminar" @click="confirm" class="p-button-danger"></Button>
        </div>
    </Dialog>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
        },
        confirm() {
            this.$emit('confirm');
            this.$emit('update:visible', false);
        }
    }
}
</script>