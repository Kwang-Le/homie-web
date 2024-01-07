<script setup>

</script>

<template>
    <main>
        <div class="row">
            <div class="col-8">
                <FeeProfile></FeeProfile> <!-- TODO -->
            </div>
            <div class="col-4">
                <h4 class="card-title">Các khoản khác</h4> 
                <ExtraFeesList /> <!-- TODO -->
            </div>
        </div>
    </main>
</template>

<style scoped>
.card-title {
    text-align: center;
    font: 30px/150% Raleway, sans-serif;
    color: var(--main-secondary);
}
</style>