<script setup>
import FeeProfile from '@/components/Profile/FeeProfile.vue';
import ExtraFeesList from '@/components/Profile/ExtraFeesList.vue';
</script>

<template>
    <main>
        <div class="row">
            <div class="col-8">
                <FeeProfile></FeeProfile> <!-- TODO -->
            </div>
            <div class="col-4">
                <h4 class="card-title">Các khoản khác</h4> 
                <ExtraFeesList />
            </div>
        </div>
    </main>
</template>

<style scoped>
.card-title {
    text-align: center;
    font: 700 30px/150% Inter, sans-serif;
    color: var(--main-secondary);
}
</style>