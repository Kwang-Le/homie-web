<script>
  import TableHeader from './TableHeader.vue';
  import TableRow from './TableRow.vue';

  export default {
    components: {
      TableHeader,
      TableRow
    },
    props: {
      columns: Array,
      rows: Array
    },
    data() {
      return {
        selectedRow: null
      }
    }
  }
</script>
<template>
  <div class="table-holder">
    <TableHeader :columns="columns" />
    <TableRow
      v-for="(row, index) in rows"
      :key="index"
      :row="row"
      :selected="selectedRow === index"
      @select="selectedRow = index"
    />
  </div>
</template>

<style scoped>
.table-holder {
  display: flex;
  flex-direction: column;
}
</style>