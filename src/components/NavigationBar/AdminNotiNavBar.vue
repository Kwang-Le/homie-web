<template>
    <div class="vertical-nav">
        <a class="nav-link" :class="{ active: activeLink === 'general' }" href="#" @click="setActiveLink('general')">Thông báo chung</a>
        <a class="nav-link" :class="{ active: activeLink === 'resident' }" href="#" @click="setActiveLink('resident')">Thông báo riêng</a>
        <a class="nav-link" :class="{ active: activeLink === 'complaint' }" href="#" @click="setActiveLink('complaint')">Yêu cầu/kiến nghị</a>
        
    </div>
    <button v-if="activeLink === 'general' || activeLink === 'resident'" class="new-button" @click="emitNewNotificationEvent">Tạo mới</button>
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
        },
        emitNewNotificationEvent() {
        this.$emit('new-notification');
        this.$emit('new-button-clicked');
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
  width: 200px;
  padding: 0;
  font-size: 24px;
  margin: 20px auto;
}
</style>