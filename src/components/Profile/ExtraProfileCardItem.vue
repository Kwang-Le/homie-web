<template>
    <div class="div">
        <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1eae4206efa060ae34a242fd6297038959696b6ce61e53bd34ff4c95ea7ee1ae?"
            class="img" />
        <div class="div-2">
            <div class="div-3">Nguyễn Hàn My</div>
            <div class="div-4">Trạng thái: Tạm vắng</div>
            <div class="div-5">Ngày sinh: 05/03/2002</div>
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

.img {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 92px;
    overflow: hidden;
    max-width: 100%;
}

.div-2 {
    align-self: center;
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
    margin: auto 0;
}

.div-3 {
    color: #1e1e1e;
    text-align: center;
    letter-spacing: -0.48px;
    white-space: nowrap;
    font: 700 22px/150% Raleway, sans-serif;
}

@media (max-width: 991px) {
    .div-3 {
        white-space: initial;
    }
}

.div-4 {
    color: var(--Primary-Base-Black, var(--Primary-Base-Black, #000));
    letter-spacing: -0.32px;
    margin-top: 9px;
    white-space: nowrap;
    font: 400 16px/130% Raleway, sans-serif;
}

@media (max-width: 991px) {
    .div-4 {
        white-space: initial;
    }
}

.div-5 {
    color: var(--Primary-Base-Black, var(--Primary-Base-Black, #000));
    letter-spacing: -0.32px;
    margin-top: 5px;
    white-space: nowrap;
    font: 400 16px/130% Raleway, sans-serif;
}

@media (max-width: 991px) {
    .div-5 {
        white-space: initial;
    }
}</style>