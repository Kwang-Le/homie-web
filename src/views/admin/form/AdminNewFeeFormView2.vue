<template>
  <div class="kho-n-thu-form-t-o-kho-n-thu-t-ng">
    <div class="rectangle-30"></div>
    <div class="t-o-kho-n-ph-m-i">Tạo khoản phí mới</div>
    <div class="group-n-btn">
      <div class="rectangle-23"></div>
      <div class="t-o-m-i">Tạo mới</div>
    </div>
    <div class="m-kho-n-ph">Mã khoản phí</div>
    <div class="t-n-kho-n-ph">Tên khoản phí</div>
    <div class="th-i-gian-m-ng">Thời gian mở - đóng</div>
    <div class="tr-ng-th-i">Trạng thái</div>
    <div class="lo-i-ph-t-ng">Loại phí tự động</div>
    <div class="dropdown">
      <div class="frame">
        <div class="frame2"></div>
        <div class="frame3">
          <div class="label">Lựa chọn loại phí</div>
          <svg
            class="arrow-drop-down"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.82373 10.8574L13.3714 16.4051L18.9191 10.8574H7.82373Z"
              fill="#666666"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="dropdown2">
      <div class="frame">
        <div class="frame2"></div>
        <div class="frame3">
          <div class="label">20/01/2024</div>
          <svg
            class="arrow-drop-down2"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.82373 10.8574L13.3714 16.4051L18.9191 10.8574H7.82373Z"
              fill="#666666"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="dropdown3">
      <div class="frame">
        <div class="frame2"></div>
        <div class="frame3">
          <div class="label">31/01/2024</div>
          <svg
            class="arrow-drop-down3"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.82373 10.8574L13.3714 16.4051L18.9191 10.8574H7.82373Z"
              fill="#666666"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="text-field">
      <div class="frame4">
        <div class="frame2"></div>
        <div class="frame5">
          <div class="label">Tiền nước tháng 12 2023</div>
        </div>
      </div>
    </div>
    <div class="text-field2">
      <div class="frame4">
        <div class="frame2"></div>
        <div class="frame5">
          <div class="label">TN122023</div>
        </div>
      </div>
    </div>
    <svg
      class="icon-x-letter"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_966_5589)">
        <path
          d="M36 2.11317L33.8866 0L20 13.8866L6.11336 0L4 2.11317L17.8867 15.9999L4 29.8866L6.11336 31.9998L20 18.1132L33.8866 31.9998L36 29.8866L22.1133 15.9999L36 2.11317Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_966_5589"
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
            result="effect1_dropShadow_966_5589"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_966_5589"
            result="shape"
          />
        </filter>
      </defs>
    </svg>

    <div class="sheet-selection">
      <div class="sheet-2">
        <div class="rectangle-31"></div>
        <div class="sheet-name-2">Thủ công</div>
      </div>
      <div class="sheet-1">
        <div class="selected"></div>
        <div class="rectangle-312"></div>
        <div class="sheet-name-1">Tự động</div>
      </div>
      <div class="divider"></div>
    </div>
    <div class="filter-radio-type">
      <div class="radio-button-select">
        <div class="rectangle-3-1"></div>
        <div class="rectangle-3-2"></div>
        <div class="m">Mở</div>
      </div>
      <div class="radio-button-not-select">
        <div class="rectangle-3-12"></div>
        <div class="ng">Đóng</div>
      </div>
    </div>
  </div>
</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */

