<template>
  <div class="vertical-nav">
    <a class="nav-link" :class="{ active: activeLink === 'general' }" href="#" @click="setActiveLink('general')">Tài khoản</a>
    <!-- <a class="nav-link" :class="{ active: activeLink === 'resident' }" href="#" @click="setActiveLink('resident')">Hiển thị</a> -->
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
      this.$emit('set-active-link', link)
    }
  }
}
</script>

<style scoped>
.vertical-nav {
    display: flex;
    flex-direction: column;
    width: 290px;
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
    font-size: 28px;
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
.vertical-nav {
    border-bottom: 2px solid #000; /* Đường kẻ ngang */
    color: #457B9D;
}
.new-button {
    display: block;
    width: 200px;
    padding: 0;
    background-color: #457B9D;
    color: #F1FAEE;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Raleway';
    font-weight: normal;
    font-size: 24px;
    margin: 20px auto;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.new-button:hover {
    background-color: #457B9D;
}
</style>