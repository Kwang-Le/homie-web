<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavigationBar/AdminNavBar.vue';
import LogoAcount from './components/LogoAccount.vue';
import AdminInfomation from './components/Notification/AdminInfomation.vue';
import { useResidentStore } from '@/stores/resident'
import fetchDataAndStore from '@/services/api'
import FootNote from './components/FootNote.vue';
</script>


<template>
  <div class="container-fluid" v-if="isGetData">
    <header>
      <div class="wrapper">
        <LogoAcount />
        <NavBar />
        <AdminInfomation v-show="isVisible" class="noti"/>
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
        
      </div>
    </header>

    <RouterView />
    <FootNote class="footer" />
  </div>
</template>

<script>
export default {
  components: {
    AdminInfomation
  },
  data() {
    return {
      isGetData: false,
      isVisible: false
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
    setInterval(() => {
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
      }, 2000);
    }, 6000);
  },
  
}
</script>

<style >

@import './assets/base.css';
.noti {
    position: fixed;
    top: 8px;
    right: 50%;
    transform: translateX(50%);
}
body{font-size: 15px;}
</style>
