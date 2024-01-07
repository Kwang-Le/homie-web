<script setup>
import { ref } from 'vue';
const currentPassword = ref('');
const newPassword = ref('');
const newPasswordAgain = ref('');

const resetFields = () => {
  currentPassword.value = '';
  newPassword.value = '';
  newPasswordAgain.value = '';
};
</script>
<template>
    <div class="change-password-page">
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
        <button class="btn-accept">Xác nhận</button>
        <button class="btn-cancel" @click="resetFields">Hủy</button>
    </div>
    </div>
</template>
  
<script>
export default {
    name: 'ChangePasswordPage',
}
</script>
  
<style scoped>
.change-password-page {
    display: flex;
    flex-direction: column;
    align-items: start;
}

h1 {
    margin-bottom: 20px;
    color: var(--Primary-Base-Black, var(--Primary-Base-Black, #000));
    font-family: Raleway;
    font-size: 36px;
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