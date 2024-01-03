<template>
    <nav class="rounded navbar navbar-expand-lg bg-body-tertiary p-1 my-2">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="px-5 collapse navbar-collapse justify-content-between" id="navbarNav">
                        <router-link class="nav-link active" aria-current="page" to="/admin-dashboard">Trang chủ</router-link>
                        <a class="nav-link" href="#">Căn hộ</a>
                        <a class="nav-link" href="#">Cư dân</a>
                        <a class="nav-link" href="#">Khoản thu</a>
                        <a class="nav-link" href="#">Thống kê</a>
                        <router-link class="nav-link" to="/admin-notification">Thông báo</router-link>
                        <a class="nav-link" href="#">Cài đặt</a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background: #F1FAEE;
}

</style>
<script setup>
</script>