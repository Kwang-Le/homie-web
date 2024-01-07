<template>
      <div v-if="isVisible">
        <form> 
    <div class="th-ng-b-o-t-o-th-ng-b-o-m-i-c-d-n">
      <div class="rectangle-30"></div>
      <div class="th-ng-b-o-m-i">Thông báo mới</div>
      <div class="group-n-btn">
        <div class="rectangle-23"></div>
        <button name="Tạo" class="t-o" @click="this.$emit('close-notification')">Tạo</button>
      </div>
      <div class="ti-u">Tiêu đề</div>
      <div class="ti-u2">Tiêu đề</div>
      <div class="n-i-dung-th-ng-b-o">
        Nội dung thông
        <br/>
        báo
      </div>
      <div class="nh-minh-h-a">Ảnh minh họa</div>
      <div class="text-field">
        <div class="frame">
          <div class="frame2">
            <input type="text" placeholder="Nhập tiêu đề thông báo" class="nh-p-ti-u-th-ng-b-o"/>
          </div>
        </div>
      </div>
      <div class="text-field2">
        <div class="frame3">
          <div class="frame2">
            <input type="text" placeholder="Nhập danh sách định danh" class="nh-p-danh-s-ch-nh-danh"/>
          </div>
        </div>
      </div>
      <div class="text-field3">
        <div class="text-field4">
          <div class="frame4">
            <div class="frame5">
                            <textarea name="textarea" placeholder="Nhập nội dung thông báo mới"
                                      class="nh-p-n-i-dung-th-ng-b-o-m-i"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="th-i-gian-ng">Thời gian đăng</div>
      <div class="lo-i-th-ng-b-o">Loại thông báo</div>
      <div class="tr-ng-th-i">Trạng thái</div>
      <button class="close-button" style="z-index: 1000;">
        <font-awesome-icon icon="x" size="2xl" />
  </button>
        <g filter="url(#filter0_d_1102_7547)">
          <path
              d="M36 2.11317L33.8866 0L20 13.8866L6.11336 0L4 2.11317L17.8867 15.9999L4 29.8866L6.11336 31.9998L20 18.1132L33.8866 31.9998L36 29.8866L22.1133 15.9999L36 2.11317Z"
              fill="black"/>
        </g>
        <defs>
          <filter id="filter0_d_1102_7547" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                           result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1102_7547"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1102_7547" result="shape"/>
          </filter>
        </defs>
    

      <div class="dropdown">
        <div class="frame6">
          <div class="frame8">
            <select class="t-nguy-n">
              <option>
                Thông báo riêng
              </option>
              <option>
                Thông báo chung
              </option>
            </select>
            <svg class="arrow-drop-down" width="27" height="27" viewBox="0 0 27 27" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M7.82227 10.8574L13.3699 16.4051L18.9176 10.8574H7.82227Z" fill="#666666"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="dropdown2">
        <div class="frame6">
          <div class="frame8">
            <input type="date" class="t-nguy-n-2">
          </div>
        </div>
      </div>
      <div class="radio-button-group">
        <div class="hi-n">Hiện</div>
        <div class="n">Ẩn</div>
        <input type="radio" id="radio-1" name="radio" class="rectangle-3-1" checked/>
        <input type="radio" id="radio-2" name="radio" class="rectangle-3-12"/>
      </div>
      <div type="file" class="action-button-1">
        <input type="file" id="upload-file" class="rectangle-232">
      </div>
      <label for="upload-file">
        <svg class="upload" width="40" height="40" viewBox="0 0 40 40" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1102_7559)">
            <path
                d="M6.66602 28.334V31.6673C6.66602 32.5514 7.0172 33.3992 7.64233 34.0243C8.26745 34.6495 9.11529 35.0007 9.99935 35.0007H29.9993C30.8834 35.0007 31.7312 34.6495 32.3564 34.0243C32.9815 33.3992 33.3327 32.5514 33.3327 31.6673V28.334"
                stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.666 14.9993L19.9993 6.66602L28.3327 14.9993" stroke="black" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 6.66602V26.666" stroke="black" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_1102_7559">
              <rect width="40" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </label>
    </div>
  </form>
