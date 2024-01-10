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
                <label class="fee-status">Trạng thái:</label>
            </div>
            <div class="col-4">
                <div class="row radios">
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
                <textarea v-model="fee.idNum" class="text-input" type="text"
                    placeholder="Tổ chức trung thu cho các cháu thiếu nhi"></textarea>
            </div>

        </div>

        <div class="row">
            <div class="col-4">
                <label>Thời gian mở - đóng</label>
            </div>
            <div class="col-8">
                <div class="row">
                    <div class="col-6">
                        <input v-model="fee.openDate" type="date">
                    </div>

                    <!-- <div class="col-2"></div> -->

                    <div class="col-6">
                        <input v-model="fee.closeDate" type="date">
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
  
<style scoped>
.row {
    margin-bottom: 20px;
}


label {
    color: var(--main-secondary);
    letter-spacing: -0.48px;
    white-space: nowrap;
    font: 700 20px/150% Inter, sans-serif;
    text-align: center;
    /* margin: 24px; */
}

.text-input {
    width: 400px;
    height: 120px;
    border: 1px solid #E0E0E0;
}
</style>