<template>
    <nav class="rounded navbar navbar-expand-lg bg-body-tertiary p-1 my-2">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="px-5 collapse navbar-collapse justify-content-between" id="navbarNav">
              <router-link class="nav-link" :class="{ active: activeLink === 'dashboard' }" to="/admin-dashboard" @click="setActiveLink('general')">Trang chủ </router-link>
              <router-link class="nav-link" :class="{ active: activeLink === 'account' }" to="/admin-account" @click="setActiveLink('general')">Tài khoản </router-link>
              <router-link class="nav-link" :class="{ active: activeLink === 'apartment' }" to="/admin-apartment" @click="setActiveLink('general')">Căn hộ </router-link>
              <router-link class="nav-link" :class="{ active: activeLink === 'resident' }" to="/admin-resident" @click="setActiveLink('general')">Cư dân </router-link>
              <router-link class="nav-link" :class="{ active: activeLink === 'revenue' }" to="/admin-revenue" @click="setActiveLink('general')">Khoản thu </router-link>
              <router-link class="nav-link" :class="{ active: activeLink === 'statistical' }" to="/admin-statistical-" @click="setActiveLink('general')">Thống kê </router-link>
              <router-link class="nav-link" :class="{ active: activeLink === 'notification' }" to="/admin-notification" @click="setActiveLink('general')">Thông báo</router-link>
              <router-link class="nav-link" to="/admin-setting">Cài đặt</router-link>


            </div>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'AdminNavBar',
  data() {
    return {
      activeLink: 'dashboard' // Mặc định nav-link "Trang chủ" sẽ được chọn
    }
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link; // Thay đổi nav-link được chọn khi người dùng click vào một nav-link khác
    }
  }
}
</script>
<style scoped>
.navbar {
    background: #F1FAEE;
    border-radius: 15px;
}
.nav-link {
  display: flex;
  padding: 10px;
  color: #1D3557;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 20px;
  border-radius: 15px;
}
.nav-link.active {
  background-color: #457B9D;
  color: #F1FAEE;
}
.nav-link:active, .nav-link:focus {
  background-color: #457B9D;
  color: #F1FAEE;
  outline: none;
}
</style>
<script setup>
</script>