<script setup>
import { ref } from 'vue';

const dropbox1 = ref('on');
const dropbox2 = ref('default');
</script>
<template>
    <div class="setting-display-page">
        <h1 class="title">Cài đặt giao diện</h1>
        <form>
            <div class="option-group">
                <label for="info-dev" style="width: 30%;">Thông tin nhà phát triển</label>
                <select v-model="dropbox1" id="dropbox1">
                    <option value="on">Hiện</option>
                    <option value="off">Ẩn</option>
                </select>
            </div>
        </form>
        <form>
            <div class="option-group">
                <label for="font-size" style="width: 30%;">Kích cỡ phông chữ</label>
                <select v-model="dropbox2" id="dropbox2">
                    <option default value="default">Mặc định</option>
                    <option value="big">Lớn</option>
                    <option value="small">Nhỏ</option>
                </select>
            </div>
        </form>
    </div>
</template>
<style scoped>
h1 {
    margin-bottom: 20px;
    color: var(--Primary-Base-Black, var(--Primary-Base-Black, #000));
    font-family: Raleway;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    /* 41.6px */
    letter-spacing: -0.64px;
    margin-bottom: 60px;
}

form {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}

label {
    margin-bottom: 20px;
    color: var(--Secondary, #1D3557);
    font-family: Raleway;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    width: 200px;
}
select {
    margin-left: 50px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid var(--Neutral-Grey-400, #CED4DA);
    background: var(--Primary-Base-White, #FFF);
    padding-top: 5px;
    
    text-align-last: center;
    margin-bottom: 20px;
    font-size: 20px;
    height: 40px;
    width: 120px;
    /* padding: 13.28px 17.707px; */
    align-items: flex-start;
    gap: 13.28px;
    align-self: stretch;
    margin-left: 20px;
}
</style>