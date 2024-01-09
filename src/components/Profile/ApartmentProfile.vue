<script setup>
import Card from '@/components/Card.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { ref, onMounted } from 'vue';
// import { useRoute } from 'vue-router';

library.add(fas);

// const route = useRoute();
const mainAvtId = ref(''); // Initialize mainAvtId as an empty string

onMounted(async () => {
    const response = await fetch("../../db.json")
    const data = await response.json()

    // Assuming the id is stored in data.apartmentId
    mainAvtId.value = data.building.apartments[0].number
});
</script>

<template>
    <main>
        <Card>
            <div class="row close-button" @click="$router.go(-1)">
                <font-awesome-icon :icon="['fas', 'xmark']" size="2x" class="btn-close" />
            </div>
            <div class="row main-content">
                <div class="col-4 avatar">
                    <div class="row avt-container">
                        <div class="img">
                            <img src="../../assets/img/apartment.png" class="img" alt="avatar" />
                        </div>
                    </div>
                    <div class="main-avt-name">Căn hộ</div>
                    <div class="main-avt-id">{{  mainAvtId }}</div>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Trạng thái</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>Sử dụng</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Tạm trú</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>Lê Thanh Quang<br>(Từ: 24/12/2022)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Tầng</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Tạm vắng</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>Nguyễn Hàn My<br>(Từ: 16/11/2023)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Số dân</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">SĐT đại diện</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>0852589862</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="row-button">
                <button type="button" class="btn btn-edit">Chỉnh sửa</button>
                <button type="button" class="btn btn-delete">Xóa</button>
            </div>
        </Card>
    </main>
</template>

<style scoped>
.col-4.avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.row.close-button {
    display: flex;
    justify-content: flex-end;
    color: black;
    margin-top: 4px;
    margin-right: 4px;
}

.btn-close {
    cursor: pointer;
}

.btn-close:hover {
    color: #555;
}

.row.main-content {
    margin-top: 16px;
}

.avt-container {
    width: 160px;
    height: 160px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.img {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    overflow: hidden;
    max-width: 100%;
}

.main-avt-name {
    color: var(--main-secondary);
    letter-spacing: -0.48px;
    white-space: nowrap;
    font: 1000 30px/150% Inter, sans-serif;
    text-align: center;
}

.main-avt-id {
    color: var(--main-secondary);
    letter-spacing: -0.48px;
    white-space: nowrap;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
}

.info-label {
    /* font: 18px/150% Inter, sans-serif; */
    margin-bottom: 36px;
}

.info-title {
    font: bold 24px/150% Inter, sans-serif;
}

.info-content {
    font-family: "Inter", sans-serif;
    /* font-size: 18px; */
    font-weight: normal;
    color: var(--main-secondary);
    margin-top: 8px;
    font-size: 18px;
    line-height: 150%;
}

.row-button {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 64px; */
}

.btn {
    border-radius: 10;
    box-shadow: 0px 4px 4px #00000040;
    border-radius: 10;
    width: 280px;
    color: var(--text-alternative);
    /* font: "Inter", sans-serif; */
    font: 600 18px/150% Inter, sans-serif;
    /* font-weight: 800; */
    font-size: 18px;
    line-height: 150%;
    /* margin-top: 64px; */
    letter-spacing: -1.9%;
    padding: 12px;
    margin: 12px 12px 24px 12px;
}

.btn-edit {
    background-color: var(--main-primary);
}

.btn-delete {
    background-color: var(--btn-negative);
}
</style>