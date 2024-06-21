<template>
  <div class="container">
    <div class="tareas">
      <div>
        <h2>To Do list</h2>
      </div>
      <div>
        <Button label="Primary" @click="agregarTarea">Crear tarea</Button>
        <Button label="Secondary" @click="borrarUltimaTarea">Borrar tarea</Button>

      </div>
      <div class="avatar-container">
        <img src="../src/components/avatars/Avatar1.png" alt="Icono avatar" class="avatar">
      </div>
    </div>

    <div class="background-campo">
      <div class="borde-campo"></div>
      <div class="campo">
        <div v-for="(parcela, index) in parcelas" :key="index" class="parcela" :style="estiloParcela(index)"></div>
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
export default {
  data() {
    return {
      tareas: [], // Aquí se almacenarán las tareas
      parcelas: Array(20).fill(false), // Array para controlar el estado de las parcelas (false: vacía, true: ocupada)
      error: '' // Variable para almacenar el mensaje de error
    };
  },
  methods: {
    agregarTarea() {
      if (this.tareas.length < 20) {
        this.tareas.push({}); // Añade una nueva tarea (vacía por ahora)
        
        // Encuentra la primera parcela vacía y márcala como ocupada
        const primeraParcelaVacia = this.parcelas.findIndex(parcela => !parcela);
        if (primeraParcelaVacia !== -1) {
          this.parcelas[primeraParcelaVacia] = true;
        }
        this.checkNumTareas(); // Verificar el número de tareas después de agregar una nueva
      } else {
        this.error = 'No puedes crear más tareas. El máximo es 20.'; // Establecer el mensaje de error si el límite se ha alcanzado
      }
    },

    borrarUltimaTarea() {
      if (this.tareas.length > 0) {
        this.tareas.pop(); // Elimina la última tarea

        // Encuentra la última parcela ocupada y márcala como vacía
        const ultimaParcelaOcupada = this.parcelas.lastIndexOf(true);
        if (ultimaParcelaOcupada !== -1) {
          this.parcelas[ultimaParcelaOcupada] = false;
        }
      }
    },
    estiloParcela(index) {
      // Devuelve el estilo de la parcela según si está ocupada o no
      const imagenParcela = this.parcelas[index] ? '../src/components/imgs/germinada.png' : '../src/components/imgs/parcela.png'; // Ajusta las rutas de las imágenes
      return {
        backgroundImage: `url(${imagenParcela})`,
      };
    },
    checkNumTareas() {
      if (this.tareas.length > 20) {
        this.error = 'No puedes crear más tareas. El máximo es 20.'; // Establecer el mensaje de error
      } else {
        this.error = ''; // Limpiar el mensaje de error si el número de tareas es menor o igual a 20
      }
    },
    limpiarError() {
      this.error = ''; // Limpiar el mensaje de error cuando se presiona el botón OK
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
.tareas h2 {
  margin-left: 50px;
  margin-top: 50px;
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
  background-color: #85BE8C;
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
</style>
