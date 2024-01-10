<script setup>
import Card from '@/components/Card.vue';
import PieChart from '@/components/charts/PieChart.vue'
import DoughChart from '@/components/charts/DoughChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import DashboardCardChartItem from "@/components/Dashboard/DashboardCardChartItem.vue"
import LineChart from '@/components/charts/LineChart.vue';
import DashboardCardStatisticItem from '@/components/Dashboard/DashboardCardStatisticItem.vue'
import AdminNewApartmentFormView from './form/AdminNewApartmentFormView.vue';
</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <Card>
          <DashboardCardStatisticItem title="Số căn hộ" content="35 căn" />
        </Card>
      </div>
      <div class="col">
        <Card>
          <DashboardCardStatisticItem title="Số căn hộ cho thuê" content="4 căn" />
        </Card>
      </div>
    </div>
    <div class="row ">
      <div class="col-12">
        <Card>
          <h5 class="card-title font-weight-bold">Phân bổ căn hộ</h5>
          <div class="row">
            <div class="col-8">
              <LineChart></LineChart>
            </div>
            <div class="btn-group d-flex flex-column col-4 justify-content-end">
              <button @click="isNewApartmentFormVisible = true" class="new-button mb-2">
                Ghi nhận căn hộ mới
              </button>
              <router-link class="nav-link" to="/admin-statistic" active-class="active">
              <button to="/admin-statistic" class="new-button detail">
                Thống kê chi tiết
              </button>
              </router-link>
            </div>
          </div>
        </Card>
        <AdminNewApartmentFormView v-show="isNewApartmentFormVisible" class="overlay"/>
        </div>
    </div>
  </main>
</template>


<script>

export default {
  data() {
    return {
      isNewApartmentFormVisible: false,
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
.overlay {
  position: fixed;
  top: 0;
  left: 12%;
  
} 
button {
  width: 100%;
  height: 35px;
  font-size: 150%;
}

.detail {
  background-color: var(--btn-navigation);
}
</style>