export default {
  name: "KhoNThuFormTOKhoNThuTNg",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
};
</script>
<style scoped>
.kho-n-thu-form-t-o-kho-n-thu-t-ng,
.kho-n-thu-form-t-o-kho-n-thu-t-ng * {
  box-sizing: border-box;
}
.kho-n-thu-form-t-o-kho-n-thu-t-ng {
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
.t-o-kho-n-ph-m-i {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 40px;
  line-height: 150%;
  font-weight: 700;
  position: absolute;
  left: 410px;
  top: 45px;
  width: 544px;
  height: 60.47px;
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
  top: 657px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.t-o-m-i {
  color: #ffffff;
  text-align: center;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 28px;
  line-height: 150%;
  font-weight: 600;
  position: absolute;
  left: calc(50% - 60.39px);
  top: calc(50% - -277px);
  width: 119.78px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.m-kho-n-ph {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 150px;
  top: 265px;
}
.t-n-kho-n-ph {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 150px;
  top: 330px;
}
.th-i-gian-m-ng {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 150px;
  top: 467px;
}
.tr-ng-th-i {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 150px;
  top: 529px;
}
.lo-i-ph-t-ng {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 150px;
  top: 399px;
}
.dropdown {
  display: flex;
  flex-direction: column;
  gap: 4.44px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 544px;
  height: 48px;
  position: absolute;
  left: 423px;
  top: 391px;
}
.frame {
  background: var(--white, #ffffff);
  border-radius: 4.44px;
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
  padding: 13.31px 13.31px 13.31px 17.75px;
  display: flex;
  flex-direction: row;
  gap: 13.31px;
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
}
.arrow-drop-down {
  flex-shrink: 0;
  width: 26.63px;
  height: 26.63px;
  position: relative;
  overflow: visible;
}
.dropdown2 {
  display: flex;
  flex-direction: column;
  gap: 4.44px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 250px;
  height: 48px;
  position: absolute;
  left: 423px;
  top: 460px;
}
.arrow-drop-down2 {
  flex-shrink: 0;
  width: 26.63px;
  height: 26.63px;
  position: relative;
  overflow: visible;
}
.dropdown3 {
  display: flex;
  flex-direction: column;
  gap: 4.44px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 250px;
  height: 48px;
  position: absolute;
  left: 717px;
  top: 460px;
}
.arrow-drop-down3 {
  flex-shrink: 0;
  width: 26.63px;
  height: 26.63px;
  position: relative;
  overflow: visible;
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
  left: 423px;
  top: 322px;
}
.frame4 {
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
.frame5 {
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
.text-field2 {
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 544px;
  height: 48px;
  position: absolute;
  left: 423px;
  top: 257px;
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
  right: 63.39%;
  left: 20.54%;
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
  right: 63.48%;
  left: 20.54%;
  width: 15.98%;
  bottom: 79.62%;
  top: 13.12%;
  height: 7.25%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  left: calc(50% - 525px);
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
  right: 81.25%;
  left: 2.68%;
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
  left: calc(50% - 530px);
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
  right: 2.68%;
  left: 2.68%;
  width: 94.64%;
  bottom: 76%;
  top: 24%;
  height: 0%;
}
.filter-radio-type {
  position: absolute;
  inset: 0;
}
.radio-button-select {
  width: 137.24px;
  height: 29.25px;
  position: static;
}
.rectangle-3-1 {
  border-radius: 14px;
  border-style: solid;
  border-color: var(--primary, #457b9d);
  border-width: 2px;
  width: 29.11px;
  height: 29.25px;
  position: absolute;
  left: 423px;
  top: calc(50% - -130.04px);
}
.rectangle-3-2 {
  background: var(--primary, #457b9d);
  border-radius: 14px;
  width: 18.72px;
  height: 18.8px;
  position: absolute;
  left: 428.2px;
  top: calc(50% - -135.27px);
}
.m {
  color: var(--primary-base-black, #000000);
  text-align: left;
  font-family: "Raleway-Medium", sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  position: absolute;
  left: 456.27px;
  top: 530.04px;
  width: 103.97px;
  height: 29.25px;
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
  left: 587.28px;
  top: calc(50% - -129px);
}
.ng {
  color: var(--primary-base-black, #000000);
  text-align: left;
  font-family: "Raleway-Medium", sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  position: absolute;
  left: 623.67px;
  top: 529px;
  width: 103.97px;
  height: 29.25px;
}
</style>
