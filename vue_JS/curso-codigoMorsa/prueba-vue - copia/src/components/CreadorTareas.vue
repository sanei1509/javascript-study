<script>
import tareas from "../mock/inventario.js";
</script>

<template>
  <div class="container">
    <label for="nueva-tarea">Agregar tarea</label>
    <input id="nueva-tarea" type="text" v-model="name" />
    <button type="add">Añadir</button>
  </div>
</template>
