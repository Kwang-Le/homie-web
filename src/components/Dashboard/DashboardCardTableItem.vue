<script setup>
</script>
<template>
    <h5 class="card-title font-weight-bold">{{title}}</h5>
    <div class="d-flex flex-column card-text">
        <div class="table-row d-flex justify-content-between px-4 py-1" v-for="data in tableData">
            <div class="row-title p-1">{{ data.title }}</div>
            <div class="row-amount p-1">{{ data.amount }}</div>
        </div>
        <!-- <div class="table-row d-flex justify-content-between px-4 py-1">
            <div class="row-title p-1">Tiền nước hộ 101</div>
            <div class="row-amount p-1">1,000,000</div>
        </div>
        <div class="table-row d-flex justify-content-between px-4 py-1">
            <div class="row-title p-1">Tiền vệ sinh hộ 205</div>
            <div class="row-amount p-1">1,000,000</div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "DashboardCardTableItem",
    props: {
        title: String,
        tableData: Array
    },
};
</script>

<style scoped>
.table-row {
    background-color: var(--btn-alternative);
    /* height: 20px; */
    width: auto;
    border: 1px solid black;
}
.row-title {
    text-align: center;
    color: black;
}
.row-amount {
    color: white;
    background-color: var(--main-primary);
    font-size: smaller;
    border: 1px solid black;
    border-radius: 8px;
    width: 63px;
    text-align: center;
}
</style>