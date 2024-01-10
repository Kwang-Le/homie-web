<script setup>
// import Card from '@/components/Card.vue';
// import ApartmentProfile from '@/components/Profile/ApartmentProfile.vue';
// import ApartmentResidentItem from '@/components/Profile/ApartmentResidentItem.vue';
import ExtraProfile from '@/components/Profile/Resident/ExtraProfile.vue';
import MainProfile from '@/components/Profile/Resident/MainProfile.vue';
// import ResidentItemList from '@/components/Profile/ResidentItemList.vue';
</script>

<template>
    <main>
        <div class="row">
            <div class="col-8">
                <MainProfile></MainProfile>
            </div>
            <div class="col-4">
                <h4 class="card-title">Nguời sống cùng</h4>
                <ExtraProfile />
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