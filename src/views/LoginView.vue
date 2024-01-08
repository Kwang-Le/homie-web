<template>
    <div class="login-view">
        <h1 class="login-title my-4">Đăng nhập</h1>
        <div>
            <div class="align-items-center role-selector input-field">
                <label for="role" style="width: 100%;">Đăng nhập với vai trò:</label>
                <select id="role" class="form-select" aria-label="Default select example">
                    <option value="1">Cư dân</option>
                    <option value="2">Admin</option>
                </select>
            </div>
            <div class="input-field">
                <div for="username ">Email:</div>
                <input type="email" id="username" v-model="username" required>
            </div>
            <div class="input-field">
                <div for="password">Password:</div>
                <input type="password" id="password" v-model="password" required>
            </div>
            <button type="submit">Đăng nhập</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Perform login logic here
            // You can use this.username and this.password to access the entered values
        }
    }
};
</script>

<style scoped>
.input-field {
    margin-bottom: 20px;
}
.login-title {
    font-family: Raleway, sans-serif;

}

.login-view {
    color: var(--text-content);
    max-width: 400px;
    margin:  auto;
    padding: 20px;
    /* border: 1px solid #ccc; */
    border-radius: 4px;
}
</style>
