<template>
    <div class="vertical-nav">
        <a class="nav-link" href="#">Thông báo chung</a>
        <a class="nav-link" href="#">Thông báo cư dân</a>
        <a class="nav-link" href="#">Khiếu nại</a>
    </div>
</template>

<script>
export default {
    name: 'AdminNotiNavBar',
}
</script>

<style scoped>
.vertical-nav {
    display: flex;
    flex-direction: column;
    width: 200px;
    background: #F1FAEE;
}

.nav-link {
    padding: 10px;
    color: black;
    text-decoration: none;
}
</style>