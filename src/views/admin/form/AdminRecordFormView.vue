<template>
  <div class="admin-ghi-nh-n-n">
    <div class="rectangle-30"></div>
    <div class="ki-u-thu-ph">Kiểu thu phí</div>
    <div class="filter-radio-type">
      <div class="radio-button-select">
        <div class="c-nh-n">Cá nhân</div>
        <input type="radio" id="radio-1" name="radio" class="rectangle-3-1" checked/>
      </div>
      <div class="radio-button-not-select">
        <input type="radio" id="radio-2" name="radio" class="rectangle-3-12"/>
        <div class="c-n-h">Căn hộ</div>
      </div>
    </div>
    <div class="ghi-nh-n-ng-g-p">Ghi nhận đóng góp</div>
    <div class="text-field">
      <div class="frame">
        <div class="frame2"></div>
        <div class="frame3">
          <input class="label" placeholder="20000">
        </div>
      </div>
    </div>
    <div class="text-field2">
      <div class="frame">
        <div class="frame2"></div>
        <div class="frame3">
          <input class="label" placeholder="20205233">
        </div>
      </div>
    </div>
    <div class="text-field3">
      <div class="frame">
        <div class="frame2"></div>
        <div class="frame3">
          <input class="label" placeholder="Nhập/chọn mã khoản thu">
        </div>
      </div>
    </div>
    <div class="m-kho-n-thu">Mã khoản thu</div>
    <div class="s-ti-n-ng-g-p">Số tiền đóng góp</div>
    <div class="nh-danh-ng-i-n-p">
      Định danh người
      <br />
      nộp
    </div>
    <div class="group-n-btn">
      <div class="rectangle-23"></div>
      <button class="ghi-nh-n">Ghi nhận</button>
    </div>
    <svg
      class="icon-x-letter"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_966_5388)">
        <path
          d="M36 2.11317L33.8866 0L20 13.8866L6.11336 0L4 2.11317L17.8867 15.9999L4 29.8866L6.11336 31.9998L20 18.1132L33.8866 31.9998L36 29.8866L22.1133 15.9999L36 2.11317Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_966_5388"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_966_5388"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_966_5388"
            result="shape"
          />
        </filter>
      </defs>
    </svg>

    <div class="button">
      <div class="state-layer">
        <button class="label-text">Chọn</button>
      </div>
    </div>
    <div class="button2">
      <div class="state-layer">
        <button class="label-text">Chọn</button>
      </div>
    </div>
    <div class="sheet-selection">
      <div class="sheet-2">
        <div class="rectangle-31"></div>
        <button class="sheet-name-2" onclick="window.location.href='admin-record-list'">Danh sách</button>
      </div>
      <div class="sheet-1">
        <div class="selected"></div>
        <div class="rectangle-312"></div>
        <div class="sheet-name-1">Đơn</div>
      </div>
      <div class="divider"></div>
    </div>
  </div>
</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */

