<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faTrash); library.add(faCog);
export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
  name: 'AdminNavBar',
  data() {
    return {
      activeLink: 'dashboard',
      filterOptions: {
        'chuc-nang': ['Quản trị', 'Quản lý', 'Cư dân', 'Khác']
      },
      accountList: [
        {
          id: '1',
          username: 'tungominh@gmail.com',
          chucNang: 'Quản trị', // Quản trị, Quản lý, Cư dân
          hoTen: 'Ngô Minh Tú',
          ngayTao: '20/10/2022',
          trangThai: 'Kích hoạt', // Kích hoạt, Tắt
        },
        {
          id: '2',
          username: 'namhoanghai@gmail.com',
          chucNang: 'Quản lý',
          hoTen: 'Hoàng Hải Nam',
          ngayTao: '20/10/2022',
          trangThai: 'Kích hoạt', 
        },
        {
          id: '3',
          username: 'khanhvinhtran@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Trần Vinh Khánh',
          ngayTao: '10/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '4',
          username: 'myhannguyen@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Nguyễn Hàn My',
          ngayTao: '10/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '5',
          username: 'quangthanhle@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Lê Thanh Quang',
          ngayTao: '10/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '6',
          username: 'minhthanhnguyen@gmail.com',
          chucNang: 'Khác',
          hoTen: 'Nguyễn Minh Thành',
          ngayTao: '11/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '7',
          username: 'hongphuongtran@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Trần Hồng Phương',
          ngayTao: '12/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '8',
          username: 'thanhhuynh@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Huỳnh Thanh',
          ngayTao: '13/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '9',
          username: 'thanhnguyen@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Nguyễn Thanh',
          ngayTao: '14/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '10',
          username: 'thanhle@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Lê Thanh',
          ngayTao: '15/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '11',
          username: 'thanhtran@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Trần Thanh',
          ngayTao: '16/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '12',
          username: 'thanhvu@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Vũ Thanh',
          ngayTao: '17/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '13',
          username: 'thanhpham@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Phạm Thanh',
          ngayTao: '18/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '14',
          username: 'thanhnguyen2@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Nguyễn Thanh',
          ngayTao: '19/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '15',
          username: 'thanhle2@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Lê Thanh',
          ngayTao: '20/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '16',
          username: 'thanhtran2@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Trần Thanh',
          ngayTao: '21/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '17',
          username: 'thanhvu2@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Vũ Thanh',
          ngayTao: '22/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '18',
          username: 'thanhpham2@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Phạm Thanh',
          ngayTao: '23/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '19',
          username: 'thanhnguyen3@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Nguyễn Thanh',
          ngayTao: '24/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '20',
          username: 'thanhle3@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Lê Thanh',
          ngayTao: '25/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '21',
          username: 'thanhtran3@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Trần Thanh',
          ngayTao: '26/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '22',
          username: 'thanhvu3@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Vũ Thanh',
          ngayTao: '27/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '23',
          username: 'thanhpham3@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Phạm Thanh',
          ngayTao: '28/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '24',
          username: 'thanhnguyen4@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Nguyễn Thanh',
          ngayTao: '29/12/2023',
          trangThai: 'Kích hoạt',
        },
        {
          id: '25',
          username: 'thanhle4@gmail.com',
          chucNang: 'Cư dân',
          hoTen: 'Lê Thanh',
          ngayTao: '30/12/2023',
          trangThai: 'Kích hoạt',
        }
      ],
      selectedAccountFrame: 1,
      selectedAccountRow: null,
      AccountFilterSelection:{
        username: null,
        chucNang: null, // Quản trị, Quản lý, Cư dân, Khác
        trangThai: null // Kích hoạt, Tắt
      }
    }
  },
  computed: {
    totalPagesAccount() {
      return Math.ceil(this.accountList.length / 10)
    },
    selectedAccountList() {
      return this.accountList.slice((this.selectedAccountFrame - 1) * 10, this.selectedAccountFrame * 10)
    },
    isAccountFiltered(){
      return this.AccountFilterSelection.username !== null || this.AccountFilterSelection.chucNang !== null || this.AccountFilterSelection.trangThai !== null
    }
  },
  methods: {
    // TODO: load data using pinata
    loadData() {
      // do smthing
    },
    loadAllData() {
      // do smthing
    },
    clearFilter(){
      // do smthing
    },
    handleAccountOnClickSetting(id){
      console.log("Account " + id + " 's setting is clicked")
    },
    handleAccountOnClickDelete(id){
      console.log("Account" + id + " 's delete is clicked")
    },
  }
}
</script>

