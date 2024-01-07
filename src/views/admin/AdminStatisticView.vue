<script>
export default {
  name: 'AdminNavBar',
  data() {
    return {
      activeLink: 'dashboard',
      filterOptions: {
        'khoan-thu': ['Đóng góp', 'Thu phí'],
        'can-ho': ['Trống', 'Cho thuê', 'Bán'],
        'cu-dan': ['Đã xác thực', 'Chưa xác thực']
      },
      khoanThuList: [
        {
          id: '1',
          maKhoanThu: 'KT001',
          tenKhoanThu: 'Đóng góp tháng 1',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/01/2021',
          tienDo: '100%',
          trangThai: 'Đóng'
        },
        {
          id: '2',
          maKhoanThu: 'KT002',
          tenKhoanThu: 'Đóng góp tháng 2',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/02/2021',
          tienDo: '100%',
          trangThai: 'Mở'
        },
        {
          id: '3',
          maKhoanThu: 'KT003',
          tenKhoanThu: 'Đóng góp tháng 3',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/03/2021',
          tienDo: '100%',
          trangThai: 'Đóng'
        },
        {
          id: '4',
          maKhoanThu: 'KT004',
          tenKhoanThu: 'Đóng góp tháng 4',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/04/2021',
          tienDo: '100%',
          trangThai: 'Mở'
        },
        {
          id: '5',
          maKhoanThu: 'KT005',
          tenKhoanThu: 'Đóng góp tháng 5',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/05/2021',
          tienDo: '100%',
          trangThai: 'Đóng'
        },
        {
          id: '6',
          maKhoanThu: 'KT006',
          tenKhoanThu: 'Đóng góp tháng 6',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/06/2021',
          tienDo: '100%',
          trangThai: 'Mở'
        },
        {
          id: '7',
          maKhoanThu: 'KT007',
          tenKhoanThu: 'Đóng góp tháng 7',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/07/2021',
          tienDo: '100%',
          trangThai: 'Đóng'
        },
        {
          id: '8',
          maKhoanThu: 'KT008',
          tenKhoanThu: 'Đóng góp tháng 8',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/08/2021',
          tienDo: '100%',
          trangThai: 'Mở'
        },
        {
          id: '9',
          maKhoanThu: 'KT009',
          tenKhoanThu: 'Đóng góp tháng 9',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/09/2021',
          tienDo: '100%',
          trangThai: 'Đóng'
        },
        {
          id: '10',
          maKhoanThu: 'KT010',
          tenKhoanThu: 'Đóng góp tháng 10',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/10/2021',
          tienDo: '100%',
          trangThai: 'Mở'
        },
        {
          id: '11',
          maKhoanThu: 'KT011',
          tenKhoanThu: 'Đóng góp tháng 11',
          loaiKhoanThu: 'Đóng góp',
          ngayTao: '01/11/2021',
          tienDo: '100%',
          trangThai: 'Đóng'
        }
      ],
      selectedKhoanThuFrame: 1,
      selectedKhoanThuRow: null,
      canHoList: [
        {
          id: '1',
          maCanHo: 'P101',
          tang: '1',
          trangThai: 'CHO THUÊ',
          dinhDanhChuHo: '20205226',
          ngayGhiNhan: '01/01/2021'
        },
        {
          id: '2',
          maCanHo: 'P102',
          tang: '1',
          trangThai: 'CHO THUÊ',
          dinhDanhChuHo: '20205226',
          ngayGhiNhan: '01/01/2021'
        },
        {
          id: '3',
          maCanHo: 'P103',
          tang: '1',
          trangThai: 'CHO THUÊ',
          dinhDanhChuHo: '20205226',
          ngayGhiNhan: '01/01/2021'
        }
      ],
      cuDanList: [
        {
          id: '1',
          hoTen: 'Le Thanh Quang',
          gioiTinh: 'Nam',
          ngaySinh: '28/03/2002',
          trangThai: 'Tam Tru',
          CCCD: '038202000015',
          SĐT: '0852589862'
        },
        {
          id: '2',
          hoTen: 'Le Thanh Quang',
          gioiTinh: 'Nam',
          ngaySinh: '28/03/2002',
          trangThai: 'Tam Tru',
          CCCD: '038202000015',
          SĐT: '0852589862'
        },
        {
          id: '3',
          hoTen: 'Le Thanh Quang',
          gioiTinh: 'Nam',
          ngaySinh: '28/03/2002',
          trangThai: 'Tam Tru',
          CCCD: '038202000015',
          SĐT: '0852589862'
        }
      ]
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.khoanThuList.length / 10)
    },
    selectedKhoanThuList() {
      return this.khoanThuList.slice(
        (this.selectedKhoanThuFrame - 1) * 10,
        this.selectedKhoanThuFrame * 10
      )
    }
  },
  methods: {
    loadData() {
      // do smthing
    },
    loadAllData() {
      // do smthing
    }
  }
}
</script>

