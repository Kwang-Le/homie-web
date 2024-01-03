<template>
    <Doughnut id="my-chart-id" :style="myStyles" :data="chartData" :options="chartOptions" />
</template>
  
<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    components: {
        Doughnut
    },
    data() {
        return {
            chartData: {
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
                        data: [40, 20, 80]
                    }
                ]
            },
            chartOptions: {
                responsive: false
            }
        }
    },
    computed: {
        myStyles() {
            return {
                height: `100px`,
                position: 'relative'
            }
        }
    }
}
</script>
  