<template>
  <div class="container">
    <div class="tareas">
      <div>
        <h2>To Do list</h2>

      </div>
      <div>
        <Button label="Primary" @click="agregarTarea">Crear tarea</Button>

      </div>
      <div class="avatar-container">
        <img src="../src/components/avatars/Avatar1.png" alt="Icono avatar" class="avatar">
      </div>

    </div>

    <div class="background-campo">

      <div class="campo">
        <div v-for="(parcela, index) in parcelas" :key="index" class="parcela" :style="estiloParcela(index)">
        </div>
      </div>
      <div class="numTareas">
        <p>Tus tareas: {{ tareas.length }}</p>
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
    };
  },
  methods: {
    agregarTarea() {
      this.tareas.push({}); // Añade una nueva tarea (vacía por ahora)

      // Encuentra la primera parcela vacía y márcala como ocupada
      const primeraParcelaVacia = this.parcelas.findIndex(parcela => !parcela);
      if (primeraParcelaVacia !== -1) {
        this.parcelas[primeraParcelaVacia] = true;
      }
    },
    estiloParcela(index) {
      // Devuelve el estilo de la parcela según si está ocupada o no
      const imagenParcela = this.parcelas[index] ? '../src/components/imgs/germinada.png' : '../src/components/imgs/parcela.png'; // Ajusta las rutas de las imágenes
      return {
        backgroundImage: `url(${imagenParcela})`,
      };
    },
  },
};
</script>

<style>
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
  background-color: green;
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
</style>

/*
Explicación:
Data:
tareas: Un array vacío para almacenar las tareas.
parcelas: Un array de 20 elementos, todos inicializados a false, que representan las 20 parcelas. false indica que una
parcela está vacía.
Methods:
agregarTarea():
Añade un objeto vacío al array tareas para representar la nueva tarea.
Usa findIndex para encontrar el índice de la primera parcela con valor false (vacía).
Si se encuentra una parcela vacía, se cambia su valor a true en el array parcelas.
estiloParcela(index):
Recibe el índice de la parcela como argumento.
Construye la URL de la imagen a usar según el valor en parcelas[index].
Devuelve un objeto de estilo con backgroundImage establecido a la URL de la imagen correcta.
Template:
Se utiliza un v-for para iterar sobre el array parcelas.
Se crea un div con la clase "parcela" para cada elemento del array.
Se usa :style="estiloParcela(index)" para aplicar el estilo correcto a cada parcela según su estado.
Para usar este componente:
Asegúrate de tener imágenes llamadas parcela-vacia.png y parcela-germinada.png en la ubicación correcta en tu proyecto.
Importa y registra el componente en tu archivo principal de Vue.
Usa el componente en tu template: <mi-componente-parcelas />
Al hacer clic en el botón "Crear tarea", se añadirá una tarea y la primera parcela vacía cambiará su imagen.
*/