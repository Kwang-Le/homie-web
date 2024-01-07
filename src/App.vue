<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavigationBar/AdminNavBar.vue';
import LogoAcount from './components/LogoAccount.vue';

import { useResidentStore } from '@/stores/resident'
import fetchDataAndStore from '@/services/api'
</script>


<template>
  <div class="container-fluid" v-if="isGetData">
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

<script>
export default {
  data() {
    return {
      isGetData: false
    }
  },
  methods: {
    getData() {
      console.log("called")
      fetchDataAndStore().then(() => {
        const store = useResidentStore()
        console.log(store.residents[0])
        console.log(store.getCount)
        this.isGetData = true
      })
      return this.isGetData
    }
  },
  mounted() {
    this.isGetData = this.getData()
  }
}
</script>

<style>
@import './assets/base.css';
</style>
