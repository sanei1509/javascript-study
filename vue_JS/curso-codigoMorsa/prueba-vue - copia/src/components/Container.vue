<script setup>
import tareas from "../mock/inventario.js";

const tareasCompletadas = tareas.filter((tarea) => !tarea.completed);
const tareasPorHacer = tareas.filter((tarea) => tarea.completed);
</script>

<template>
  <div class="app-container">
    <h2 class="titulo">Todo list app</h2>

    <div class="tareas-container">
      <ul id="tareas-incompletas">
        <li class="tarea-style" v-for="tarea in tareas" :key="tarea.id">
          <input type="checkbox" />
          <label>{{ tarea.name }}</label>
          <button style="float: right">Borrar</button>
        </li>
      </ul>
    </div>
    <div class="tareas-container completadas">
      <h2 class="titulo">Tareas finalizadas</h2>
      <ul id="tareas-incompletas">
        <li class="tarea-style" v-for="tarea in tareas" :key="tarea.id">
          <input type="checkbox" />
          <label>{{ tarea.name }}</label>
          <button style="float: right">Borrar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.titulo {
  margin-top: 10px;
  font-weight: 600;
}

.app-container {
  text-align: center;
  align-items: center;
  align-content: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.tareas-container {
  background-color: transparent;
  width: 400px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 2px 4px 12px hsla(160, 100%, 37%, 0.3);
  padding: 20px 10px;
  margin-top: 20px;
  padding-right: 25px;
  margin-bottom: 20px;
}
.completadas {
  background-color: transparent;

  box-shadow: 2px 5px 12px hsla(160, 100%, 37%, 0.4);
}

li {
  list-style: none;
}

#tareas-incompletas {
  text-align: start;
}

.tarea-style {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 5px;
  border-bottom: 1px solid #333;
}

label {
  float: left;
}

input[type="checkbox"] {
  width: 20px;
}
</style>
