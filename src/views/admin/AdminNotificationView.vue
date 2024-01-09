<script>
import AdminNotiNavBar from '@/components/NavigationBar/AdminNotiNavBar.vue'
import AdminCardListNoti_General from '@/components/List/AdminCardListNoti_General.vue'
import AdminCardListNoti_Resident from '@/components/List/AdminCardListNoti_Resident.vue'
import AdminCardListNoti_Complain from '@/components/List/AdminCardListNoti_Complain.vue'
import AdminNewNotiFormView from '@/views/admin/form/AdminNewNotiFormView.vue'
export default {
  components: {
    AdminNotiNavBar,
    AdminCardListNoti_General,
    AdminCardListNoti_Resident,
    AdminCardListNoti_Complain,
    AdminNewNotiFormView
  },
  data() {
    return {
      activeLink: 'general', // giả sử nút 'general' được chọn mặc định
      showNewNotificationForm: false
    }
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link
    },
    handleNewNotification() {
        this.showNewNotificationForm = true;
    },
    
  }
}
</script>

<template>
  <main>
    <div class="d-flex">
      <div class="noti-nav-bar-container">
        <AdminNotiNavBar @set-active-link="setActiveLink" @new-notification="handleNewNotification" />
      </div>
      <div class="container-fluid">
        <AdminNewNotiFormView v-if="showNewNotificationForm" class="overlay"/>
          <div class="list-card-container">
            <AdminCardListNoti_General v-if="activeLink === 'general'" />
            <AdminCardListNoti_Resident v-if="activeLink === 'resident'" />
            <AdminCardListNoti_Complain v-if="activeLink === 'complaint'" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.overlay {
  position: fixed;
  margin-left: 20%;
  margin-top: 2%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0);
}
.d-flex {
  display: flex;
  height: inherit;
  margin-top: 30px;
  padding: 0px;
}

.d-flex flex-column {
  flex-direction: column;
  height: 10px;
  margin: 0px;
  padding: 0px;
}

.noti-nav-bar-container {
  /* other styles */
  border-right: 4px solid #1D3557;
}


.list-card-container {
  width: 100%;
  height: 800px; 
  position: relative;
  margin-left: 1%;
  margin-top: 30px;
}


</style>
