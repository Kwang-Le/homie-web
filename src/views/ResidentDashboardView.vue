<script setup>
import Card from '@/components/Card.vue';
import PieChart from '@/components/charts/PieChart.vue'
import DoughChart from '@/components/charts/DoughChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import DashboardCardChartItem from "@/components/Dashboard/DashboardCardChartItem.vue"
import DashboardCardTableItem from '@/components/Dashboard/DashboardCardTableItem.vue';
import DashboardCardNotiItem from '@/components/Dashboard/DashboardCardNotiItem.vue';
import LineChart from '@/components/charts/LineChart.vue';

import { useResidentStore } from '@/stores/resident'
import { computed } from "vue";
import fetchDataAndStore from '@/services/api'

</script>

<template>
    <main>
        <div class="row">
            <div class="col">
                <Card>
                    <!-- <DashboardCardChartItem title="Dân cư" :content="`Tổng số ` + totalResident" :chart="PieChart" /> -->
                    <div class="row">
                        <div class="col-8">
                            <h5 class="resident-name title">Trần Vinh Khánh</h5>
                            <p>Chủ hộ B1 - 205</p>
                            <p>0393614358</p>
                            <p>khanh.tv205208@sis.hust.edu.vn</p>
                            <a href="">chi tiết</a>
                        </div>
                        <div class="col-4 avatar-col">
                            <div class="row avt-container">
                                <img src="../assets/img/AccountProfileAvatar.jpg" class="avatar" alt="avatar" />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div class="col">
                <Card>
			<div class="col">
                            <h5 class="resident-name title">Sự kiện</h5>
                            <p>30/11:</p>
                            <p>DNT's ballet showcase</p>
                            <a href="">chi tiết</a>
                        </div>
                        <div class="col">
                            <b-calendar block locale="en-US"></b-calendar>

                        </div>
                    
                </Card>
            </div>
            <div class="col">
                <Card>
		<DashboardCardNotiItem title="Thông báo" :tableData="tableDataNoti">
                    </DashboardCardNotiItem>
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
                    <DashboardCardTableItem :tableData="tableDataFee" title="Phí sinh hoạt">
                    </DashboardCardTableItem>
                </Card>
                <Card>
                    <DashboardCardTableItem :tableData="tableDataResident" title="Đóng góp">
                    </DashboardCardTableItem>
                </Card>
            </div>
        </div>
    </main>
</template>


<script>
export default {
    data() {
        return {
            date: new Date(),
            store: useResidentStore(),
            totalResident: 0,
            totalApartment: 0,
            tableDataNoti: [
                { title: "Quy định tiêm phóng chó dại" },
                { title: "Cẩm nang phòng cháy chữa cháy cho cư dân" },
                { title: "Nâng cấp nhà để xe chung cư" }
            ],
            tableDataFee: [
                { title: "Tiền nước", amount: 1000000 },
                { title: "Phí môi trường", amount: 1000000 },
                { title: "Tiền điện", amount: 1000000 }
            ],
            tableDataResident: [
                { title: "Quỹ khuyến học", amount: 100000 },
                { title: "Quỹ người cao tuổi", amount: 100000 },
                { title: "Quỹ nhân đạo", amount: 150000 }
            ]
        }
    },
    methods: {
        setData() {
            this.$data.totalResident = this.$data.store.getCount
        }
    },
    beforeMount() {
        this.setData()
        console.log("mounted")
        console.log(this.$data.store.residents)

    }
}
</script>
<style scoped>
p {
    margin-bottom: 0;
}
.title {
    color: var(--main-secondary);
    font-weight: 900;
}
.avatar-col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.avt-container {
    /* width: 130px; */
    /* height: 130px; */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}


.avatar {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    max-width: inherit;
    padding: 0;
}
</style>