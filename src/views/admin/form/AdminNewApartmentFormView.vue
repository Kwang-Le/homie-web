<template>
  <div class="c-n-h-form-ghi-nh-n-s-d-ng-c-n-h-m-i">
    <div class="rectangle-30"></div>
    <div class="frame">
      <div class="frame2"></div>
      <div class="frame3">
        <select class="t-nguy-n">
          <option>Mua</option>
          <option>Thuê</option>
        </select>
      </div>
    </div>

    <div class="ghi-nh-n-c-n-h-m-i">Ghi nhận căn hộ mới</div>
    <div class="group-n-btn">
      <div>
        <button class="rectangle-23" @click="handleClick">Tạo mới</button>
      </div>
    </div>
    <div class="t-ng">Tầng</div>
    <div class="t-i-a-ch">
      <div class="text-field">
        <div class="text-field2">
          <div class="frame2">
            <div>
              <input class="frame5" type="text" placeholder="1234">
            </div>
          </div>
        </div>
      </div>
      <div class="t-i-a-ch2">
        <div class="c-n-h">Căn hộ</div>
      </div>
    </div>
    <div class="ch-h">Chủ hộ</div>
    <div class="lo-i-h-nh">Loại hình</div>
    <svg
        class="icon-x-letter"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_403_12028)">
        <path
            d="M36 2.11317L33.8866 0L20 13.8866L6.11336 0L4 2.11317L17.8867 15.9999L4 29.8866L6.11336 31.9998L20 18.1132L33.8866 31.9998L36 29.8866L22.1133 15.9999L36 2.11317Z"
            fill="black"
        />
      </g>
      <defs>
        <filter
            id="filter0_d_403_12028"
            x="0"
            y="0"
            width="40"
            height="39.9998"
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
              result="effect1_dropShadow_403_12028"
          />
          <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_403_12028"
              result="shape"
          />
        </filter>
      </defs>
    </svg>

    <div class="dropdown">
      <div class="frame6">
        <div class="frame2"></div>
        <div class="frame3">
          <select class="t-nguy-n">
            <option>16</option>
            <option>17</option>
          </select>
        </div>
      </div>
    </div>
    <div class="dropdown2">
      <div class="frame6">
        <div class="frame2"></div>
        <div class="frame3">
          <select class="t-nguy-n">
            <option>1601</option>
            <option>1602</option>
          </select>
        </div>
      </div>
    </div>
    <div class="th-m-nh-n-kh-u">Thêm nhân khẩu</div>
    <div class="frame7">
      <div class="frame3">
        <select class="t-nguy-n">
          <option>Dương Nhật Thành</option>
          <option>Lê Thanh Quang</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */

export default {
  name: "CNHFormGhiNhNSDNgCNHMI",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
  methods: {
    handleClick() {
      console.log('Button clicked!');
      // Add your logic here
    },
  },
};

</script>
<style scoped>
.c-n-h-form-ghi-nh-n-s-d-ng-c-n-h-m-i,
.c-n-h-form-ghi-nh-n-s-d-ng-c-n-h-m-i * {
  box-sizing: border-box;
}

.c-n-h-form-ghi-nh-n-s-d-ng-c-n-h-m-i {
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
  width: 242px;
  position: absolute;
  left: 746px;
  top: 172px;
}

.frame2 {
  background: var(--white, #ffffff);
  align-self: stretch;
  flex-shrink: 0;
  height: 0px;
  position: relative;
}

.frame3 {
  display: flex;
  flex-direction: row;
  gap: 13.31px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.t-nguy-n {
  padding: 13.31px 13.31px 13.31px 17.75px;
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "BalsamiqSans-Regular", sans-serif;
  font-size: 17.75255012512207px;
  line-height: 26.63px;
  font-weight: 400;
  position: relative;
  flex: 1;
  outline: none;

}

T-nguy-n :focus {
  outline: none;
  border: 0;
}

.arrow-drop-down {
  flex-shrink: 0;
  width: 26.63px;
  height: 26.63px;
  position: relative;
  overflow: visible;
}

.ghi-nh-n-c-n-h-m-i {
  color: #1d3557;
  text-align: center;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 40px;
  line-height: 150%;
  font-weight: 700;
  position: absolute;
  left: calc(50% - 276px);
  top: calc(50% - 272.5px);
  width: 551px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.group-n-btn {
  position: static;
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
  z-index: 1;
  color: #ffffff;
  text-align: center;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 28px;
}

.t-ng {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 118px;
  top: 183px;
}

.t-i-a-ch {
  position: absolute;
  inset: 0;
}

.text-field {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  right: 50.26%;
  left: 23.66%;
  width: 26.08%;
  top: calc(50% - -34.5px);
}

.text-field2 {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 292.07px;
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

.nh-p-cccd-ch-h {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "Raleway-Regular", sans-serif;
  font-size: 17.707317352294922px;
  line-height: 26.56px;
  font-weight: 400;
  position: relative;
  flex: 1;
}

.t-i-a-ch2 {
  width: 79px;
  height: 32px;
  position: static;
}

.c-n-h {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 118px;
  top: 283px;
}

.ch-h {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 118px;
  top: 368px;
}

.lo-i-h-nh {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 569px;
  top: 183px;
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

.dropdown {
  display: flex;
  flex-direction: column;
  gap: 4.44px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  right: 62.32%;
  left: 23.66%;
  width: 14.02%;
  bottom: 63.26%;
  top: 28.84%;
  height: 7.91%;
}

.frame6 {
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

.arrow-drop-down2 {
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
  position: absolute;
  right: 62.32%;
  left: 23.66%;
  width: 14.02%;
  bottom: 50.08%;
  top: 42.02%;
  height: 7.91%;
}

.arrow-drop-down3 {
  flex-shrink: 0;
  width: 26.63px;
  height: 26.63px;
  position: relative;
  overflow: visible;
}

.frame7 {
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
  width: 242px;
  position: absolute;
  left: 764px;
  top: 300px;
}

.arrow-drop-down4 {
  flex-shrink: 0;
  width: 26.63px;
  height: 26.63px;
  position: relative;
  overflow: visible;
}

.th-m-nh-n-kh-u {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 569px;
  top: 311px;
}
</style>