<script setup>
import Card from '@/components/Card.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <main>
        <Card>
            <div class="row back-button" @click="$router.go(-1)">
                <font-awesome-icon :icon="faArrowLeft" size="2x" class="btn-back"/>
            </div>
            <div class="row main-content">
                <div class="col-4 avatar">
                    <div class="row avt-container">
                        <div class="img">
                            <img src="../../assets/img/AccountProfileAvatar.jpg" class="img" alt="avatar" />
                        </div>
                    </div>
                    <div class="main-avt-name">Lê Thanh Quang</div>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Giới tính</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>Nam</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Ngày sinh</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>28/03/2002</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">CCCD</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>038202000015</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Email</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>quangle@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Số điện thoại</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>0852589862</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Căn hộ</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>P2011</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Trạng thái</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>Tạm trú</p>
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

.row.back-button {
    display: flex;
    justify-content: flex-start;
    /* color: black;
    margin-top: 4px;
    margin-left: 4px; */
}

.btn-back {
    align-self: flex-start;
    cursor: pointer;
    color: black;
    margin-top: 4px;
    margin-left: 4px;
}

.btn-back:hover {
    color: #555;
}

.avt-container {
    width: 160px;
    height: 160px;
    border-radius: 50%;
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