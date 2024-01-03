<template>
    <Pie
    id="my-chart-id"
    :style="myStyles"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'PieChart',
  components: { Pie },
  data() {
    return {
      chartData: {
        // labels: [ 'January', 'February', 'March' ],
        datasets: [ { 
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
          data: [40, 20, 12] 
        } ]
      },
      chartOptions: {
        responsive: false
      }
    }
  },
  computed: {
    myStyles () {
      return {
        height: `100px`,
        position: 'relative'
      }
    }
  }
}
</script>