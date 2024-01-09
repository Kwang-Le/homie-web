<script setup>
import { ref } from 'vue';

let apartment = ref({
    status: '',
    householder: '',
    floor: '',
    extraResident: '',
});

const editApartment = () => {
    // Handle the form submission here
    console.log(apartment.value);
};
</script>

<template>
    <form @submit.prevent="editApartment">
        <div class="row">
            <div class="col-5">
                <label>
                    Trạng thái:
                    <select v-model="apartment.status">
                        <option value="staying" selected>Sử dụng</option>
                        <option value="absent">Thuê</option>
                        <option value="absent">Trống</option>
                    </select>
                </label>
            </div>
            <div class="col-7">
                <label>
                    Chủ hộ:
                    <select v-model="apartment.householder" style="width: 200px;"> 
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
                    <select v-model="apartment.floor">
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
                    <select v-model="apartment.extraResident">
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
label {
    color: var(--main-secondary);
    letter-spacing: -0.48px;
    white-space: nowrap;
    font: 700 20px/150% Inter, sans-serif;
    text-align: center;
    margin: 24px;
}
</style>