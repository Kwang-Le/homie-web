<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <div class="wrapper p-4">
      <NavBar />

        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
