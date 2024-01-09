<template>
  <form>
    <div class="admin-edit-th-ng-tin-c-n-h">
      <div class="rectangle-30">
        <button class="close-button" style="z-index: 1000;">
          <font-awesome-icon icon="x" size="2xl" />
        </button>



        <!-- Row 1 -->
        <div>
          <h2>Yêu cầu/kiến nghị</h2>
        </div>

        <!-- Row 2 -->
        <div style="text-align: center; margin-top: 8%;">
          <label>Người nhận: </label>
          <input placeholder="Nhập tên người nhận" type="text" v-model="recipient" />
          <label style="margin-left: 8%;" >Vai trò:</label>
          <select v-model="role">
            <option value="">Chọn</option>
            <option value="ban quản lý">Ban quản lý</option>
            <option value="ban quản trị">Ban quản trị</option>
          </select>
        </div>

        <!-- Row 3 -->
        <div style="text-align: left;margin-top: 2%; margin-left: 17%; ">
          <label>Nội dung:</label>
          <textarea name="textarea" placeholder="Nhập nội dung yêu cầu/kiến nghị" class="big-input"></textarea>
          
        </div>

        <!-- Row 4 -->
        <div style="text-align: center;">
          <button class="new-button" type="submit">Tạo mới</button>
        </div>
      </div>
    </div>


  </form>
</template>
<script>
import { faX } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faX);
export default {
  name: "AdminEditThNgTinCNH",
  components: {},
  props: {},
  data() {
    // quickfix to have components available to pass as props
    return {role: ''};
  },
};
</script>
<style scoped>
.big-input {
  margin-left: 6.4%;
  width: 50%;
  height: 200px;
  
  border-radius: 4.43px;
  border-style: solid;
  border-color: var(--primary, #457b9d);
  border-width: 1.11px;
  
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
 
  position: absolute;
  
}
.new-button {
  text-align: center;
  border-radius: 10px;
  background: var(--Primary, #457B9D);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 544px;
  height: 76px;
  flex-shrink: 0;
  margin-top: 20%;
  margin-left: 28%;
  font-size: 28px
}

h2 {
  margin-top: 5%;
  color: var(--Secondary, #1D3557);
  text-align: center;
  font-family: Raleway;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  /* 60px */
  letter-spacing: -0.88px;
}

input {
  height: 44px;
  margin-left: 4%;
  border-radius: 4.427px;
  border: 1.107px solid var(--Gray-200, #B3B3B3);
  background: var(--Primary-Base-White, #FFF);
}

select {
  border-radius: 4.427px;
  margin-left: 4%;
  border: none;
  height: 44px;
  padding: 13.314px 13.314px 13.314px 17.753px;
  align-items: flex-start;
  gap: 13.314px;
  align-self: stretch;
}

label {
  color: var(--Secondary, #1D3557);

  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  /* 133.333% */
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

.admin-edit-th-ng-tin-c-n-h {
  border-style: solid;
  border-color: #000000;
  border-width: 1px;
  width: 1120px;
  height: 645px;
  position: relative;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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

.t-nguy-n {
  color: var(--gray-100, #666666);
  text-align: left;
  font-family: "BalsamiqSans-Regular", sans-serif;
  font-size: 17.75255012512207px;
  line-height: 26.63px;
  font-weight: 400;
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

.thay-i-th-ng-tin-c-n-h {
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

.tr-ng-th-i {
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

.nh-p-th-ng-tin {
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
  width: 58px;
  height: 32px;
  position: static;
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
  top: 283px;
}

.m-thanh-to-n {
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

.ch-h {
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

.l-thanh-quang {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 746px;
  top: 240px;
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

.t-nguy-n2 {
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

.th-m-c-d-n {
  color: #1d3557;
  text-align: left;
  font-family: "Raleway-SemiBold", sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  position: absolute;
  left: 569px;
  top: 311px;
}</style>
  