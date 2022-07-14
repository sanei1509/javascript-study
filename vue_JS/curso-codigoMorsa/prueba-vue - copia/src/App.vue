<script setup>
import { RouterLink, RouterView } from "vue-router";
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

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 10px 40px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  display: flex;
  font-size: 15px;
  height: 50px;
  background: #222;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  padding-top: 10px;
}
</style>
