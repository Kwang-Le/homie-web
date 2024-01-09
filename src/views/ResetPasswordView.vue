<template>
    <div class="login-view d-flex align-items-center justify-content-around">
        <!-- <div class="image" style="background-image: ;"></div> -->
        <img src="../assets/img/logo.png" alt="" style="height: 250px;margin-right: 20px;border-radius: 50%;">
        <div class="input-container flex-fill">
            <h1 class="login-title">Đặt lại mật khẩu</h1>
            <div>
                <!-- <label style="width: 100%;">Điền mã xác nhận gửi đến email để đặt lại mật khẩu</label> -->
                <div class="input-field">
                    <div>Mật khẩu mới:</div>
                    <input type="password" id="new-password" class="form-control" required>
                </div>
                <div class="input-field">
                    <div>Xác nhận mật khẩu:</div>
                    <input type="password" id="confirm-password" class="form-control" required>
                </div>
                <button class="new-button" @click="$router.push('/login')">Xác nhận</button>
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
