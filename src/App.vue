<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavigationBar/AdminNavBar.vue';
import LogoAcount from './components/LogoAccount.vue';
</script>


<template>
  <div class="container-fluid">
  <header>
    <div class="wrapper">
      <LogoAcount />
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
