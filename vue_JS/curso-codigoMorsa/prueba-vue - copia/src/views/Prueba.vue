<script setup>
import Container from "@/components/Container.vue";
</script>

<template>
  <div class="prueba-container">
    <Container></Container>
  </div>
</template>

<style>
.prueba-container {
  margin: 0 auto;
}
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
