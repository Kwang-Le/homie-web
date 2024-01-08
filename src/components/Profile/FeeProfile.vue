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
    const response = await fetch("../../../db.json") // TODO: able to fetch data from db.json
    const data = await response.json()

    mainAvtId.value = data.charges.fees.list[0].number
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
                            <img src="../../assets/img/fee.png" class="img" alt="avatar" />
                        </div>
                    </div>
                    <div class="main-avt-name">Khoản thu</div>
                    <div class="main-avt-id">{{  mainAvtId }}</div>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Trạng thái</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>Mở</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Tiến độ</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>60/200 (30%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Mô tả</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>Tổ chức trung thu cho các cháu thiếu nhi</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Thời gian</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>28/07/2023 -<br>28/8/2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold">Loại phí</h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p>Đóng góp</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="d-flex justify-content-between">
                                <div class="info-label">
                                    <h5 class="info-title font-weight-bold"></h5>
                                    <div class="info-content d-flex flex-column card-text">
                                        <p></p>
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
    font: 30px/150% Raleway, sans-serif;
    text-align: center;
}

.main-avt-id {
    color: var(--main-secondary);
    letter-spacing: -0.48px;
    white-space: nowrap;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 24px;
    line-height: 150%;
}

.info-label {
    /* font: 18px/150% Raleway, sans-serif; */
    margin-bottom: 36px;
}

.info-title {
    font: bold 24px/150% Raleway, sans-serif;
}

.info-content {
    font-family: "Inter", sans-serif;
    /* font-size: 18px; */
    /* font-weight: normal; */
    color: var(--main-secondary);
    margin-top: 8px;

    font-weight: 200;
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
    font-family: "Raleway-SemiBold", sans-serif;
    /* font: 600 18px/150%, sans-serif; */
    font-weight: 500;
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