</div>
</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */
import { faX } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faX);
export default {
  name: "ThNgBOTOThNgBOMICDN",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {isVisible: true,};
  },
  methods: {
    closePopup() {
      this.isVisible = false;
    }, },
};
</script>
<style scoped>
.th-ng-b-o-t-o-th-ng-b-o-m-i-c-d-n,
.th-ng-b-o-t-o-th-ng-b-o-m-i-c-d-n * {
  box-sizing: border-box;
}
.close-button {
  
  background: transparent;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: auto;
  position: absolute;
  right: 3.04%;
  left: 94.11%;
  width: 2.86%;
  bottom: 91.77%;
  top: 4.24%;
  height: 3.99%;
  overflow: visible;

}
.th-ng-b-o-t-o-th-ng-b-o-m-i-c-d-n {
  width: 1120px;
  height: 802px;
  position: relative;
}

.rectangle-30 {
  background: #a8dadc;
  border-radius: 10px;
  border-style: solid;
  border-color: #000000;
  border-width: 2px;
  width: 1120px;
  height: 802px;
  position: absolute;
  left: calc(50% - 560px);
  top: 0px;
  box-shadow: 4px 4px 3px 1px rgba(0, 0, 0, 0.25);
}

.th-ng-b-o-m-i {
  color: #1d3557;
  text-align: center;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 40px;
  line-height: 150%;
  font-weight: 700;
  position: absolute;
  left: calc(50% - 275px);
  top: calc(50% - 358px);
  width: 551px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  top: 690px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.t-o {
  color: #ffffff;
  text-align: center;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 28px;
  line-height: 150%;
  font-weight: 600;
  position: absolute;
  left: calc(50% - 60.39px);
  top: calc(50% - -309px);
  width: 119.78px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #457b9d;
  border-radius: 10px;
  width: 544px;
  height: 76px;
  left: 288px;
  top: 690px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  border: none;
  z-index: 1;
}

.ti-u {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 76px;
  top: 145px;
}

.ti-u2 {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 523px;
  top: 222px;
}

.n-i-dung-th-ng-b-o {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 76px;
  top: 405px;
}

.nh-minh-h-a {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 76px;
  top: 591px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.text-field {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: calc(50% - 299px);
  top: calc(50% - 267px);
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
  flex-shrink: 0;
  position: relative;
}

.frame2 {
  padding: 13.28px 17.71px 13.28px 17.71px;
  display: flex;
  flex-direction: row;
  gap: 13.28px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.nh-p-ti-u-th-ng-b-o {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "Raleway-Regular", sans-serif;
  font-size: 17.707317352294922px;
  line-height: 26.56px;
  font-weight: 400;
  position: relative;
  width: 400px;
  height: 27px;
  z-index: 1;
  border: 0px;
}

:focus {
  outline: none;
}


.text-field2 {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 389px;
  position: absolute;
  left: calc(50% - -74px);
  top: calc(50% - 185px);
}

.frame3 {
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
  flex-shrink: 0;
  width: 403px;
  position: relative;
}

.nh-p-danh-s-ch-nh-danh {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "Raleway-Regular", sans-serif;
  font-size: 17.707317352294922px;
  line-height: 26.56px;
  font-weight: 400;
  position: relative;
  width: 100%;
  height: 27px;
  z-index: 1;
  border: 0;
}

:focus {
  outline: none;
}


.text-field3 {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  left: calc(50% - 299px);
  top: calc(50% - -4px);
}

.text-field4 {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 780px;
  position: relative;
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
  height: 150px;
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
  height: 200px;
  position: relative;
}

.nh-p-n-i-dung-th-ng-b-o-m-i {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "Raleway-Regular", sans-serif;
  font-size: 17.707317352294922px;
  line-height: 26.56px;
  font-weight: 400;
  position: relative;
  width: 100%;
  height: 70%;
  z-index: 10;
  resize: none;
  border: 0;
}


:focus {
  outline: none;
}


.th-i-gian-ng {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 76px;
  top: 334px;
}

.lo-i-th-ng-b-o {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 76px;
  top: 222px;
}

.tr-ng-th-i {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 623px;
  top: 331px;
}



.dropdown {
  display: flex;
  flex-direction: column;
  gap: 4.44px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  right: 55.62%;
  left: 23.3%;
  width: 21.07%;
  bottom: 66.33%;
  top: 27.31%;
  height: 6.36%;
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

.frame7 {
  background: var(--white, #ffffff);
  align-self: stretch;
  flex-shrink: 0;
  height: 0px;
  position: relative;
}

.frame8 {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.t-nguy-n {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: var(--android-subtitle-1-font-family,
  "BalsamiqSans-Regular",
  sans-serif);
  font-size: var(--android-subtitle-1-font-size, 16px);
  line-height: var(--android-subtitle-1-line-height, 24px);
  font-weight: var(--android-subtitle-1-font-weight, 400);
  position: relative;
  flex: 1;
  z-index: 1;
  appearance: none;
  height: 100%;
  width: 100%;
  padding-left: 20px;
  border: none;}

:focus {
  outline: none;
}


.t-nguy-n-2 {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: var(--android-subtitle-1-font-family,
  "BalsamiqSans-Regular",
  sans-serif);
  font-size: var(--android-subtitle-1-font-size, 16px);
  line-height: var(--android-subtitle-1-line-height, 24px);
  font-weight: var(--android-subtitle-1-font-weight, 400);
  position: relative;
  flex: 1;
  z-index: 1;
  appearance: none;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  border: none;}

:focus {
  outline: none;
}



.arrow-drop-down {
  flex-shrink: 0;
  top: 10px;
  right: 10px;
  width: 26.63px;
  height: 26.63px;
  position: absolute;
  overflow: visible;
  z-index: 2;
}

.dropdown2 {
  display: flex;
  flex-direction: column;
  gap: 4.44px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  right: 55.62%;
  left: 23.3%;
  width: 21.07%;
  bottom: 53.49%;
  top: 40.15%;
  height: 6.36%;
}

.arrow-drop-down2 {
  flex-shrink: 0;
  top: 10px;
  right: 10px;
  width: 26.63px;
  height: 26.63px;
  position: relative;
  overflow: visible;
}

.radio-button-group {
  position: absolute;
  inset: 0;
}

.hi-n {
  color: #000000;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 64px;
  font-weight: 600;
  position: absolute;
  right: 20%;
  left: 75.36%;
  width: 4.64%;
  bottom: 52.87%;
  top: 39.15%;
  height: 7.98%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.n {
  color: #000000;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 64px;
  font-weight: 600;
  position: absolute;
  right: 7.86%;
  left: 89.38%;
  width: 2.77%;
  bottom: 52.74%;
  top: 39.28%;
  height: 7.98%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.rectangle-3-1 {
  border-radius: 14px;
  border-style: solid;
  border-color: var(--primary, #457b9d);
  border-width: 2px;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 808px;
  top: calc(50% - 71px);
  z-index: 1;
  cursor: pointer;
}

.rectangle-3-2 {
  background: var(--primary, #457b9d);
  border-radius: 14px;
  width: 18px;
  height: 18px;
  position: absolute;
  left: 813px;
  top: calc(50% - 63px);
}

.rectangle-3-12 {
  border-radius: 14px;
  border-style: solid;
  border-color: var(--mono-gray-2, #e1e1e1);
  border-width: 1px;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 965px;
  top: calc(50% - 71px);
  z-index: 1;
  cursor: pointer;
}

.action-button-1 {
  background: var(--cream, #f1faee);
  border-radius: 10px;
  position: absolute;
  right: 67.77%;
  left: 23.3%;
  width: 8.93%;
  bottom: 20.07%;
  top: 72.44%;
  height: 7.48%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

.rectangle-232 {
  position: absolute;
  z-index: -1;
  opacity: 0;
  cursor: pointer;
}

.upload {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 291px;
  top: 591px;
  overflow: visible;
  cursor: pointer;
}
</style>
