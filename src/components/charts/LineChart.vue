<template>
    <Line id="my-chart-id" :style="myStyles" :data="chartData" :options="chartOptions" />
</template>
  
<script>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
    components: {
        Line
    },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: '2023',
                        backgroundColor: '#f87979',
                        data: [40, 39, 10, 40, 39, 80, 40]
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
                height: `337px`,
                width: `100%`,
                position: 'relative'
            }
        }
    }
}
</script>
  