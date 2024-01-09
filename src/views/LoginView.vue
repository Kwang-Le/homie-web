<script setup>
import { useUserStore } from '@/stores/user';
</script>
<template>
    <div class="login-view d-flex align-items-center justify-content-around">
        <!-- <div class="image" style="background-image: ;"></div> -->
        <img src="../assets/img/logo.png" alt="" style="height: 250px;margin-right: 20px;border-radius: 50%;">
        <div class="input-container flex-fill">
            <h1 class="login-title my-4">Đăng nhập</h1>
            <div>
                <div class="d-flex align-items-center role-selector input-field">
                    <label for="role" style="width: 100%;">Đăng nhập với vai trò:</label>
                    <select @change="getSelectedRole($event)" id="role" class="form-select" aria-label="Default select example">
                        <option value="resident">Cư dân</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div class="input-field">
                    <div for="username ">Email:</div>
                    <input type="email" id="username" class="form-control" v-model="username" required>
                </div>
                <div class="input-field">
                    <div for="password">Password:</div>
                    <input @keyup.enter="login" type="password" class="form-control" id="password" v-model="password" required>
                </div>
                <button class="new-button" @click="login">Đăng nhập</button>
                <router-link to="">Quên mật khẩu</router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            role: 'resident',
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Perform login logic here
            // You can use this.username and this.password to access the entered values
            const userStore = useUserStore();
            userStore.authenticate(this.role, this.username, this.password)
            console.log(userStore.users)
            if(userStore.isAuthenticated) {
                this.$router.push('/admin-dashboard')
            } else {
                alert("false user information")
            }
        },
        getSelectedRole(event) {
            this.role = event.target.options[event.target.options.selectedIndex].getAttribute('value');
            console.log(this.role)
        }
    },
};
</script>

<style scoped>
.new-button {
    width: 100%;
    height: 45px;
    margin-bottom: 10px;
}

.input-field {
    margin-bottom: 20px;
}

.login-title {
    font-family: Raleway, sans-serif;

}

.login-view {
    color: var(--text-content);
    max-width: 650px;
    margin: auto;
    padding-top: 10%;
    /* border: 1px solid #ccc; */
    border-radius: 4px;
}
</style>
