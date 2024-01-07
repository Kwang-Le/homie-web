<script>
import AccountProfileAvatar from '@/assets/img/AccountProfileAvatar.jpg';
import ExtraAccountProfileAvatar from '@/assets/img/ExtraAccountProfileAvatar.jpeg';

export default {
    data() {
        return {
            residents: [
                {
                    name: 'Lê Thanh Quang',
                    status: 'Tạm trú',
                    birthdate: '28/03/2002',
                    avatar: AccountProfileAvatar
                },
                {
                    name: 'Nguyễn Hàn My',
                    status: 'Tạm vắng',
                    birthdate: '05/03/2002',
                    avatar: ExtraAccountProfileAvatar
                },
            ]
        }
    }
}
</script>

<template>
    <div v-for="(resident, index) in residents" :key="index" class="div">
        <div class="avt-container">
            <img :src="resident.avatar" class="img" />
        </div>
        <div class="extra-info">
            <div class="extra-info-title">{{ resident.name }}</div>
            <div class="extra-info-content">
                <span class="span-label">Trạng thái: </span>
                <span class="span-content">{{ resident.status }}</span>
            </div>
            <div class="extra-info-content">
                <span class="span-label">Ngày sinh: </span>
                <span class="span-content">{{ resident.birthdate }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.div {
    border-radius: 15px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: var(--Primary-Base-White, #fff);
    align-self: stretch;
    display: flex;
    margin-top: 12px;
    justify-content: space-between;
    gap: 20px;
    padding: 20px 50px 20px 25px;
}

@media (max-width: 991px) {
    .div {
        padding: 0 20px;
    }
}

.avt-container {
    width: 92px;
    height: 92px;
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

.extra-info {
    align-self: center;
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
    margin: auto 0;
}

.extra-info-title {
    color: var(--main-secondary);
    letter-spacing: -0.48px;
    white-space: nowrap;
    font: 700 22px/150% Raleway, sans-serif;
}

.extra-info-content {
    color: var(--Primary-Base-Black, var(--Primary-Base-Black, #000));
    letter-spacing: -0.32px;
    margin-top: 9px;
    white-space: nowrap;

}

@media (max-width: 991px) {
    .extra-info-content {
        white-space: initial;
    }
}

span.span-label {
    font: 400 16px/130% Raleway, sans-serif;
}
</style>
