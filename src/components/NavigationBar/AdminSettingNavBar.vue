<template>
  <div class="vertical-nav">
    <a class="nav-link" :class="{ active: activeLink === 'general' }" href="#" @click="setActiveLink('general')">Tài khoản</a>
    <a class="nav-link" :class="{ active: activeLink === 'resident' }" href="#" @click="setActiveLink('resident')">Hiển thị</a>
    <a class="nav-link" :class="{ active: activeLink === 'complaint' }" href="#" @click="setActiveLink('complaint')">Đăng xuất</a>
  </div>
</template>

<script>
export default {
  name: 'AdminNotiNavBar',
  data() {
    return {
      activeLink: 'general' // Mặc định nav-link "Thông báo chung" sẽ được chọn
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
.vertical-nav {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 10px;
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
  margin: 10px;
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