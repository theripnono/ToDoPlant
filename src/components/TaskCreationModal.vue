<template>
    <Dialog :visible="visible" modal header="Crear Tarea" :style="{ width: '25rem' }">
        <div class="flex flex-col gap-4">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Selecciona la categoría de tu tarea:</span>
            <Dropdown v-model="task.categoriaTarea" :options="categorias" optionLabel="name" class="w-full" />
            <div class="flex flex-col gap-4">
                <label for="nombreTarea" class="font-semibold w-full">Nombre de la tarea:</label>
                <InputText v-model="task.nombreTarea" placeholder="Introduce el nombre de la tarea" class="w-full" />
            </div>
            <div class="flex flex-col gap-4">
                <label for="fecha" class="font-semibold w-full">Fecha:</label>
                <Calendar v-model="task.fecha" dateFormat="dd/mm/yy" class="w-full" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancelar" severity="secondary" @click="close" class="p-button-outlined" />
                <Button type="button" label="Crear" @click="createTask" class="p-button-primary" />
            </div>
        </div>
    </Dialog>
</template>

<style scoped>
.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.gap-4 {
    gap: 1rem;
}

.w-full {
    width: 100%;
}
</style>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            required: true
        },
        categorias: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            task: {
                nombreTarea: '',
                categoriaTarea: '',
                fecha: ''
            }
        };
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
        },
        createTask() {
            this.$emit('create-task', this.task);
            this.task = { nombreTarea: '', categoriaTarea: '', fecha: '' }; // Reset task after creation
            this.close();
        }
    }
}
</script>