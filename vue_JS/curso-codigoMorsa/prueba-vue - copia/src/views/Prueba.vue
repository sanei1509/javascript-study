<script setup>
import Saludo from "@/components/Saludo.vue";
</script>

<template>
  <div class="prueba">
    <Saludo></Saludo>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
  }

  h1 {
    color: white;
  }
}
</style>
