<template>
    <div class="div">
        <div class="avt-container">
            <img src="../../assets/img/ExtraAccountProfileAvatar.jpeg" class="img" />
        </div>
        <div class="extra-info">
            <div class="extra-info-title">Nguyễn Hàn My</div>
            <div class="extra-info-content">
                <span class="span-label">Trạng thái: </span>
                <span class="span-content">Tạm vắng</span>
            </div>
            <div class="extra-info-content">
                <span class="span-label">Ngày sinh: </span>
                <span class="span-content">05/03/2002 </span>
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
    font: 800 22px/150% Inter, sans-serif;
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
    font: 700 16px/130% Inter, sans-serif;
}
</style>
