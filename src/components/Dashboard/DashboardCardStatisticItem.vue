<template>
    <div class="d-flex flex-column">
        <h5 class="card-title font-weight-bold">{{ title }}</h5>
        <div class="d-flex flex-column card-text">
            <p>{{ content }}</p>
        </div>
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
.card-text p {
    color: #457B9D;
    font-size: 30px;
    font-family: Raleway;
    font-weight: 600;
    word-wrap: break-word;
    margin: auto;
    margin-bottom: 1.5rem;
}
</style>