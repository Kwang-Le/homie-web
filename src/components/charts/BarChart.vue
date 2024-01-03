<template>
    <Bar :style="myStyles" :data="chartData" :options="chartOptions" />
</template>
  
<script setup>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


</script>

<script>
export default {
    component: {
        Bar
    },
    data() {
        return {
            chartData: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ],
                datasets: [
                    {
                        label: '2023',
                        backgroundColor: '#f87979',
                        data: [
                            10,
                            12,
                            24,
                            50,
                            60,
                            33,
                            30,
                            27,
                            26,
                            15,
                            10,
                            7
                        ]
                    }
                ]
            },
            chartOptions: {
                responsive: false,
                // plugins: {
                //     legend: {
                //         display: false
                //     }
                // },
                scales: {
                    x: {
                        ticks: {
                            display: false
                        }
                    }
                }
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
  