<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
    <main>
        <Card>
            <div class="row">
                <div class="col-4 avatar">
                    <div class="back-button">
                        <!-- fa arrow left -->
                    </div>
                    <div class="avt-container">
                        <div class="img">
                            <img src="../../assets/img/MainProfileAvatar.jpg" class="img" alt="avatar" />
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
        </Card>
    </main>
</template>

<style scoped>
.row {
    margin-top: 10px;
    /* needs review */
}

.col-4.avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
}

.info-title {
    font: bold 24px/150% Raleway, sans-serif;
    font-size: 24px;
    line-height: 150%;
    /* font-weight: bold; */
}

.info-content {
    font: normal 18px/150% Raleway, sans-serif;
    /* font-size: 18px; */
    font-weight: normal;
    color: var(--main-secondary);
}
</style>