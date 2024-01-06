<script setup>
// import Card from '@/components/Card.vue';
import ResidentProfile from '@/components/Profile/ResidentProfile.vue';
import ExtraProfileCardItem from '@/components/Profile/ExtraProfileCardItem.vue';
import AccountProfile from '@/components/Profile/AccountProfile.vue';
</script>

<template>
  <main>
    <div class="row">
      <div class="col-8">
        <AccountProfile></AccountProfile>
      </div>
      <div class="col-4">
          <h4 class="card-title">Người sống cùng</h4>
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