<!-- TableRow.vue -->
<template>
  <div class="table-row" @click="$emit('select')" :style="{ 'background-color': selected ? 'gray' : '' }">
    <div v-for="(cell, index) in row" :key="index">
      {{ cell }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    row: Array,
    selected: Boolean
  }
}
</script>

<style scoped>
.table-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.table-row > div {
  flex: 1;
  border: 1px solid black;
  padding: 5px;
  text-align: center;
  border-radius: 8px;
}
</style>