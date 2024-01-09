<script>
import ResNotiNavBar from '@/components/NavigationBar/ResNotiNavBar.vue'
import ResCardListNoti_General from '@/components/List/ResCardListNoti_General.vue'
import ResCardListNoti_Resident from '@/components/List/ResCardListNoti_Resident.vue'
import ResCardListNoti_Complain from '@/components/List/ResCardListNoti_Complain.vue'
import ResSendRequire from '@/views/resident/form/ResSendRequire.vue'
export default {
  components: {
    ResNotiNavBar,
    ResCardListNoti_General,
    ResCardListNoti_Resident,
    ResCardListNoti_Complain,
    ResSendRequire
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
        <ResNotiNavBar @set-active-link="setActiveLink" @new-notification="handleNewNotification" />
      </div>
      <div class="container-fluid">
        <ResSendRequire v-if="showNewNotificationForm" class="overlay"/>
          <div class="list-card-container">
            <ResCardListNoti_General v-if="activeLink === 'general'" />
            <ResCardListNoti_Resident v-if="activeLink === 'resident'" />
            <ResCardListNoti_Complain v-if="activeLink === 'complaint'" />
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
