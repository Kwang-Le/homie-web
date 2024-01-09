<template>
  <div className="admin-ghi-nh-n-danh-s-ch">
    <div className="rectangle-30"></div>
    <div className="ghi-nh-n-ng-g-p">Ghi nhận đóng góp</div>
    <div className="text-field">
      <div className="frame">
        <div className="frame2"></div>
        <div className="frame3">
          <input className="label" placeholder="TT2023">
        </div>
      </div>
    </div>
    <div className="m-kho-n-thu">Mã khoản thu</div>
    <div className="group-n-btn">
      <div className="rectangle-23"></div>
      <button className="ghi-nh-n">Ghi nhận</button>
    </div>
    <svg
        className="icon-x-letter"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1053_5569)">
        <path
            d="M36 2.11317L33.8866 0L20 13.8866L6.11336 0L4 2.11317L17.8867 15.9999L4 29.8866L6.11336 31.9998L20 18.1132L33.8866 31.9998L36 29.8866L22.1133 15.9999L36 2.11317Z"
            fill="black"
        />
      </g>
      <defs>
        <filter
            id="filter0_d_1053_5569"
            x="0"
            y="0"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
          />
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1053_5569"
          />
          <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1053_5569"
              result="shape"
          />
        </filter>
      </defs>
    </svg>

    <div className="button">
      <div className="state-layer">
        <button className="label-text">Chọn</button>
      </div>
    </div>
    <div className="sheet-selection">
      <div className="sheet-2">
        <div className="rectangle-31"></div>
        <div className="selected"></div>
        <div className="sheet-name-2">Danh sách</div>
      </div>
      <div className="sheet-1">
        <div className="rectangle-312"></div>
        <button className="sheet-name-1" onclick="window.location.href='admin-record-form'">Đơn</button>
      </div>
      <div className="divider"></div>
    </div>
    <div className="danh-s-ch-thu">Danh sách thu</div>
    <div className="t-i-m-u-danh-s-ch">(Tải mẫu danh sách)</div>
    <div className="upload-btn">
      <div className="rectangle-232"></div>
      <button type="file" id="upload-file" className="upload-file">Upload file</button>
    </div>
    <div className="ki-u-thu-ph">Kiểu thu phí</div>
    <div className="filter-radio-type">
      <div className="radio-button-select">
        <input type="radio" id="radio-1" name="radio" class="rectangle-3-1" checked/>
        <div className="c-nh-n">Cá nhân</div>
      </div>
      <div className="radio-button-not-select">
        <input type="radio" id="radio-2" name="radio" class="rectangle-3-12"/>
        <div className="c-n-h">Căn hộ</div>
      </div>
    </div>
    <div
        className="trong-danh-s-ch-c-c-c-tr-ng-nh-danh-ng-i-n-p-cccd-i-v-i-thu-ph-c-nh-n-cccd-c-a-ch-h-v-i-thu-ph-c-n-h-s-ti-n-ng-y-n-p-dd-mm-yyyy-ng-i-d-ng-vui-l-ng-nh-p-ng-theo-h-ng-d-n-tr-c-khi-upload-file"
    >
      (Trong danh sách có các trường: Định danh người nộp (CCCD đối với thu phí
      cá nhân,
      <br/>
      CCCD của chủ hộ với thu phí căn hộ)), Số tiền, Ngày nộp (dd/mm/yyyy).
      Người dùng
      <br/>
      vui lòng nhập đúng theo hướng dẫn trước khi upload file.)
    </div>
  </div>
</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */

export default {
  name: "AdminGhiNhNDanhSCh",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
};
</script>
<style scoped>
.admin-ghi-nh-n-danh-s-ch,
.admin-ghi-nh-n-danh-s-ch * {
  box-sizing: border-box;
}

.admin-ghi-nh-n-danh-s-ch {
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
  border: none;
  z-index: 1;
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
  left: calc(50% - 71px);
  top: calc(50% - -251px);
  width: 142px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border: none;
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
  top: 227px;
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

.sheet-selection {
  position: absolute;
  inset: 0;
}

.sheet-2 {
  width: 180px;
  height: 65px;
  position: static;
}

.rectangle-31 {
  background: rgba(69, 123, 157, 0.5);
  border-radius: 15px;
  position: absolute;
  right: 63.12%;
  left: 20.8%;
  width: 16.07%;
  bottom: 79.68%;
  top: 13.12%;
  height: 7.2%;
}

.selected {
  border-style: solid;
  border-color: #000000;
  border-width: 7px 0 0 0;
  width: 170px;
  position: absolute;
  left: calc(50% - 322px);
  bottom: 78.75%;
  top: 21.25%;
  height: 0%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transform-origin: 0 0;
  transform: rotate(0deg) scale(1, 1);
}

.sheet-name-2 {
  color: var(--cream, #f1faee);
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
}

.sheet-1 {
  width: 180px;
  height: 55.38px;
  position: static;
}

.rectangle-312 {
  background: rgba(128, 128, 128, 0.5);
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
  color: #1d3557;
  text-align: center;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 30px;
  line-height: 64px;
  font-weight: 700;
  position: absolute;
  /*left: calc(50% - 527px);*/
  /*top: calc(50% - 295px);*/
  width: 180px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(128, 128, 128, 0.5);
  border-radius: 15px;
  position: absolute;
  right: 80.98%;
  left: 2.95%;
  width: 16.07%;
  bottom: 79.95%;
  top: 13.12%;
  height: 6.92%;
  z-index: 1;
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

.danh-s-ch-thu {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 107px;
  top: 402px;
}

.t-i-m-u-danh-s-ch {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBoldItalic", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  font-style: italic;
  position: absolute;
  left: 385px;
  top: 402px;
}

.upload-btn {
  position: absolute;
  inset: 0;
}

.rectangle-232 {
  background: var(--cream, #f1faee);
  border-radius: 10px;
  width: 170px;
  height: 50px;
  position: absolute;
  left: 685px;
  top: 393px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.upload-file {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: calc(50% - -158px);
  top: calc(50% - -2px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  z-index: 1;
  background: #f1faee;
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
  top: 320px;
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
  left: 478px;
  top: calc(50% - 70.96px);
}

.rectangle-3-2 {
  background: var(--primary, #457b9d);
  border-radius: 14px;
  width: 18.72px;
  height: 18.8px;
  position: absolute;
  left: 483.2px;
  top: calc(50% - 65.73px);
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
  top: 329.04px;
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
  left: 642.28px;
  top: calc(50% - 72px);
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
  top: 328px;
  width: 103.97px;
  height: 29.25px;
}

.trong-danh-s-ch-c-c-c-tr-ng-nh-danh-ng-i-n-p-cccd-i-v-i-thu-ph-c-nh-n-cccd-c-a-ch-h-v-i-thu-ph-c-n-h-s-ti-n-ng-y-n-p-dd-mm-yyyy-ng-i-d-ng-vui-l-ng-nh-p-ng-theo-h-ng-d-n-tr-c-khi-upload-file {
  color: #000000;
  text-align: left;
  font-family: "Raleway-SemiBoldItalic", sans-serif;
  font-size: 20px;
  line-height: 32px;
  font-weight: 600;
  font-style: italic;
  position: absolute;
  left: 107px;
  top: 460px;
}

.label,
.label-text:focus {
  outline: none;
}
</style>
