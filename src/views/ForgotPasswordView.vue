<template>
    <div class="login-view d-flex align-items-center justify-content-around">
        <!-- <div class="image" style="background-image: ;"></div> -->
        <img src="../assets/img/logo.png" alt="" style="height: 250px;margin-right: 20px;border-radius: 50%;">
        <div class="input-container flex-fill">
            <h1 class="login-title">Quên mật khẩu</h1>
            <div>
                <label style="width: 100%;">Nhập email để gửi mã xác nhận</label>
                <div class="input-field">
                    <div for="username ">Email:</div>
                    <input type="email" id="username" class="form-control" required>
                </div>
                <button class="new-button" @click="$router.push('/confirm-code')">Gửi</button>
            </div>
        </div>

    </div>
</template>


<style scoped>
.new-button {
    width: 100%;
    height: 45px;
    margin-bottom: 10px;
}

.input-field {
    margin-bottom: 20px;
    margin-top: 20px;
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
