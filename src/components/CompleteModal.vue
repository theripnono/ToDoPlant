<template>
    <Dialog :visible="visible" modal header="Finalizar Tarea" :style="{ width: '20rem' }">
        <span>¿Quieres cosechar la tarea?</span>
        <p></p>
        <div class="flex justify-end gap-2 mt-4">
            <Button label="No" @click="close" class="p-button-secondary">No</Button>
            <p></p>
            <Button label="Sí" @click="confirm" class="p-button-primary"></Button>
        </div>
    </Dialog>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        taskId: {
            type: String,
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
            console.log("Completado: ", this.taskId);
            fetch(`https://node-todos.vercel.app/users/pollo/todos/${this.taskId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.$emit('complete', this.taskId);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>