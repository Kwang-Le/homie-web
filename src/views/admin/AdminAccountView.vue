<script setup>
// import Card from '@/components/Card.vue';
import ExtraProfileCardItem from '@/components/ExtraProfile/ExtraProfileCardItem.vue';
import MainProfile from '@/components/Profile/MainProfile.vue';
</script>

<template>
  <main>
    <div class="row">
      <div class="col-8">
        <MainProfile></MainProfile>
      </div>
      <div class="col-4">
          <h5 class="card-title font-weight-bold">Người sống cùng</h5>
          <ExtraProfileCardItem />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .h5 {
    text-align: center;
  }
</style>