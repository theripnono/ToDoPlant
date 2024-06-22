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
          <img src="@/components/avatars/Avatar1.png" alt="Icono avatar" class="avatar">
        </div>

        <!--IMAGENES-->
        <div class="granja-container">
          <img src="@/components/imgs/farm/gallinero.png" alt="Icono granja" class="granja">
        </div>

        <div class="tronko-container">
          <img src="@/components/imgs/farm/tronko.png" alt="arbol fruta" class="tronko">
        </div>

        <div class="grass-container">
          <img src="@/components/imgs/farm/grass.png" alt="grass" class="grass">
        </div>

        <div class="arbol-container">
          <img src="@/components/imgs/farm/arbol_fruta.png" alt="arbol" class="arbol">
        </div>

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
  export default {
    data() {
      return {

        tareas: [{
            nombreTarea:'tarea01',
            categoriaTarea:'cat01',
            fecha:'21/06/2024',
            // id 
        },
        {
            nombreTarea:'tarea02',
            categoriaTarea:'cat02',
            fecha:'21/06/2024',
        },
        {
            nombreTarea:'tarea03',
            categoriaTarea:'cat03',
            fecha:'21/06/2024',
        },
        {
            nombreTarea:'tarea03',
            categoriaTarea:'cat03',
            fecha:'21/06/2024',
        },
    ], // Aquí se almacenarán las tareas
        // parcelas: Array(20).fill(false), // Array para controlar el estado de las parcelas (false: vacía, true: ocupada)
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
        
            // TODO eliminar la futura card
          }
        }
      },
      estiloParcela(index) {
        // Devuelve el estilo de la parcela según si está ocupada o no
        const imagenParcela = this.tareas.length > index ? '../src/components/imgs/germinada.png' : '../src/components/imgs/parcela.png'; // Ajusta las rutas de las imágenes
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
    background-color: #C0D470;
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
  position: absolute; /* Posiciona el contenedor de la granja de manera absoluta */
  top: 70px; /* Ajusta la posición superior según sea necesario */
  right: 250px; 
  /* Ajusta la posición izquierda según sea necesario */
  }
  .granja {
    width: 100px; /* Ajusta el tamaño de la imagen según sea necesario */
    height: 100px; /* Ajusta el tamaño de la imagen según sea necesario */
  }

  .arbol-container {
  position: absolute; /* Posiciona el contenedor de la granja de manera absoluta */
  top: 50px; 
  right: 100px; 

  }
  .arbol {
    width: 150px;
    height: 150px; 
  }
  .tronko-container {
  position: absolute; /* Posiciona el contenedor de la granja de manera absoluta */
  top: 500px; 
  right: 100px; 

  }
  .tronko {
    width: 100px;
    height: 100px; 
  }
  .grass-container {
  position: absolute; /* Posiciona el contenedor de la granja de manera absoluta */
  top: 500px; 
  right: 100px; 

  }
  .grass {
    width: 150px;
    height: 150px; 
  }

  </style>
  