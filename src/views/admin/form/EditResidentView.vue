<script setup>
import { ref } from 'vue';

let resident = ref({
    birthdate: '',
    address: '',
    apartment: '',
    status: '',
    idNum: '',
    email: '',
});

const editResident = () => {
    // Handle the form submission here
    console.log(resident.value);
};
</script>

<template>
    <form @submit.prevent="editResident">
        <!-- Add form fields for editing the resident's information here -->
        <div class="row">
            <div class="col-5">
                <label>
                    Ngày sinh:
                    <input v-model="resident.birthdate" type="date">
                </label>
            </div>
            <div class="col-7">
                <label>
                    Địa chỉ thường trú:
                    <input v-model="resident.address" type="text" style="width: 200px;">
                </label>
            </div>
        </div>
        
        <div class="row">
            <div class="col-5">
                <label>
                    Căn hộ:
                    <select v-model="resident.apartment">
                        <!-- <option value="">Chọn căn hộ</option> -->
                        <option value="P101">P101</option>
                        <option value="P102">P102</option>
                        <option value="P103">P103</option>
                        <option value="P104">P104</option>
                        <option value="P105">P105</option>
                        <option value="P106">P106</option>
                        <option value="P107">P107</option>
                        <option value="P108">P108</option>
                        <option value="P109">P109</option>
                        <option value="P110">P110</option>
                    </select>
                </label>
            </div>
            <div class="col-7">
                <label>
                    Trạng thái:
                    <select v-model="resident.status">
                        <option value="staying" selected>Tạm trú</option>
                        <option value="absent">Tạm vắng</option>
                    </select>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <label>
                    CCCD:
                    <input v-model="resident.idNum" type="text" placeholder="038202000015" style="width: 200px;">
                </label>
            </div>
            <div class="col-7">
                <label>
                    Email:
                    <input v-model="resident.email" type="email" placeholder="quangle@gmail.com">
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