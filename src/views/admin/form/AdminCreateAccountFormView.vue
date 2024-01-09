<template>
  <div class="admin-t-o-t-i-kho-n-m-i">
    <div class="rectangle-30"></div>
    <div class="t-o-t-i-kho-n-m-i">Tạo tài khoản mới</div>
    <div class="group-n-btn">
      <div class="rectangle-23"></div>
      <button class="rectangle-23">Tạo mới</button>
    </div>
    <div class="t-n-t-i-kho-n">Tên tài khoản</div>
    <div class="text-field">
      <div class="text-field2">
        <div class="frame">
          <div class="frame2"></div>
          <div class="frame3">
            <input class="theanhnguyen-gmail-com" placeholder="theanhnguyen@gmail.com">
          </div>
        </div>
      </div>
    </div>
    <div class="text-field3">
      <div class="text-field2">
        <div class="frame">
          <div class="frame2"></div>
          <div class="frame3">
            <input type="password" class="xxxxxxxxx">
          </div>
        </div>
      </div>
    </div>
    <div class="text-field4">
      <div class="text-field2">
        <div class="frame">
          <div class="frame2"></div>
          <div class="frame3">
            <input class="nguy-n-th-anh" placeholder="Nguyễn Thế Anh">
          </div>
        </div>
      </div>
    </div>
    <div class="ng-i-d-ng">Người dùng</div>
    <div class="ch">Chế độ</div>
    <div class="m-t-kh-u">Mật khẩu</div>
    <div class="ch-c-n-ng">Chức năng</div>
    <div class="filter-dropdown-type">
      <div class="dropdown">
        <div class="frame">
          <div class="frame8">
            <select class="t-nguy-n">
              <option>
                Thông báo riêng
              </option>
              <option>
                Thông báo riêng
              </option>
              <option>
                Thông báo riêng
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="radio-button-group">
    <div class="k-ch-ho-t">Kích hoạt</div>
    <div class="t-t">Tắt</div>
    <input type="radio" id="radio-1" name="radio" class="rectangle-3-1" checked/>
    <input type="radio" id="radio-2" name="radio" class="rectangle-3-12"/>
  </div>


</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */

export default {
  name: "AdminTOTIKhoNMI",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {};
  },
};
</script>
<style scoped>
.admin-t-o-t-i-kho-n-m-i,
.admin-t-o-t-i-kho-n-m-i * {
  box-sizing: border-box;
}

.admin-t-o-t-i-kho-n-m-i {
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

.t-o-t-i-kho-n-m-i {
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
  color: #ffffff;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 24px;
}

.t-o-m-i {
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

.t-n-t-i-kho-n {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 94px;
  top: 183px;
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
  top: calc(50% - 150.5px);
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
  border:none;
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

.theanhnguyen-gmail-com {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "Raleway-Regular", sans-serif;
  font-size: 17.707317352294922px;
  line-height: 26.56px;
  font-weight: 400;
  position: relative;
  flex: 1;
  z-index: 1;
  border:none;
}

.text-field3 {
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  right: 8.48%;
  left: 65.45%;
  width: 26.08%;
  top: calc(50% - 150.5px);
  z-index: 1;
}

.xxxxxxxxx {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "Raleway-Regular", sans-serif;
  font-size: 17.707317352294922px;
  line-height: 26.56px;
  font-weight: 400;
  position: relative;
  flex: 1;
  border:none;
}

.text-field4 {
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
  top: calc(50% - 57.5px);
}

.nguy-n-th-anh {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "Raleway-Regular", sans-serif;
  font-size: 17.707317352294922px;
  line-height: 26.56px;
  font-weight: 400;
  position: relative;
  flex: 1;
  z-index: 1;
  border: none;
}

.ng-i-d-ng {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 94px;
  top: 284px;
}

.ch {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 94px;
  top: 380px;
}

.m-t-kh-u {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 608px;
  top: 183px;
}

.ch-c-n-ng {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 610px;
  top: 283px;
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

.rectangle-3-1 {
  border-radius: 14px;
  border-style: solid;
  border-color: var(--primary, #457b9d);
  border-width: 2px;
  width: 29.11px;
  height: 29.25px;
  position: absolute;
  left: 265px;
  top: 453.04px;
}

.k-ch-ho-t {
  color: var(--primary-base-black, #000000);
  text-align: left;
  font-family: "Raleway-Medium", sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  position: absolute;
  left: 298.27px;
  top: 453.04px;
  width: 103.97px;
  height: 29.25px;
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
  left: 429.28px;
  top: 452px;
}

.t-t {
  color: var(--primary-base-black, #000000);
  text-align: left;
  font-family: "Raleway-Medium", sans-serif;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  position: absolute;
  left: 465.67px;
  top: 453.04px;
  width: 103.97px;
  height: 29.25px;
}

.filter-dropdown-type {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 4.43px;
  align-items: center;
  justify-content: center;
  right: 95px;
  left: 719px;
  width: 103.97px;
  height: 29.25px;
  top: 280px;
  bot: 312px;
  border: none;
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
  border:none;
}

.t-nguy-n {
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
  border:none;
}
.nguy-n-th-anh,
.theanhnguyen-gmail-com,
.xxxxxxxxx,
.t-nguy-n:focus {
  outline: none;
}

.admin-t-o-t-i-kho-n-m-i,
.admin-t-o-t-i-kho-n-m-i * {
  box-sizing: border-box;
}

.frame8 {
  height: 50px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
  background-color: #ffffff;
  border:none;
}

</style>
