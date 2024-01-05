<script setup>
    import Card from '@/components/Card.vue';
</script>

<template>
    <main>
        <Card>
            <div class="row">
                <div class="col-4">
                    <div class="avt-container">
                        <div class="img">
                            <img src="../../assets/img/MainProfileAvatar.jpg" class="img" alt="avatar" />
                        </div>
                        <div class="main-avt-name">Lê Thanh Quang</div>
                    </div>
                </div>
                <div class="col-4"></div>
                <div class="col-4"></div>
            </div>
        </Card>
    </main>
</template>

<style scoped>
.avt-container {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    overflow: hidden;
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
    font: 700 40px/150% Raleway, sans-serif;
}
</style>