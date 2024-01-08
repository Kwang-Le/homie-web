<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCheck); library.add(faTrash); library.add(faEye)
import AdminNotiSearchFilter from '@/components/SearchFilter/AdminNotiSearchFilter_General.vue'
export default {
  name: "CardBox",
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    AdminNotiSearchFilter,
  },
  data() {
    return {
      cards: [
        // Thêm dữ liệu cho các card của bạn ở đây
        { image: 'https://th.bing.com/th/id/R.7527521cf3b8aeb27a3445efce212342?rik=8p36UHVEhxCkDQ&pid=ImgRaw&r=0', title: 'Thông báo Tăng giá tiền điện', text: 'Kính gửi cư dân của căn hộ B302, chúng tôi thông báo về việc điều chỉnh giá tiền điện từ ngày 1/1/2024. Mọi người vui lòng kiểm tra thông tin chi tiết và thảo luận tại cuộc họp cộng đồng sắp tới.', date: new Date('2023-12-28'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.Fp8c4LH58RRIOdV-5hrjAwHaEH?rs=1&pid=ImgDetMain', title: 'Thông báo Sửa chữa Hệ thống nước', text: 'Chào gia đình ông Lê Minh Hòa, chúng tôi thông báo về lịch trình sửa chữa hệ thống cung cấp nước trong khu vực bạn đang sống. Mong rằng quá trình sửa chữa sẽ không gây quấy rối đến sinh hoạt hàng ngày của gia đình.', date: new Date('2023-11-15'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.EzUQc_qT2_PAvSYn2ZDTFQHaFj?rs=1&pid=ImgDetMain', title: 'Thông báo Sự cố Thang máy', text: 'Gửi đến cư dân căn hộ A401, chúng tôi xin thông báo về sự cố thang máy mà bạn đã báo cáo. Chúng tôi đã lên kế hoạch sửa chữa và sẽ cố gắng hoàn tất nhanh chóng để khắc phục tình trạng.', date: new Date('2023-10-02'), isChecked: true },
        { image: 'https://th.bing.com/th/id/R.655c87031af0a9b77e605407ca943ad9?rik=lr8hh6ztlVA6UA&riu=http%3a%2f%2fconganthanhhoa.vn%2fupload%2f81582%2ffck%2ffiles%2fimage0+(14).jpeg&ehk=rI%2fPRX%2fsqBFn%2b0i3Yh8%2bf1qBws4RqBZE6uJ3vg4A9Gk%3d&risl=&pid=ImgRaw&r=0', title: 'Thông báo Lên lịch Kiểm tra An toàn PCCC', text: 'Kính gửi gia đình ông Nguyễn Văn Hoàng, chúng tôi thông báo về việc lên lịch kiểm tra an toàn phòng cháy chữa cháy (PCCC) cho căn hộ của bạn. Xin vui lòng chuẩn bị và hợp tác trong quá trình kiểm tra.', date: new Date('2023-09-18'), isChecked: false },
        { image: 'https://vinsecurity.vn/wp-content/uploads/2023/02/mau-so-truc-bao-ve-7.jpg', title: 'Thông báo Thay đổi Lịch trực Bảo vệ', text: 'Chào cư dân căn hộ C201, chúng tôi thông báo về thay đổi lịch trực của nhân viên bảo vệ. Đề nghị mọi người theo dõi lịch mới và hỗ trợ trong việc duy trì an ninh chung cư.', date: new Date('2023-08-27'), isChecked: true },
        { image: 'https://th.bing.com/th/id/R.793830b022a30971657183e0a2bce6b9?rik=W41alhmY61R9eg&pid=ImgRaw&r=0', title: 'Thông báo Cải thiện Đèn đường', text: 'Kính gửi gia đình bà Trần Thị Mai, chúng tôi thông báo về dự án cải thiện hệ thống đèn đường trong khu vực bạn ở. Mong rằng cải thiện này sẽ tăng cường an toàn và tiện lợi cho mọi người.', date: new Date('2023-07-14'), isChecked: false },
        { image: 'https://daihoi13.dangcongsan.vn/Uploads/Images/2021/2/1/25/BCH_13HH.jpg', title: 'Thông báo Cuộc họp Đại biểu cư dân', text: 'Gửi tới tất cả cư dân chung cư, chúng tôi thông báo về cuộc họp đại biểu cư dân sắp tới. Mọi người được mời tham gia để cùng nhau thảo luận về các vấn đề quan trọng của cộng đồng.', date: new Date('2023-06-30'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.J6wux5CxkDDF-p4CTCrzSwHaE8?rs=1&pid=ImgDetMain', title: 'Thông báo Lên lịch Vệ sinh Khu vực chung', text: 'Chào cư dân căn hộ D102, chúng tôi thông báo về lịch trình làm vệ sinh khu vực chung trong tháng này. Đề nghị mọi người hợp tác để đảm bảo sự sạch sẽ và thoải mái cho mọi người.', date: new Date('2023-05-09'), isChecked: false }
      ],
      // isSelected: false, 
      searchTerm: '',
      status: '',
      date: '',
      filterDate: 'newest'
    };
  },
  computed: {

    filteredCards() {
      let filtered = this.cards;
      //if (!this.searchTerm) {return this.cards;}
      let lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      filtered = filtered.filter(card => card.title.toLowerCase().includes(lowerCaseSearchTerm) || card.text.toLowerCase().includes(lowerCaseSearchTerm) || card.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).includes(lowerCaseSearchTerm));
      if (this.status === 'read') {
        filtered = filtered.filter(card => card.isChecked);
      } else if (this.status === 'unread') {
        filtered = filtered.filter(card => !card.isChecked);
      }
      filtered.sort((a, b) => {
        if (this.date === 'newest') {
          return new Date(b.date) - new Date(a.date);
        } else if (this.date === 'oldest') {
          return new Date(a.date) - new Date(b.date);
        }
      });
      return filtered;
    },

  },

  methods: {
    toggleButton() {
      this.isSelected = !this.isSelected;
    },
    deleteCard(index) {
      this.cards.splice(index, 1);
    },
    formatDate(date) {
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    },
    onSearch(searchTerm) {
      this.searchTerm = searchTerm;
    },
    setStatus(status) {
      this.status = status;
    },
    setDate(date) {
      this.date = date;
    },

    updateReadStatus(card) {
      // Tìm index của card trong mảng cards
      const index = this.cards.findIndex(c => c.id === card.id);

      // Kiểm tra nếu card được tìm thấy
      if (index !== -1) {
        // Cập nhật trạng thái isChecked của card
        this.cards[index].isChecked = card.isChecked;
      }
    },
    onCheckboxChange(event, card) {
      // Ngăn chặn sự kiện mặc định của checkbox
      //event.preventDefault();

      // Đảo ngược trạng thái isChecked của card
      card.isChecked = !card.isChecked;

      // Cập nhật trạng thái "Đã đọc"
      this.updateReadStatus(card);
    },

  },

};
</script>

<template>
  <AdminNotiSearchFilter @search="onSearch" @filterStatus="setStatus" @filterDate="setDate" style="margin-left: 1%;" />
  <div class="card-list" style="overflow-y: auto; height: 100%;width: 100%">
    <div class="card" v-for="(card, index) in filteredCards" :key="index">
      <div class="overlap-group">
        <img class="image" alt="Image" v-bind:src="card.image" />
        <div class="overlap">
          <h1 class="card-title">{{ card.title }}</h1>
          <p class="text-wrapper">{{ card.text }}</p>
          <p class="date-wrapper" style="height: 10px;">{{ formatDate(card.date) }}</p>
        </div>
        <div class="d-flex flex-column">
          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary" v-bind:class="{ active: card.isChecked }">
              <input type="checkbox" v-model="card.isChecked" autocomplete="false" class="checkbox-hidden">
              <font-awesome-icon icon="eye" size="xl" class="icon-padding" />
            </label>
          </div>
          <button class="btn btn-danger trash-button" @click="deleteCard(index)">
            <font-awesome-icon icon="trash" size="xl" />
          </button>
        </div>
      </div>
    </div>
    <!-- </div> -->

  </div>
</template>
<style scoped>
.checkbox-hidden {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.card-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin-top: 10px;
  /* Cho phép cuộn theo chiều dọc */
  /* flex: row; */

}

.btn {
  padding-top: 8px;
}

.trash-button {
  /* Adjust these values to match the size of your btn-group-toggle */
  margin-top: 16px;
  width: 67.208px;
  height: 45.685px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.btn-group-toggle>.btn,
.btn-group-toggle>.btn-group>.btn {
  width: 67.208px;
  height: 45.685px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.btn.active {
  background-color: #457B9D !important;
}

.card {
  width: 98%;
  height: 150px;
  background-color: #fff;
  border-radius: 15px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 4px 4px #00000040;
}

.overlap-group {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
}

.link-to-detail {
  width: 10%;
  height: 20%;
  object-fit: cover;
}

.overlap {
  width: 80%;
  height: 100%;
  margin-left: 50px;
  margin-right: 10px;
}

.card-title {
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  font-size: 28px;
  color: #1D3557;
}

.text-wrapper {
  height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 50px;
  font-family: 'Raleway:wght300', sans-serif;
  font-weight: regular;
  font-size: 16px;
  color: #1D3557;
}

.image {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
}
</style>