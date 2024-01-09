<script>
import AdminSettingNavBar from '@/components/NavigationBar/AdminSettingNavBar.vue'
import SettingAccount from '@/components/setting/SettingAccount.vue'
import SettingDisplay from '@/components/setting/SettingDisplay.vue'
import SettingLogOut from '@/components/setting/SettingLogOut.vue'

export default {
  components: {
    AdminSettingNavBar,
    SettingAccount,
    SettingDisplay,
    SettingLogOut
  },
  data() {
    return {
      activeLink: 'general' // giả sử nút 'general' được chọn mặc định
    }
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link
    }
  }
}
</script>
 
<template>
  <main>

    <div class="d-flex">
      <div class="setting-nav-bar-container">
      <AdminSettingNavBar @set-active-link="setActiveLink"></AdminSettingNavBar>
    </div>
    <div class="container-fluid">
          <div class="setting-contents-container">
            <SettingAccount v-if="activeLink === 'general'" />
            <SettingDisplay v-if="activeLink === 'resident'" />
            <SettingLogOut v-if="activeLink === 'complaint'" />
        </div>
      </div>
  </div>
    
  </main>
</template>

<style scoped>
.d-flex {
  display: flex;
  height: inherit;
  margin-top: 30px;
  padding: 0px;
}
.setting-nav-bar-container {
  /* other styles */
  border-right: 4px solid #1D3557;
}
.setting-contents-container {
  width: 100%;
  height: 700px; 
  position: relative;
  margin-left: 5%;
  margin-top: 30px;
}
</style>