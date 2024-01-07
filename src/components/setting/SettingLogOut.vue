<script setup></script>
<template>
    <div class="log-out-page">
        <h1 class="title">Đăng xuất tài khoản</h1>
        <form>
            <div class="option-group">
                <label for="log-out-label">Xác nhận đăng xuất</label>
                <button type="button" class="btn-confirm">Xác nhận</button>
            </div>
        </form>
        </div>
</template>
<style scoped>
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
    width: auto;
}
.option-group {
    display: flex;
    flex-direction: column;
    
    align-items: center;
    height: 100vh;
}
.btn-confirm {
    width: 240px;
height: 40px;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

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
</style>