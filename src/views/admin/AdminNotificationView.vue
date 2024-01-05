<script setup>
import Card from '@/components/Card.vue';
import PieChart from '@/components/charts/PieChart.vue'
import DoughChart from '@/components/charts/DoughChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import DashboardCardChartItem from "@/components/Dashboard/DashboardCardChartItem.vue"
import DashboardCardTableItem from '@/components/Dashboard/DashboardCardTableItem.vue';
import LineChart from '@/components/charts/LineChart.vue';
import AdminNotiNavBar from '@/components/NavigationBar/AdminNotiNavBar.vue'
import AdminNotiSearchFilter from '@/components/SearchFilter/AdminNotiSearchFilter.vue'
import CardBox from '@/components/List/CardBox.vue'
</script>

<template>
  <main>
    <div class="d-flex">
      <div class="noti-nav-bar-container">
        <AdminNotiNavBar />
      </div>
      <div class="container-fluid">
        
          <div class="list-card-container">
            <CardBox />
          
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.d-flex {
  display: flex;
  height: inherit;
  margin-top: 30px;
  padding: 0px;
}

.d-flex flex-column {
  flex-direction: column;
  height: 10px;
  margin: 0px;
  padding: 0px;
}

.noti-nav-bar-container {
  /* other styles */
  border-right: 4px solid #1D3557;
}


.list-card-container {
  width: 100%;
  height: 700px; 
  position: relative;
  margin-left: 1%;
  margin-top: 30px;
}


</style>