<script setup>
// import Card from '@/components/Card.vue';
import ExtraProfileCardItem from '@/components/Profile/ExtraProfileCardItem.vue';
import MainProfile from '@/components/Profile/MainProfile.vue';
</script>

<template>
  <main>
    <div class="row">
      <div class="col-8">
        <MainProfile></MainProfile>
      </div>
      <div class="col-4">
          <h4 class="card-title font-weight-bold">Người sống cùng</h4>
          <ExtraProfileCardItem />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .card-title {
    text-align: center;
    
  }
</style>