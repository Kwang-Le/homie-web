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
      <div class="wrapper" v-if="currentPage !== 'login'">
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
      isGetData: false,
      isLogIn: null,
      currentRoute: null
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
    },
    checkLogIn(){
      if (this.currentRoute == '/login'){
        this.isLogIn = true
      } else {
        this.isLogIn = false
      }
    }
  },
  beforeMount() {
    this.checkLogIn()
  },
  mounted() {
    
    this.isGetData = this.getData()
    
  },
  computed: {
    currentPage() {
      // Assuming you have a route object provided by Vue Router
      return this.$route.name || ''; // Update this based on your route naming
    },
  },
}
</script>

<style>
@import './assets/base.css';
</style>