<template>
  <div id="accountMainPane" class="container-fluid">
    <div class="row align-items-start">
      <div class="col">
        <div class="row">
          <table id="accountTable" class="table table-hover">
            <thead class="table-light">
              <tr>
                <th scope="col">id</th>
                <th scope="col">Username</th>
                <th scope="col">Họ và tên</th>
                <th scope="col">Chức năng</th>
                <th scope="col">Ngày tạo</th>
                <th scope="col">Trạng thái</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Account in selectedAccountList" 
              :key="Account.id"
              @click="selectedAccountRow = selectedAccountRow === Account.id ? null : Account.id"
              :class="{ 'table-secondary': selectedAccountRow === Account.id}">
                <th scope="row">{{ Account.id }}</th>
                <td>{{ Account.username }}</td>
                <td>{{ Account.hoTen }}</td>
                <td>{{ Account.chucNang }}</td>
                <td>{{ Account.ngayTao }}</td>
                <td>{{ Account.trangThai }}</td>
                <td>
                  <button class="btn btn-primary" @click="handleAccountOnClickDelete(Account.id)">
                    <font-awesome-icon icon="fa-cog" size="m" />
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger" @click="handleAccountOnClickSetting(Account.id)">
                    <font-awesome-icon icon="fa-trash" size="m" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div id="AccountPagination" class="row justify-content-end">
          <div class="col"></div>
          <div class="col-md-auto">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <font-awesome-icon icon="angle-left" size="l" />
                  </a>
                </li>
                <li
                  class="page-item"
                  v-for="page in totalPagesAccount"
                  :key="page"
                  :class="{
                    chosen: page === selectedAccountFrame,
                    active: page === selectedAccountFrame
                  }"
                >
                  <a class="page-link" href="#" v-on:click="selectedAccountFrame = page">{{
                    page
                  }}</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <font-awesome-icon icon="angle-right" size="l" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div id="AccountActionBtnGroup" class="row justify-content-evenly">
          <div class="col">
            <button id="AccountCreateNewBtn" type="button" class="btn btn-action btn-primary">Tạo mới</button>
          </div>
          <div class="col">
          </div>
          <div class="col">
          </div>
        </div>

      </div>
      <div class="col-md-auto">

        <!-- Filter table -->
        <div class="filter-div container">
          <!-- Search username account -->
          <div class="filterField">
            <label
              for="searchUsernameAccount"
              style="font-size: medium; font-weight: bold; color: black"
              >Tìm tài khoản</label
            >
            <input
              type="text"
              class="form-control"
              id="searchUsernameAccount"
              placeholder="nhập username"
            />
          </div>
          <!-- Filter Trạng thái tài khoản -->
          <div class="filterField">
            <label for="AccountStatusRadioGroup"
              style="font-size: medium; font-weight: bold; color: black"
              >Trạng thái</label
            >
            <div id="AccountStatusRadioGroup" class="row justify-content-evenly">
              <div class="col-4 form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="closeRadio"
                />
                <label
                  class="form-check-label"
                  for="flexRadioDefault1"
                  style="font-size: medium; font-weight: normal; color: black"
                >
                  Kích hoạt
                </label>
              </div>
              <div class="col-4 form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="openRadio"
                />
                <label
                  class="form-check-label"
                  for="flexRadioDefault2"
                  style="font-size: medium; font-weight: normal; color: black"
                >
                  Tắt
                </label>
              </div>
            </div>
          </div>

          <!-- Filter chuc nang account -->
          <div class="filterField">
            <div class="row justify-content-start">
              <div class="col-5">
                <label
                  for="select-account-chuc-nang"
                  style="font-size: medium; font-weight: bold; color: black"
                  >Chức năng</label
                >
              </div>
              <div class="col-7">
                <select id="select-account-chuc-nang" class="form-select">
                  <option selected>Chức năng</option>
                  <option v-for="option in filterOptions['chuc-nang']" :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- Handle bằng việc truyền param vào loadData(), nhấn xóa -> loadAllData() -->

        <div class="row filter-btn-group justify-content-evenly">
            <div class="col-2">
              <button type="button" class="btn btn-md btn-danger" @click="loadAllData" :disabled="!isAccountFiltered">
                Xóa
              </button>
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-md btn-primary" @click="loadData" >
                Lọc
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.filter-div {
  width: 339px;
  height: 530px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--Primary-Base-White, #fff);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
}
.filterField {
  padding-top: 20px;
  padding-bottom: 20px;
}
.table tr {
  height: 55px;
}
.btn.btn-action {
  width: 300px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
}
.btn.btn-primary {
  background: #457b9d;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.btn.btn-info {
  background: #1d3557;
  border: none;
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.btn.btn-danger {
  background: #e63946;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.row.filter-btn-group {
  padding-top: 40px;
  padding-bottom: 20px;
}
.nav-tabs .nav-link{
  background: rgba(128, 128, 128, 0.50);
}
.table{
  font-family: 'Raleway:wght@300', sans-serif;
  font-size: 16px;
}
#accountMainPane {
  padding-top: 60px;
}
</style>