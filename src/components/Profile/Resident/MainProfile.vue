<script setup>
import Card from '@/components/Card.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import EditResidentView from '@/views/admin/form/EditResidentView.vue';
import EditResidentModal from '@/components/modals/EditResidentModal.vue';
</script>

<template>
    <main>
        <Card>
            <div class="back-button justify-content-start" @click="$router.go(-1)">
                <font-awesome-icon :icon="faArrowLeft" size="2x" class="btn-back" />
            </div>
            <div class="row main-content">
                <div class="col-4 avatar">
                    <div class="row avt-container">
                        <img src="../../../assets/img/TranVinhKhanh.png" class="avatar" alt="avatar" />
                    </div>
                    <div class="main-avt-name">Trần Vinh Khánh</div>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Ngày sinh</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>30/02/2002</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">CCCD</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>038202000010</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Email</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>khanh.tv205208@sis.hust.edu.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Căn hộ</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>B1-205</p>
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
                    <div class="d-flex justify-content-between">
                        <div class="info-label">
                            <h5 class="info-title font-weight-bold">Địa chỉ thường trú</h5>
                            <div class="info-content d-flex flex-column card-text">
                                <p>1 Đại Cồ Việt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row-button">
                <button type="button" class="btn btn-edit" data-bs-toggle="modal" data-bs-target="#editResidentModal">Chỉnh
                    sửa</button>
                <EditResidentModal />
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

.back-button {
    /* display: flex; */
    /* justify-content: start; */
    color: black;
    margin-top: 4px;
    margin-right: 4px;
}

.btn-back {
    cursor: pointer;
    /* display: flex; */
    /* justify-content: flex-start; */
}

.btn-back:hover {
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
    font-weight: 300;
    font-size: 24px;
    line-height: 150%;
}

.info-label {
    /* font: 18px/150% Inter, sans-serif; */
    margin-bottom: 36px;
}

.info-title {
    font: 1000 24px/150% Inter, sans-serif;
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
    font-family: "Inter-SemiBold", sans-serif;
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