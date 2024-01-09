<script setup>
import { ref } from 'vue';

let fee = ref({
    status: '',
    description: '',
    openClosedTime: '',
});

const editFee = () => {
    // Handle the form submission here
    console.log(fee.value);
};
</script>

<template>
    <form @submit.prevent="editFee">
        <div class="row">
            <div class="col-4">
                <label>Trạng thái:</label>
            </div>
            <div class="col-4">
                <div class="row">
                    <div class="col-6">
                        <input type="radio" id="open" value="open" v-model="fee.status">
                        <label for="open">Mở</label>
                    </div>
                    <div class="col-6">
                        <input type="radio" id="closed" value="closed" v-model="fee.status">
                        <label for="closed">Đóng</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <label>Mô tả</label>
            </div>
            <div class="col-8">
                <input v-model="resident.idNum" type="text" placeholder="Tổ chức trung thu cho các cháu thiếu nhi"
                    style="width: 200px;">
            </div>

        </div>

        <div class="row">
            <!-- TODO: thời gian mở - đóng -->
        </div>
    </form>
</template>
  
<style scoped>
.status-container {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: space-around;
}
</style>