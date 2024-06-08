import Button from 'primevue/button';
<template>
  <div class="container">
    <h1 class="title">1 de 3: Selecciona tu avatar</h1>
    <div class="listaAvatares">
      <button :class="{ seleccionado: avatarSeleccionado === avatarList[0] }"
        @click=" seleccionarAvatar(avatarList[0])"><img src="../src/components/avatars/Avatar1.png" alt=""></button>
      <button :class="{ seleccionado: avatarSeleccionado === avatarList[1] }"
        @click="seleccionarAvatar(avatarList[1])"><img src="../src/components/avatars/Avatar2.png" alt=""></button>
      <button :class="{ seleccionado: avatarSeleccionado === avatarList[2] }"
        @click="seleccionarAvatar(avatarList[2])"><img src="../src/components/avatars/Avatar3.png" alt=""></button>
      <button :class="{ seleccionado: avatarSeleccionado === avatarList[3] }"
        @click="seleccionarAvatar(avatarList[3])"><img src="../src/components/avatars/Avatar4.png" alt=""></button>
      <button :class="{ seleccionado: avatarSeleccionado === avatarList[4] }"
        @click="seleccionarAvatar(avatarList[4])"><img src="../src/components/avatars/Avatar5.png" alt=""></button>
    </div>

    <Button label="Submit" class="start-button" @click="onStartClick">Siguiente</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatarList: ["avatar1", "avatar2", "avatar3", "avatar4", "avatar5"],
      name: 'AvatarSelection',
      seleccionado: false,
      avatarSeleccionado: "",
    }
  },
  methods: {
    onStartClick() {
      console.log("Avatar seleccionado: " + this.avatarSeleccionado);
      console.log("Pasando a siguiente componente");
    },
    seleccionarAvatar(avatar) {
      this.avatarSeleccionado = avatar;
      console.log(this.avatarSeleccionado);
      // crear un borde al boton del avatar seleccionado


    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 25px;
}

.listaAvatares {
  display: flex;
  gap: 15px;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}



.start-button:hover {
  background-color: #f1e0d1;
  color: #cda582;
}

.seleccionado {
  border: 4px solid orange;
}
</style>