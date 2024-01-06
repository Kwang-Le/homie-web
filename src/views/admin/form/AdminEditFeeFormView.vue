<template>
  <div className="admin-edit-th-ng-tin-kho-n-thu-i-n-h-p-l">
    <div className="rectangle-30"></div>
    <div className="thay-i-th-ng-tin-kho-n-thu">Thay đổi thông tin khoản thu</div>
    <div className="group-n-btn">
      <div className="rectangle-23"></div>
      <div className="c-p-nh-t">Cập nhật</div>
    </div>
    <div className="l-do">
      <div className="frame">
        <div className="frame2"></div>
        <div className="frame3">
          <div
              className="t-ch-c-ph-c-tr-ng-tr-ng-cho-c-c-ch-u-thi-u-nhi-trong-t-a-nh"
          >
            Tổ chức phá cỗ trông trăng cho các cháu thiếu nhi trong
            <br/>
            tòa nhà.
          </div>
        </div>
      </div>
      <div className="m-t">Mô tả</div>
    </div>
    <svg
        className="icon-x-letter"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1082_5850)">
        <path
            d="M36 2.11317L33.8866 0L20 13.8866L6.11336 0L4 2.11317L17.8867 15.9999L4 29.8866L6.11336 31.9998L20 18.1132L33.8866 31.9998L36 29.8866L22.1133 15.9999L36 2.11317Z"
            fill="black"
        />
      </g>
      <defs>
        <filter
            id="filter0_d_1082_5850"
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
              result="effect1_dropShadow_1082_5850"
          />
          <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1082_5850"
              result="shape"
          />
        </filter>
      </defs>
    </svg>

    <div className="th-i-gian-m-ng">Thời gian mở - đóng</div>
    <div className="tr-ng-th-i">Trạng thái</div>
    <div className="dropdown">
      <div className="frame4">
        <div className="frame2"></div>
        <div className="frame5">
          <div className="label">23/04/2023</div>
          <svg
              className="arrow-drop-down"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M7.82324 10.8574L13.3709 16.4051L18.9186 10.8574H7.82324Z"
                fill="#666666"
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="dropdown2">
      <div className="frame4">
        <div className="frame2"></div>
        <div className="frame5">
          <div className="label">18/10/2023</div>
          <svg
              className="arrow-drop-down2"
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
    <div className="filter-radio-type">
      <div className="radio-button-select">
        <div className="rectangle-3-1"></div>
        <div className="rectangle-3-2"></div>
        <div className="m">Mở</div>
      </div>
      <div className="radio-button-not-select">
        <div className="rectangle-3-12"></div>
        <div className="ng">Đóng</div>
      </div>
    </div>
  </div>
</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */

export default {
  name: "AdminEditThNgTinKhoNThuINHPL",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
};
</script>
<style scoped>
.admin-edit-th-ng-tin-kho-n-thu-i-n-h-p-l,
.admin-edit-th-ng-tin-kho-n-thu-i-n-h-p-l * {
  box-sizing: border-box;
}

.admin-edit-th-ng-tin-kho-n-thu-i-n-h-p-l {
  width: 1120px;
  height: 645px;
  position: relative;
}

.rectangle-30 {
  background: #a8dadc;
  border-radius: 10px;
  border-style: solid;
  border-color: #000000;
  border-width: 2px;
  width: 1120px;
  height: 645px;
  position: absolute;
  left: calc(50% - 560px);
  top: 0px;
  box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.25);
}

.thay-i-th-ng-tin-kho-n-thu {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 40px;
  line-height: 150%;
  font-weight: 700;
  position: absolute;
  left: calc(50% - 276px);
  top: calc(50% - 272.5px);
  width: 551px;
  height: 60px;
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
  left: 295px;
  top: 524px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.c-p-nh-t {
  color: #ffffff;
  text-align: center;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 28px;
  line-height: 150%;
  font-weight: 600;
  position: absolute;
  left: calc(50% - 53.39px);
  top: calc(50% - -221.5px);
  width: 119.78px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.l-do {
  position: absolute;
  inset: 0;
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
  width: 516px;
  height: 142px;
  position: absolute;
  left: 423px;
  top: 186px;
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

.t-ch-c-ph-c-tr-ng-tr-ng-cho-c-c-ch-u-thi-u-nhi-trong-t-a-nh {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "Raleway-Regular", sans-serif;
  font-size: 17.707317352294922px;
  line-height: 26.56px;
  font-weight: 400;
  position: relative;
  flex: 1;
}

.m-t {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 150px;
  top: 186px;
}

.icon-x-letter {
  height: auto;
  position: absolute;
  right: 3.04%;
  left: 94.11%;
  width: 2.86%;
  bottom: 89.77%;
  top: 5.27%;
  height: 4.96%;
  overflow: visible;
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
  top: 353px;
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
  top: 138px;
}

.dropdown {
  display: flex;
  flex-direction: column;
  gap: 4.44px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 250px;
  height: 48px;
  position: absolute;
  left: 423px;
  top: 346px;
}

.frame4 {
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

.frame5 {
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
  left: 717px;
  top: 346px;
}

.arrow-drop-down2 {
  flex-shrink: 0;
  width: 26.63px;
  height: 26.63px;
  position: relative;
  overflow: visible;
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
  top: calc(50% - 183.46px);
}

.rectangle-3-2 {
  background: var(--primary, #457b9d);
  border-radius: 14px;
  width: 18.72px;
  height: 18.8px;
  position: absolute;
  left: 428.2px;
  top: calc(50% - 178.23px);
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
  top: 139.04px;
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
  top: calc(50% - 184.5px);
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
  top: 138px;
  width: 103.97px;
  height: 29.25px;
}
</style>
