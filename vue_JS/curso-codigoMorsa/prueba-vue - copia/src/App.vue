<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <nav>
    <RouterLink to="/">Prueba</RouterLink>
    <RouterLink to="/about">Acerca de</RouterLink>
    <RouterLink to="/noticias">Noticias</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 20px 40px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  display: flex;
  font-size: 15px;
  height: 40px;
  background: #222;
  justify-content: flex-start;
  align-content: center;
  text-align: center;
  align-items: center;
}
</style>
