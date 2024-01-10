<script setup>
import Card from '@/components/Card.vue';
import PieChart from '@/components/charts/PieChart.vue'
import DoughChart from '@/components/charts/DoughChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import DashboardCardChartItem from "@/components/Dashboard/DashboardCardChartItem.vue"
import LineChart from '@/components/charts/LineChart.vue';
import DashboardCardStatisticItem from '@/components/Dashboard/DashboardCardStatisticItem.vue'
import AdminNewFeeFormView1 from './form/AdminNewFeeFormView1.vue';
import AdminNewFeeFormView2 from './form/AdminNewFeeFormView2.vue';
</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <Card>
          <DashboardCardStatisticItem title="Tổng thu phí tháng 11" content="100.000.000 VND" />
        </Card>
      </div>
      <div class="col">
        <Card>
          <DashboardCardStatisticItem title="Tổng thu đóng góp tháng 11" content="50.000.000 VND" />
        </Card>
      </div>
    </div>
    <div class="row ">
      <div class="col-12">
        <Card>
          <h5 class="card-title font-weight-bold">Thống kê thu phí</h5>
          <div class="row">
            <div class="col-8">
              <LineChart ></LineChart>
            </div>
            <div class="btn-group d-flex flex-column col-4 justify-content-end">
              <button @click="isNewApartmentFormVisible2 = true" class="new-button mb-2">
                Tạo khoản phí
              </button>
              <button @click="isNewApartmentFormVisible1 = true" class="new-button mb-2">
                Tạo khoản đóng góp
              </button>
              
              <router-link class="nav-link" to="/admin-statistic" active-class="active">
              <button to="/admin-statistic" class="new-button detail">
                Thống kê chi tiết
              </button>
              </router-link>
            </div>
          </div>
        </Card>
        <AdminNewFeeFormView1 v-show="isNewApartmentFormVisible1" class="overlay1"/>
        <AdminNewFeeFormView2 v-show="isNewApartmentFormVisible2" class="overlay2"/>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  data() {
    return {
      isNewApartmentFormVisible1: false,
      isNewApartmentFormVisible2: false,
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
.overlay2 {
  position: fixed;
  top: 0;
  left: 12%;
  
} 
.overlay1 {
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
.confirm {
  color: var(--fields-text-field);
  background-color: var(--btn-alternative);
}
</style>