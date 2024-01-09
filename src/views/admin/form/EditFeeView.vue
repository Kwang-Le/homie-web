<script setup>
import { ref } from 'vue';

let fee = ref({
    status: '',
    householder: '',
    floor: '',
    extraResident: '',
});

const editFee = () => {
    // Handle the form submission here
    console.log(fee.value);
};
</script>

<template>
    <form @submit.prevent="editFee">
        <div class="status-container">
            <label>Trạng thái:</label>
            <div>
                <input type="radio" id="open" value="open" v-model="fee.status">
                <label for="open">Mở</label>
            </div>
            <div>
                <input type="radio" id="close" value="close" v-model="fee.status">
                <label for="close">Đóng</label>
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <div class="col-7">

                </div>
            </div>
            <div class="col-7">
                <label>
                    Chủ hộ:
                    <select v-model="fee.householder" style="width: 200px;">
                        <option value="Nguyễn Hàn My">Nguyễn Hàn My</option>
                        <option value="Lê Thanh Quang">Lê Thanh Quang</option>
                    </select>
                </label>
            </div>
        </div>

        <div class="row">
            <div class="col-5">
                <label>
                    Tầng:
                    <select v-model="fee.floor">
                        <!-- <option value="">Chọn căn hộ</option> -->
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </label>
            </div>
            <div class="col-7">
                <label>
                    Thêm cư dân:
                    <select v-model="fee.extraResident">
                        <option value="Ngô Minh Tú" selected>Ngô Minh Tú</option>
                        <option value="absent">Hoàng Hải Nam</option>
                        <option value="absent">Dương Nhật Thành</option>
                    </select>
                </label>
            </div>
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