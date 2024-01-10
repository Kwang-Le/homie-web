<template>
    <nav class="rounded navbar navbar-expand-lg bg-body-tertiary p-1 my-2" style ="border-radius: 15px;">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="px-5 collapse navbar-collapse justify-content-between" id="navbarNav">
    <router-link class="nav-link" to="/res-dashboard" active-class="active">Trang chủ </router-link>
    <router-link class="nav-link" to="/res-pay-fees" active-class="active">Đóng phí </router-link>
    <router-link class="nav-link" to="/res-account" active-class="active">Cá nhân </router-link>
    <router-link class="nav-link" to="/res-declare" active-class="active">Khai báo </router-link>
    <router-link class="nav-link" to="/res-notification" active-class="active">Thông báo</router-link>
    <router-link class="nav-link" to="/admin-setting" active-class="active">Cài đặt</router-link>
  </div>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'ResNavBar',
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
    background: #F1FAEE !important;
    border-radius: 15px !important;
}
.nav-link {
  display: flex;
    justify-content: center;
    align-items: center;
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
  width: 125px;
}
.nav-link:active, .nav-link:focus {
  background-color: #457B9D;
  color: #F1FAEE;
  outline: none;
}
</style>
<script setup>
</script>