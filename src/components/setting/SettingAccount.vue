<script>
import { ref } from 'vue';
import AdminChangePasswordSuccess from '@/components/Notification/AdminChangePasswordSuccess.vue';
import AdminChangePasswordError1 from '@/components/Notification/AdminChangePasswordError1.vue';
import AdminChangePasswordError2 from '@/components/Notification/AdminChangePasswordError2.vue';

export default {
    name: 'ChangePasswordPage',
    components: {
        'admin-change-password-success': AdminChangePasswordSuccess,
        'admin-change-password-error1': AdminChangePasswordError1,
        'admin-change-password-error2': AdminChangePasswordError2
    },
    data() {
        return {
            newPassword: '',
            newPasswordAgain: '',
            showSuccess: false,
            showError1: false,
            showError2: false
        }
    },
    methods: { 
        checkPassword() {
            if (!this.currentPassword || !this.newPassword || !this.newPasswordAgain) {
                this.showError2 = true;
                this.showError1 = false;
                this.showSuccess = false;
                setTimeout(() => {
                    this.showError2 = false;
                }, 3000);
            } else if (this.newPassword === this.newPasswordAgain) {
                this.showSuccess = true;
                this.showError1 = false;
                this.showError2 = false;
                setTimeout(() => {
                    this.showSuccess = false;
                }, 3000);
            } else {
                this.showError1 = true;
                this.showSuccess = false;
                this.showError2 = false;
                setTimeout(() => {
                    this.showError1 = false;
                }, 3000);
            }
        },
        resetFields() {
            this.currentPassword = '';
            this.newPassword = '';
            this.newPasswordAgain = '';
        }
    }
    // ...
}




</script>
<template>
    <div class="change-password-page">
        <div class="notification-container">
        <admin-change-password-success v-if="showSuccess"></admin-change-password-success>
        <admin-change-password-error1 v-if="showError1"></admin-change-password-error1>
        <admin-change-password-error2 v-if="showError2"></admin-change-password-error2>
        </div>
        <h1 class="title">Thay đổi mật khẩu</h1>
        <form>
            <div class="input-group">
                <label for="current-password">Mật khẩu hiện tại</label>
                <input v-model="currentPassword" id="current-password" type="password" placeholder="Nhập mật khẩu hiện tại">
            </div>
        </form>
        <form>
            <div class="input-group">
                <label for="new-password">Mật khẩu mới</label>
                <input v-model="newPassword" id="new-password" type="password" placeholder="Nhập mật khẩu mới">
            </div>
        </form>
        <form>
            <div class="input-group">
                <label for="new-password-again">Nhập lại mật khẩu</label>
                <input v-model="newPasswordAgain" id="new-password-again" type="password" placeholder="Nhập lại mật khẩu mới">
            </div>
        </form>
    <div style="width: 100%;">
        <button class="btn-accept" @click="checkPassword">Xác nhận</button>
        <button class="btn-cancel" @click="resetFields">Hủy</button>
    
    </div>
    </div>
</template>
  

  
<style scoped>
.notification-container {
    position: fixed;
    top: 132px;
    right: 50%;
    transform: translateX(50%);
}
.change-password-page {
    display: flex;
    flex-direction: column;
    align-items: start;
}

h1 {
    margin-bottom: 20px;
    color: var(--Primary-Base-Black, var(--Primary-Base-Black, #000));
    font-family: Raleway;
    font-size: 200%;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    /* 41.6px */
    letter-spacing: -0.64px;
    margin-bottom: 60px;
}

form {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}

label {
    margin-bottom: 10px;
    color: var(--Secondary, #1D3557);
    font-family: Raleway;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    /* 133.333% */
    width: 300px;
}

input {
    margin-bottom: 20px;
    display: flex;
    font-size: 20px;
    height: 32px;
    width: 300px;
    /* padding: 13.28px 17.707px; */
    align-items: flex-start;
    gap: 13.28px;
    align-self: stretch;
    margin-left: 50px;
}
.btn-accept {
    width: 240px;
height: 40px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
margin-left: 8%;
    background: var(--Primary-Base-Blue, #457B9D);
    border-radius: 10px;
    color: var(--Primary-Base-White, #fff);
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    /* 115% */
    text-align: center;
    align-items: center;
    text-decoration: none;
    margin-top: 20px;
}
.btn-cancel {
    width: 240px;
height: 40px;
margin-left: 20px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: var(--Primary-Base-Blue, #E63946);
    border-radius: 10px;
    color: var(--Primary-Base-White, #fff);
    font-family: Raleway;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    /* 115% */
    text-align: center;
    align-items: center;
    text-decoration: none;
    margin-top: 20px;
}
</style>