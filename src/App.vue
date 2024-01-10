<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavigationBar/AdminNavBar.vue';
import LogoAcount from './components/LogoAccount.vue';
import AdminInfomation from './components/Notification/AdminInfomation.vue';
import { useResidentStore } from '@/stores/resident'
import { useUserStore } from '@/stores/user'
import fetchDataAndStore from '@/services/api'
import FootNote from './components/FootNote.vue';
import ResNavBar from './components/NavigationBar/ResNavBar.vue'
import ManagerNavBar from './components/NavigationBar/ManagerNavBar.vue';
</script>


<template>
  <div class="container-fluid" v-if="isGetData">
    <header>
      <div class="wrapper" v-if="currentPage !== 'login' && currentPage !== 'forgot-password' && currentPage !== 'confirm-code'&& currentPage !== 'reset-password'">
        <LogoAcount v-if="userStore.currentRole == 'admin'" name ="L.N.Đ.Khoa"/>
        <LogoAcount v-if="userStore.currentRole == 'resident'" name ="T.V.Khánh"/>
        <LogoAcount v-if="userStore.currentRole == 'police'" name ="N.N.Ánh"/>
        <LogoAcount v-if="userStore.currentRole == 'manager'" name ="N.Đ.Minh"/>
        <NavBar  v-if="userStore.currentRole == 'admin'"/>
        <ResNavBar  v-if="userStore.currentRole == 'resident'"/>
        <ManagerNavBar  v-if="userStore.currentRole == 'manager'"/>
        <AdminInfomation v-show="(isVisible && (currentPage !== 'login' && currentPage !== 'forgot-password' && currentPage !== 'confirm-code'&& currentPage !== 'reset-password'))" class="noti" />
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->

      </div>
    </header>

    <RouterView />
    <FootNote class="footer" v-if="currentPage !== 'login' && currentPage !== 'forgot-password' && currentPage !== 'confirm-code'&& currentPage !== 'reset-password'" />
  </div>
</template>

<script>
export default {
  components: {
    AdminInfomation
  },
  data() {
    return {
      userStore: useUserStore(),
      isGetData: false,
      isLogIn: null,
      currentRoute: null,
      isVisible: false,
      currentName: null,
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
    checkLogIn() {
      if (this.currentRoute == '/login') {
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
    setInterval(() => {
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
      }, 2000);
    }, 120000);
  },
  computed: {
    currentPage() {
      // Assuming you have a route object provided by Vue Router
      console.log(this.$route)
      return this.$route.name || ''; // Update this based on your route naming
    },
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

body {
  font-size: 15px;
}</style>
