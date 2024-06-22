<template>
    <Dialog :visible="visible" modal header="Crear Tarea" :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">Selecciona la categoría de tu tarea:</span>
        <Dropdown v-model="task.categoriaTarea" :options="categorias" optionLabel="name"
            placeholder="Selecciona una categoría" class="w-full md:w-14rem" />
        <div class="flex items-center gap-4 mb-4">
            <label for="nombreTarea" class="font-semibold w-24">Nombre de la tarea:</label>
            <InputText v-model="task.nombreTarea" placeholder="Introduce el nombre de la tarea" />
        </div>
        <div class="flex items-center gap-4 mb-4">
            <label for="fecha" class="font-semibold w-24">Fecha:</label>
            <Calendar v-model="task.fecha" dateFormat="dd/mm/yy" />
        </div>
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancelar" severity="secondary" @click="close"></Button>
            <Button type="button" label="Crear" @click="createTask"></Button>
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