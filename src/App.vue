<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavigationBar/NavBar.vue';

</script>


<template>
  <div class="container-fluid">
  <header>
    <div class="wrapper">
      <NavBar />

        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
    </div>
  </header>

  <RouterView />
</div>

</template>

<style>
@import './assets/base.css';
</style>
