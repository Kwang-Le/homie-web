<script setup>
// import Card from '@/components/Card.vue';
// import ApartmentProfile from '@/components/Profile/ApartmentProfile.vue';
// import ApartmentResidentItem from '@/components/Profile/ApartmentResidentItem.vue';
import ExtraProfileCardItem from '@/components/Profile/ExtraProfileCardItem.vue';
import MainResidentProfile from '@/components/Profile/MainResidentProfile.vue';
// import ResidentItemList from '@/components/Profile/ResidentItemList.vue';
</script>

<template>
    <main>
        <div class="row">
            <div class="col-8">
                <MainResidentProfile></MainResidentProfile>
            </div>
            <div class="col-4">
                <h4 class="card-title">Nguời sống cùng</h4>
                <ExtraProfileCardItem />
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