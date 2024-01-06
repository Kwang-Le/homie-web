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
                <div class="col-4"></div>
                <div class="col-4"></div>
            </div>
        </Card>
    </main>
</template>

<style scoped>
.row {
    margin-top: 10px;
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
</style>