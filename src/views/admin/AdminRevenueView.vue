<script setup>
import Card from '@/components/Card.vue';
import PieChart from '@/components/charts/PieChart.vue'
import DoughChart from '@/components/charts/DoughChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import DashboardCardChartItem from "@/components/Dashboard/DashboardCardChartItem.vue"
import LineChart from '@/components/charts/LineChart.vue';
import AdminResidentStatisticItem from '@/components/Admin/Resident/AdminResidentStatisticItem.vue'
</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <Card>
          <AdminResidentStatisticItem title="Tổng thu phí tháng 11" content="100.000.000 VND" />
        </Card>
      </div>
      <div class="col">
        <Card>
          <AdminResidentStatisticItem title="Tổng thu đóng góp tháng 11" content="50.000.000 VND" />
        </Card>
      </div>
    </div>
    <div class="row ">
      <div class="col-12">
        <Card>
          <h5 class="card-title font-weight-bold">Thống kê thu phí</h5>
          <div class="row">
            <LineChart class="col-8"></LineChart>
            <div class="btn-group d-flex flex-column col-4 justify-content-end">
              <button class="new-button mb-2">
                Tạo khoản phí
              </button>
              <button class="new-button mb-2">
                Tạo khoản đóng góp
              </button>
              <button class="new-button mb-2 confirm">
                Ghi nhận
              </button>
              <button class="new-button detail">
                Thống kê chi tiết
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    async getData() {
      const response = await fetch("http://example.com/movies.json");
      const movies = await response.json();
      console.log(movies);
    }
  },
  onMounted() {
    getData()
  }
}
</script>
<style scoped>
.detail {
  background-color: var(--btn-navigation);
}
.confirm {
  color: var(--fields-text-field);
  background-color: var(--btn-alternative);
}
</style>