<template>
  <!-- table selections -->
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="khoan-thu-tab"
        data-bs-toggle="tab"
        data-bs-target="#khoan-thu"
        type="button"
        role="tab"
        aria-controls="khoan-thu"
        aria-selected="true"
      >
        Khoản thu
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="can-ho-tab"
        data-bs-toggle="tab"
        data-bs-target="#can-ho"
        type="button"
        role="tab"
        aria-controls="can-ho"
        aria-selected="false"
      >
        Căn hộ
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="cu-dan-tab"
        data-bs-toggle="tab"
        data-bs-target="#cu-dan"
        type="button"
        role="tab"
        aria-controls="cu-dan"
        aria-selected="false"
      >
        Cư dân
      </button>
    </li>
  </ul>

  <div class="table-display">
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="khoan-thu"
        role="tabpanel"
        aria-labelledby="khoan-thu-tab"
      >
        <div class="container-fluid">
          <div class="row align-items-start">
            <div class="col">
              <div class="row">
                <table id="khoanThuTable" class="table table table-hover">
                  <thead class="table-light">
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Mã khoản thu</th>
                      <th scope="col">Tên khoản thu</th>
                      <th scope="col">Loại khoản thu</th>
                      <th scope="col">Ngày tạo</th>
                      <th scope="col">Tiến độ</th>
                      <th scope="col">Trạng thái</th>
                      <!-- Các loại khoản thu: đóng góp, thu phí -->
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="khoanThu in selectedKhoanThuList" 
                    :key="khoanThu.id" 
                    @click="selectedKhoanThuRow = selectedKhoanThuRow === khoanThu.id ? null : khoanThu.id"
                    :class="{ 'table-secondary': selectedKhoanThuRow === khoanThu.id }"
                    >
                      <th scope="row">{{ khoanThu.id }}</th>
                      <td>{{ khoanThu.maKhoanThu }}</td>
                      <td>{{ khoanThu.tenKhoanThu }}</td>
                      <td>{{ khoanThu.loaiKhoanThu }}</td>
                      <td>{{ khoanThu.ngayTao }}</td>
                      <td>{{ khoanThu.tienDo }}</td>
                      <td>{{ khoanThu.trangThai }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row justify-content-end">
                <div class="col"></div>
                <div class="col-md-auto">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li
                        class="page-item"
                        v-for="page in totalPages"
                        :key="page"
                        :class="{
                          chosen: page === selectedKhoanThuFrame,
                          active: page === selectedKhoanThuFrame
                        }"
                      >
                        <a class="page-link" href="#" v-on:click="selectedKhoanThuFrame = page">{{
                          page
                        }}</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div id="khoanThuActionBtnGroup" class="row justify-content-evenly">
                <div class="col">
                  <button type="button" class="btn btn-action btn-primary">Xuất báo cáo</button>
                </div>
                <div class="col">
                  <button
                  id="khoanThuDetailBtn"
                  type="button"
                  class="btn btn-action btn-info"
                  :disabled="selectedKhoanThuRow === null"
                >
                  Chi tiết
                </button>
                </div>
                <div class="col">
                  <button
                  id="khoanThuDeleteBtn"
                  type="button"
                  class="btn btn-action btn-danger"
                  :disabled="selectedKhoanThuRow === null"
                >
                  Xóa
                </button>
                </div>
              </div>
            </div>
            <div class="col-md-auto">
              <div class="filter-div container">
                <div class="filterField">
                  <label
                    for="searchNameKhoanThu"
                    style="font-size: medium; font-weight: bold; color: black"
                    >Tên khoản thu</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="searchNameKhoanThu"
                    placeholder="nhập tên khoản thu"
                  />
                </div>
                <div class="filterField">
                  <div class="row justify-content-start">
                    <div class="col-5">
                      <label
                        for="select-khoan-thu-type"
                        style="font-size: medium; font-weight: bold; color: black"
                        >Loại khoản thu</label
                      >
                    </div>
                    <div class="col-7">
                      <select id="select-khoan-thu-type" class="form-select">
                        <option selected>Loại khoản thu</option>
                        <option v-for="option in filterOptions['khoan-thu']" :key="option">
                          {{ option }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="filterField">
                  <label
                    for="statusRadioGroup"
                    style="font-size: medium; font-weight: bold; color: black"
                    >Trạng thái khoản thu</label
                  >
                  <div id="statusRadioGroup" class="row justify-content-evenly">
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
                        Mở
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
                        Đóng
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-evenly">
                  <div class="col-2">
                    <button type="button" class="btn btn-md btn-secondary" @click="loadAllData">
                      Xóa
                    </button>
                  </div>
                  <div class="col-2">
                    <button type="button" class="btn btn-md btn-primary" @click="loadData">
                      Lọc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="can-ho" role="tabpanel" aria-labelledby="can-ho-tab">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Tên căn hộ</th>
              <th scope="col">Tầng</th>
              <th scope="col">Trạng thái</th>
              <!-- Có các trạng thái: TRỐNG, CHO THUÊ, BÁN -->
              <th scope="col">Định danh chủ hộ</th>
              <th scope="col">Ngày ghi nhận</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="CanHo in canHoList" :key="CanHo.id">
              <th scope="row">{{ CanHo.id }}</th>
              <td>{{ CanHo.maCanHo }}</td>
              <td>{{ CanHo.tang }}</td>
              <td>{{ CanHo.trangThai }}</td>
              <td>{{ CanHo.dinhDanhChuHo }}</td>
              <td>{{ CanHo.ngayGhiNhan }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-pane fade" id="cu-dan" role="tabpanel" aria-labelledby="cu-dan-tab">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Giới tính</th>
              <th scope="col">Ngày sinh</th>
              <th scope="col">Trạng thái</th>
              <th scope="col">CCCD</th>
              <th scope="col">SĐT</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="CuDan in cuDanList" :key="CuDan.id">
              <th scope="row">{{ CuDan.id }}</th>
              <td>{{ CuDan.hoTen }}</td>
              <td>{{ CuDan.gioiTinh }}</td>
              <td>{{ CuDan.ngaySinh }}</td>
              <td>{{ CuDan.trangThai }}</td>
              <td>{{ CuDan.CCCD }}</td>
              <td>{{ CuDan.SĐT }}</td>
            </tr>
          </tbody>
        </table>
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
  height: 65px;
}
.btn.btn-action {
  width: 300px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
}
</style>
