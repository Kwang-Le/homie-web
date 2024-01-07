<script setup>
// import Card from '@/components/Card.vue';
import ApartmentProfile from '@/components/Profile/ApartmentProfile.vue';
import ApartmentResidentItem from '@/components/Profile/ApartmentResidentItem.vue';
import ExtraProfileCardItem from '@/components/Profile/ExtraProfileCardItem.vue';
// import AccountProfile from '@/components/Profile/AccountProfile.vue';


</script>

<template>
  <main>
    <div class="row">
      <div class="col-8">
        <ApartmentProfile></ApartmentProfile>
      </div>
      <div class="col-4">
          <h4 class="card-title">Cư dân căn hộ</h4>
          <ApartmentResidentItem />
          <ExtraProfileCardItem />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .card-title {
    text-align: center;
    font: 30px/150% Raleway, sans-serif;
  }
</style>