export default {
  name: "AdminGhiNhNN",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
};
</script>
<style scoped>
.admin-ghi-nh-n-n,
.admin-ghi-nh-n-n * {
  box-sizing: border-box;
}
.admin-ghi-nh-n-n {
  width: 1120px;
  height: 800px;
  position: relative;
}
.rectangle-30 {
  background: #a8dadc;
  border-radius: 10px;
  border-style: solid;
  border-color: #000000;
  border-width: 2px;
  width: 1120px;
  height: 800px;
  position: absolute;
  left: calc(50% - 560px);
  top: 0px;
  box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.25);
}
.ki-u-thu-ph {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 107px;
  top: 312px;
}
.filter-radio-type {
  position: absolute;
  inset: 0;
}
.radio-button-select {
  width: 137.24px;
  height: 29.29px;
  position: static;
}
.c-nh-n {
  color: var(--primary-base-black, #000000);
  text-align: left;
  font-family: "Raleway-Medium", sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  position: absolute;
  left: 511.27px;
  top: 321.04px;
  width: 103.97px;
  height: 29.25px;
}
.rectangle-3-1 {
  background: #ffffff;
  border-radius: 14px;
  border-style: solid;
  border-color: var(--mono-gray-2, #e1e1e1);
  border-width: 1px;
  width: 29.11px;
  height: 29.25px;
  position: absolute;
  left: 478px;
  top: calc(50% - 79px);
  z-index: 1;
}
.radio-button-not-select {
  width: 140.36px;
  height: 29.25px;
  position: static;
}
.rectangle-3-12 {
  background: #ffffff;
  border-radius: 14px;
  border-style: solid;
  border-color: var(--mono-gray-2, #e1e1e1);
  border-width: 1px;
  width: 29.11px;
  height: 29.25px;
  position: absolute;
  left: 642.28px;
  top: calc(50% - 80px);
  z-index: 1;
}
.c-n-h {
  color: var(--primary-base-black, #000000);
  text-align: left;
  font-family: "Raleway-Medium", sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  position: absolute;
  left: 678.67px;
  top: 320px;
  width: 103.97px;
  height: 29.25px;
}
.ghi-nh-n-ng-g-p {
  color: #1d3557;
  text-align: center;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 40px;
  line-height: 150%;
  font-weight: 700;
  position: absolute;
  left: calc(50% - 272px);
  top: 44.86px;
  width: 544px;
  height: 60.47px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-field {
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 544px;
  height: 48px;
  position: absolute;
  left: 478px;
  top: 486px;
}
.frame {
  background: var(--white, #ffffff);
  border-radius: 4.43px;
  border-style: solid;
  border-color: var(--gray-200, #b3b3b3);
  border-width: 1.11px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.frame2 {
  background: var(--white, #ffffff);
  align-self: stretch;
  flex-shrink: 0;
  height: 0px;
  position: relative;
}
.frame3 {
  padding: 13.28px 17.71px 13.28px 17.71px;
  display: flex;
  flex-direction: row;
  gap: 13.28px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}
.label {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: var(
    --android-subtitle-1-font-family,
    "BalsamiqSans-Regular",
    sans-serif
  );
  font-size: var(--android-subtitle-1-font-size, 16px);
  line-height: var(--android-subtitle-1-line-height, 24px);
  font-weight: var(--android-subtitle-1-font-weight, 400);
  position: relative;
  flex: 1;
  z-index: 1;
  border: none;
}
.text-field2 {
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 544px;
  height: 48px;
  position: absolute;
  left: 478px;
  top: 385px;
}
.text-field3 {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 544px;
  height: 48px;
  position: absolute;
  left: 478px;
  top: 227px;
}
.m-kho-n-thu {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 107px;
  top: 235px;
}
.s-ti-n-ng-g-p {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 107px;
  top: 499px;
}
.nh-danh-ng-i-n-p {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 107px;
  top: 393px;
}
.group-n-btn {
  position: absolute;
  inset: 0;
}
.rectangle-23 {
  background: #457b9d;
  border-radius: 10px;
  width: 544px;
  height: 76px;
  position: absolute;
  left: 288px;
  top: 631px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.ghi-nh-n {
  color: #ffffff;
  text-align: center;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 28px;
  line-height: 150%;
  font-weight: 600;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  z-index: 1;
  background: #457b9d;
  border-radius: 10px;
  width: 544px;
  height: 76px;
  position: absolute;
  left: 288px;
  top: 631px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.icon-x-letter {
  height: auto;
  position: absolute;
  right: 0.98%;
  left: 96.16%;
  width: 2.86%;
  bottom: 94.13%;
  top: 1.88%;
  height: 4%;
  overflow: visible;
}
.button {
  background: #f1faee;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 83px;
  height: 50px;
  position: absolute;
  left: 314px;
  top: 385px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.state-layer {
  padding: 10px 24px 10px 24px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex: 1;
  position: relative;
}
.label-text {
  color: #1d3557;
  text-align: center;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 20px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #f1faee;
  z-index: 1;
}
.label,
.label-text:focus {
  outline: none;
}
.button2 {
  background: #f1faee;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 83px;
  height: 50px;
  position: absolute;
  left: 314px;
  top: 227px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
.sheet-selection {
  position: absolute;
  inset: 0;
}
.sheet-2 {
  width: 180px;
  height: 58px;
  position: static;
}
.rectangle-31 {
  background: rgba(128, 128, 128, 0.5);
  border-radius: 15px;
  position: absolute;
  right: 63.12%;
  left: 20.8%;
  width: 16.07%;
  bottom: 79.68%;
  top: 13.12%;
  height: 7.2%;
}
.sheet-name-2 {
  color: #1d3557;
  text-align: center;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 30px;
  line-height: 64px;
  font-weight: 700;
  position: absolute;
  right: 63.21%;
  left: 20.8%;
  width: 15.98%;
  bottom: 79.62%;
  top: 13.12%;
  height: 7.25%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(128, 128, 128, 0.5);
  border-radius: 15px;
  position: absolute;
  right: 63.12%;
  left: 20.8%;
  width: 16.07%;
  bottom: 79.68%;
  top: 13.12%;
  height: 7.2%;
}
.sheet-1 {
  width: 180px;
  height: 65px;
  position: static;
}
.selected {
  border-style: solid;
  border-color: #000000;
  border-width: 7px 0 0 0;
  width: 170px;
  position: absolute;
  left: calc(50% - 522px);
  bottom: 78.75%;
  top: 21.25%;
  height: 0%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}
.rectangle-312 {
  background: rgba(69, 123, 157, 0.5);
  border-radius: 15px;
  position: absolute;
  right: 80.98%;
  left: 2.95%;
  width: 16.07%;
  bottom: 79.95%;
  top: 13.12%;
  height: 6.92%;
}
.sheet-name-1 {
  color: #f1faee;
  text-align: center;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 30px;
  line-height: 64px;
  font-weight: 700;
  position: absolute;
  left: calc(50% - 527px);
  top: calc(50% - 295px);
  width: 180px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divider {
  border-style: solid;
  border-color: #000000;
  border-width: 2px 0 0 0;
  position: absolute;
  right: 2.41%;
  left: 2.95%;
  width: 94.64%;
  bottom: 76%;
  top: 24%;
  height: 0%;
}
</style>
