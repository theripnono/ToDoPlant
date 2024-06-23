<template>
  <div class="container">
    <div class="tareas">
      <div>
        <h2>To Do list</h2>
      </div>
      <div>
        <Button label="Primary" @click="visible = true">Crear tarea</Button>
      </div>

      <!-- Lista de Tareas en tarjetas -->
      <div class="tareas-lista">
        <h3>Tareas Actuales:</h3>
        <TaskCard v-for="(tarea, index) in tareas" :key="tarea.nombreTarea" :tarea="tarea"
          @delete="borrarTarea(index)" />
      </div>

      <div class="avatar-container">
        <img src="@/components/avatars/Avatar1.png" alt="Icono avatar" class="avatar">
      </div>

      <!--IMAGENES-->
      <div class="granja-container">
        <img src="@/components/imgs/farm/gallinero.png" alt="Icono granja" class="granja">
      </div>

      <div class="tronko-container">
        <img src="@/components/imgs/farm/tronko.png" alt="arbol fruta" class="tronko">
      </div>

      <div class="arbol-container">
        <img src="@/components/imgs/farm/arbol_fruta.png" alt="arbol" class="arbol">
      </div>

      <!-- Modal para crear tarea -->
      <TaskCreationModal :visible="visible" :categorias="categorias" @update:visible="visible = $event"
        @create-task="agregarTarea" />

      <!-- Modal de confirmación para eliminar tarea -->
      <ConfirmationModal :visible="confirmVisible" @update:visible="handleVisibilityChange" @confirm="confirmDelete" />
    </div>

    <div class="background-campo">
      <div class="borde-campo"></div>
      <div class="campo">
        <div v-for="(parcela, index) in Array(20)" :key="index" class="parcela" :style="estiloParcela(index)"></div>
      </div>
      <div class="numTareas">
        <p>Tus tareas: {{ tareas.length }}</p>
        <div v-if="error" class="error-container">
          <p class="error-message">{{ error }}</p>
          <button @click="limpiarError" class="ok-button">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmationModal from './ConfirmationModal.vue';
import TaskCard from './TaskCard.vue';
import TaskCreationModal from './TaskCreationModal.vue';


export default {
  components: {
    ConfirmationModal,
    TaskCard,
    TaskCreationModal
  },
  data() {
    return {
      tareas: [],
      visible: false,
      nuevaTarea: { nombreTarea: '', categoriaTarea: '', fecha: '' },
      error: '',
      categorias: [
        { name: 'Personal', code: 'cat01' },
        { name: 'Trabajo', code: 'cat02' },
        { name: 'Hogar', code: 'cat03' },
        { name: 'Estudio', code: 'cat04' },
        { name: 'Otro', code: 'cat05' }
      ],
      confirmVisible: false,
      deleteIndex: null,
    };
  },
  methods: {
    agregarTarea(task) {
      if (this.tareas.length < 20) {
        this.tareas.push(task);
        this.visible = false;
      } else {
        this.error = 'No puedes crear más tareas. El máximo es 20.';
      }
    },
    borrarTarea(index) {
      this.deleteIndex = index;
      this.confirmVisible = true;
    },
    confirmDelete() {
      this.tareas.splice(this.deleteIndex, 1);
      this.confirmVisible = false;
      this.deleteIndex = null;
    },
    handleVisibilityChange(newValue) {
      this.confirmVisible = newValue;
    },
    estiloParcela(index) {
      const imagenParcela = this.tareas.length > index ? '../src/components/imgs/germinada.png' : '../src/components/imgs/parcela.png';
      return {
        backgroundImage: `url(${imagenParcela})`,
      };
    },
    checkNumTareas() {
      if (this.tareas.length > 20) {
        this.error = 'No puedes crear más tareas. El máximo es 20.';
      } else {
        this.error = '';
      }
    },
    limpiarError() {
      this.error = '';
    }
  },
};
</script>

<style>
.error-message {
  color: red;
  font-weight: bold;
}

.ok-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
}

.ok-button:hover {
  background-color: #d32f2f;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.tareas {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
}

.tareas h2,
button {
  margin-left: 50px;
}

.avatar-container {
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-bottom: 30px;
  margin-left: 50px;
}

.avatar {
  width: 50px;
}

.background-campo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #C0D470;
  background-image: url("@/components/imgs/farm/grass.png");
  background-size: 100px;
  background-repeat: repeat;
  height: 100vh;
  width: 50%;
}

.numTareas p {
  display: flex;
  color: white;
}

.campo {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
  width: 200px;
}

.parcela {
  width: 40px;
  height: 40px;
  background-size: cover;
}

.borde-campo {
  background-image: url("../src/components/imgs/image 3.png");
}

.granja-container {
  position: absolute;
  top: 70px;
  right: 250px;
}

.granja {
  width: 100px;
  height: 100px;
}

.arbol-container {
  position: absolute;
  top: 50px;
  right: 100px;
}

.arbol {
  width: 150px;
  height: 150px;
}

.tronko-container {
  position: absolute;
  top: 500px;
  right: 100px;
}

.tronko {
  width: 100px;
  height: 100px;
}

.card {
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
}

.card-header {
  font-weight: bold;
}

.card-body p {
  margin: 5px 0;
}
</style>