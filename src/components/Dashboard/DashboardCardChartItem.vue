<template>
        <div class="d-flex justify-content-between">
            <div>
                <h5 class="card-title">{{ title }}</h5>
                <div class="d-flex flex-column card-text">
                    <p>{{ content }}</p>
                    <a href="">chi tiết</a>
                </div>
            </div>
            <component :is="chart"></component>
        </div>
</template>

<script>
export default {
    name: "DashboardCardItem",
    props: {
        title: String,
        content: String,
        chart: Object
    },
};
</script>

<style scoped>
.card-title {
    color: var(--main-secondary);
    font-weight: 900;
}
</style>