<template>
    <div class="box">
        <div class="main-pane">
            <div class="overlap">
                <div class="action-button">
                    <div class="text-wrapper">Action 1</div>
                </div>
                <div class="overlap-group-wrapper">
                    <div class="overlap-group">
                        <div class="div">Chỉnh sửa</div>
                    </div>
                </div>
            </div>
            <div class="overlap-2">
                <div class="div-wrapper">
                    <div class="text-wrapper">Xóa</div>
                </div>
                <div class="overlap-wrapper">
                    <div class="overlap-3">
                        <div class="div">Xóa</div>
                    </div>
                </div>
            </div>
            <div class="account-info">
                <img class="name" alt="Name" src="name.png" />
                <img class="oval" alt="Oval" src="oval.png" />
                <div class="group">
                    <div class="text-wrapper-2">Căn hộ</div>
                    <div class="text-wrapper-3">P2011</div>
                    <div class="text-wrapper-4">Trạng thái</div>
                    <div class="text-wrapper-5">Tạm trú</div>
                    <div class="text-wrapper-6">Ngày sinh</div>
                    <div class="text-wrapper-7">28/03/2002</div>
                    <div class="text-wrapper-8">Giới tính</div>
                    <div class="text-wrapper-9">Nam</div>
                    <div class="text-wrapper-10">Số điện thoại</div>
                    <div class="text-wrapper-11">0852589862</div>
                    <div class="text-wrapper-12">CCCD</div>
                    <div class="text-wrapper-13">038202000015</div>
                    <div class="text-wrapper-14">Email</div>
                    <a class="text-wrapper-15" href="mailto:quangle@gmail.com" rel="noopener noreferrer" target="_blank">
                        quangle@gmail.com
                    </a>
                </div>
            </div>
            <img class="back-button" alt="Back button" src="back-button.png" />
        </div>
    </div>
</template>
  
<script>
export default {
    name: "MainProfile",
};
</script>
  
<style>
.box {
    height: 833px;
    position: relative;
    width: 1319px;
}

.box .main-pane {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000040;
    height: 833px;
    left: 0;
    position: fixed;
    top: 0;
    width: 1319px;
}

.box .overlap {
    height: 64px;
    left: 346px;
    position: absolute;
    top: 734px;
    width: 348px;
}

.box .action-button {
    height: 12px;
    left: 0;
    position: absolute;
    top: 18px;
    width: 247px;
}

.box .text-wrapper {
    color: #ffffff;
    font-family: "Raleway-SemiBold", Helvetica;
    font-size: 24px;
    font-weight: 600;
    height: 12px;
    left: 0;
    letter-spacing: -0.46px;
    line-height: 36px;
    position: absolute;
    text-align: center;
    top: 0;
    white-space: nowrap;
    width: 245px;
}

.box .overlap-group-wrapper {
    height: 64px;
    left: 67px;
    position: absolute;
    top: 0;
    width: 281px;
}

.box .overlap-group {
    background-color: #457b9d;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000040;
    height: 64px;
    position: relative;
    width: 279px;
}

.box .div {
    color: #ffffff;
    font-family: "Raleway-SemiBold", Helvetica;
    font-size: 24px;
    font-weight: 600;
    height: 12px;
    left: 17px;
    letter-spacing: -0.46px;
    line-height: 36px;
    position: absolute;
    text-align: center;
    top: 25px;
    white-space: nowrap;
    width: 245px;
}

.box .overlap-2 {
    height: 64px;
    left: 731px;
    position: absolute;
    top: 734px;
    width: 281px;
}

.box .div-wrapper {
    height: 12px;
    left: 16px;
    position: absolute;
    top: 18px;
    width: 247px;
}

.box .overlap-wrapper {
    height: 64px;
    left: 0;
    position: absolute;
    top: 0;
    width: 281px;
}

.box .overlap-3 {
    background-color: #e63946;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000040;
    height: 64px;
    position: relative;
    width: 279px;
}

.box .account-info {
    height: 558px;
    left: 16px;
    position: absolute;
    top: 91px;
    width: 1178px;
}

.box .name {
    height: 38px;
    left: 35px;
    position: absolute;
    top: 387px;
    width: 296px;
}

.box .oval {
    height: 298px;
    left: 33px;
    object-fit: cover;
    position: absolute;
    top: 33px;
    width: 298px;
}

.box .group {
    height: 558px;
    left: 460px;
    position: absolute;
    top: 0;
    width: 744px;
}

.box .text-wrapper-2 {
    color: #000000;
    font-family: "Raleway-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    left: 486px;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 160px;
    width: 197px;
}

.box .text-wrapper-3 {
    color: #000000;
    font-family: "Raleway-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 486px;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 218px;
    width: 197px;
}

.box .text-wrapper-4 {
    color: #000000;
    font-family: "Raleway-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    left: 486px;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 304px;
    width: 197px;
}

.box .text-wrapper-5 {
    color: #000000;
    font-family: "Raleway-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 486px;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 363px;
    width: 197px;
}

.box .text-wrapper-6 {
    color: #000000;
    font-family: "Raleway-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    left: 0;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 154px;
    width: 197px;
}

.box .text-wrapper-7 {
    color: #000000;
    font-family: "Raleway-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 0;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 212px;
    width: 230px;
}

.box .text-wrapper-8 {
    color: #000000;
    font-family: "Raleway-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    left: 0;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 4px;
    width: 197px;
}

.box .text-wrapper-9 {
    color: #000000;
    font-family: "Raleway-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 0;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 62px;
    width: 230px;
}

.box .text-wrapper-10 {
    color: #000000;
    font-family: "Raleway-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    left: 486px;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 0;
    width: 197px;
}

.box .text-wrapper-11 {
    color: #000000;
    font-family: "Raleway-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 486px;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 58px;
    width: 230px;
}

.box .text-wrapper-12 {
    color: #000000;
    font-family: "Raleway-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    left: 0;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 304px;
    width: 197px;
}

.box .text-wrapper-13 {
    color: #000000;
    font-family: "Raleway-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 0;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 363px;
    width: 280px;
}

.box .text-wrapper-14 {
    color: #000000;
    font-family: "Raleway-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    left: 0;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 450px;
    width: 197px;
}

.box .text-wrapper-15 {
    color: #000000;
    font-family: "Raleway-Regular", Helvetica;
    font-size: 32px;
    font-weight: 400;
    left: 0;
    letter-spacing: -0.64px;
    line-height: 41.6px;
    position: absolute;
    top: 508px;
    width: 378px;
}

.box .back-button {
    height: 37px;
    left: 49px;
    object-fit: cover;
    position: absolute;
    top: 28px;
    width: 37px;
}
</style>