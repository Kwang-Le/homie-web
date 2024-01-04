<template>
    <div class="table-header">
      <div v-for="(column, index) in columns" :key="index">
        {{ column.title }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      columns: Array
    }
  }
  </script>
  
  <style scoped>
  .table-header {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }
  
  .table-header > div {
    flex: 1;
    font-weight: bold;
    font-style: italic;
    text-align: center;
  }
  </style>