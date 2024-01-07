<script setup>
import Card from '@/components/Card.vue';
import PieChart from '@/components/charts/PieChart.vue'
import DoughChart from '@/components/charts/DoughChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import DashboardCardChartItem from "@/components/Dashboard/DashboardCardChartItem.vue"
import LineChart from '@/components/charts/LineChart.vue';
import DashboardCardStatisticItem from '@/components/Dashboard/DashboardCardStatisticItem.vue'

import { useResidentStore } from '@/stores/resident'
import { computed } from "vue";
import fetchDataAndStore from '@/services/api'
</script>

<template>
  <main>
    <div class="row">
      <div class="col">
        <Card>
          <DashboardCardStatisticItem title="Tổng số dân" content="200 người" />
        </Card>
      </div>
      <div class="col">
        <Card>
          <DashboardCardStatisticItem title="Số dân tạm trú" content="18" />
        </Card>
      </div>
      <div class="col">
        <Card>
          <DashboardCardStatisticItem title="Số dân tạm vắng" content="10" />
        </Card>
      </div>
    </div>
    <div class="row ">
      <div class="col-12">
        <Card>
          <h5 class="card-title font-weight-bold">Biến động dân cư</h5>
          <div class="row">
            <div class="col-8">
              <LineChart ></LineChart>
            </div>
            <div class="btn-group d-flex flex-column col-4 justify-content-end">
              <button class="new-button mb-2">
                Ghi nhận cư dân mới
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
      residentStore: useResidentStore(),
      totalResident: 0,
      temporaryStay: 0,
      temporaryLeave: 0
    }
  },
  methods: {
    setData() {
      this.$data.totalResident = this.$data.store.getCount
    }
  },
  onMounted() {
    console.log("mounted")
    this.setData()
  }
}
</script>
<style scoped>
.detail {
  background-color: var(--btn-navigation);
}
</style>