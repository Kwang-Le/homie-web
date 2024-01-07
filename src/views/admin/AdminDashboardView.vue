<script setup>
import Card from '@/components/Card.vue';
import PieChart from '@/components/charts/PieChart.vue'
import DoughChart from '@/components/charts/DoughChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import DashboardCardChartItem from "@/components/Dashboard/DashboardCardChartItem.vue"
import DashboardCardTableItem from '@/components/Dashboard/DashboardCardTableItem.vue';
import LineChart from '@/components/charts/LineChart.vue';

</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <Card>
          <DashboardCardChartItem title="Dân cư" content="Tổng số 200" :chart="PieChart" />
        </Card>
      </div>
      <div class="col">
        <Card>
          <DashboardCardChartItem title="Căn hộ" content="Tổng số 50" :chart="DoughChart" />
        </Card>
      </div>
      <div class="col">
        <Card>
          <DashboardCardChartItem title="Thu chi" content="100000 vnd" :chart="BarChart" />
        </Card>
      </div>
    </div>
    <div class="row ">
      <div class="col-8 ">
        <Card>
          <h5 class="card-title font-weight-bold">Biến động dân cư</h5>
          <LineChart></LineChart>
        </Card>
      </div>
      <div class="col-4">
        <Card>
          <DashboardCardTableItem :tableData="tableDataFee" title="Các khoản thu mới cập nhật"></DashboardCardTableItem>
        </Card>
        <Card>
          <DashboardCardTableItem :tableData="tableDataResident" title="Biến động hộ dân"></DashboardCardTableItem>
        </Card>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  data() {
    return {
      tableDataFee: [
        { title: "Tiền điện hộ 304", amount: 1000000 },
        { title: "Tiền nước hộ 101", amount: 1000000 },
        { title: "Tiền vệ sinh hộ 205", amount: 1000000 }
      ],
      tableDataResident: [
        { title: "Hộ 102", amount: 1 },
        { title: "Hộ 301", amount: -2 },
        { title: "Hộ 405", amount: -1 }
      ]
    }
  },
  methods: {
     async getData() {
      const response = await fetch("http://example.com/movies.json");
      const movies = await response.json();
      console.log(movies);
    }
  },
  onMounted(){
    // getData()
  }
}
</script>
<style></style>