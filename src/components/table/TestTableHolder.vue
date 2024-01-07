<template>
    <div>
      <TableHolder :columns="columns" :rows="rows" />
    </div>
  </template>
  
  <script>
  import TableHolder from './TableHolder.vue';
  
  export default {
    components: {
      TableHolder
    },
    data() {
      return {
        columns: [
          { title: 'Column 1' },
          { title: 'Column 2' },
          { title: 'Column 3' }
        ],
        rows: [
          ['Row 1 Cell 1', 'Row 1 Cell 2', 'Row 1 Cell 3'],
          ['Row 2 Cell 1', 'Row 2 Cell 2', 'Row 2 Cell 3'],
          ['Row 3 Cell 1', 'Row 3 Cell 2', 'Row 3 Cell 3']
        ]
      }
    }
  }
  </script>