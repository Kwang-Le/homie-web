<script setup>
</script>
<template>
    <h5 class="card-title font-weight-bold">Các khoản thu mới cập nhật</h5>
    <div class="d-flex flex-column card-text">
        <div class="table-row d-flex justify-content-between px-4">
            <p>Hello</p>
            <div class="fee-box">1,000,000</div>
        </div>
        <div class="table-row d-flex">Hello</div>
        <div class="table-row d-flex">Hello</div>
    </div>
</template>

<script>
export default {
    name: "DashboardCardTableItem",
    props: {
        title: String,
        content: String,
        chart: Object
    },
};
</script>

<style scoped>
.table-row {
    background-color: var(--btn-alternative);
    height: 20px;
    width: auto;
    border: 1px solid black;
}
.fee-box {
    
}
</style>