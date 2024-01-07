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
        { image: 'https://antoanpccc.com.vn/wp-content/uploads/2018/09/anh-8581.jpg', title: 'Thông báo về Quy định An toàn PCCC', text: 'Chúng tôi xin thông báo về việc cập nhật quy định an toàn phòng cháy chữa cháy (PCCC) trong toàn bộ khu chung cư. Tất cả cư dân đều cần tuân thủ để đảm bảo an toàn cho cả cộng đồng.', date: new Date('2023-11-05'), isChecked: true },
        { image: 'https://th.bing.com/th/id/R.16978593996d4724b47bd622ca869ced?rik=tqaesPd6yG57vw&riu=http%3a%2f%2fbaobariavungtau.com.vn%2fdataimages%2f201609%2foriginal%2fimages1295692_Hoi_LHPN_P12_Don_rac.jpg&ehk=LtdREu7oxQy5x7TuxQYdpBOa5mlnSm5ua5sYtdwholw%3d&risl=&pid=ImgRaw&r=0', title: 'Thông báo Vệ sinh môi trường', text: 'Ban quản trị nhắc nhở mọi người về trách nhiệm duy trì vệ sinh môi trường chung quanh căn hộ và khu vực chung. Mọi người hãy chung tay giữ gìn môi trường sống xanh sạch và đẹp đẽ.', date: new Date('2023-10-15'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.optz4N6twg3nNjjypLvEOwHaE5?rs=1&pid=ImgDetMain', title: 'Thông báo Lịch sửa chữa thang máy', text: 'Chúng tôi thông báo về lịch sửa chữa định kỳ cho hệ thống thang máy trong toàn bộ chung cư. Xin cư dân lưu ý và hợp tác để đảm bảo an toàn khi sử dụng thang máy.', date: new Date('2023-09-25'), isChecked: true },
        { image: 'https://th.bing.com/th/id/R.6702c5dc155911fab5cbcbc97ac1fc69?rik=3H2MvaKikH2XWA&pid=ImgRaw&r=0', title: 'Thông báo Cuộc kiểm tra PCCC', text: 'Cảm ơn sự hợp tác của cư dân trong buổi kiểm tra PCCC diễn ra thành công. Mọi người vui lòng kiểm tra lại trang thiết bị an toàn trong căn hộ để đảm bảo chuẩn bị tốt nhất cho tình huống khẩn cấp.', date: new Date('2023-08-10'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.svHLpJL_2MKzKxnGBOmu1gHaFe?rs=1&pid=ImgDetMain', title: 'Thông báo Vận động giữ gìn an ninh', text: 'Ban quản trị kêu gọi sự chung tay của cư dân trong việc duy trì an ninh tốt nhất cho khu chung cư. Hãy báo ngay bất kỳ hoạt động đáng ngờ nào để chúng ta có một cộng đồng an toàn và hạnh phúc.', date: new Date('2023-07-20'), isChecked: true },
        { image: 'https://th.bing.com/th/id/R.fc4c5fcf5443dda48524cda7a7921b81?rik=tYkI92mK6C1nhA&pid=ImgRaw&r=0', title: 'Thông báo Về việc nâng cấp hệ thống nước', text: 'Chúng tôi thông báo về dự án nâng cấp hệ thống cung cấp nước trong khu vực chung cư. Mong rằng mọi người sẽ thông cảm và hỗ trợ trong quá trình triển khai.', date: new Date('2023-06-05'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.opu5VtYfexVPX4k0onsk0AHaDu?rs=1&pid=ImgDetMain', title: 'Thông báo Sự kiện Hội nghị cư dân', text: 'Chúng tôi hân hạnh thông báo về sự kiện hội nghị cư dân sắp tới. Mọi người được mời tham gia để chia sẻ ý kiến, đề xuất và cùng nhau xây dựng một cộng đồng mạnh mẽ hơn.', date: new Date('2023-05-12'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.p1t1Bl7ZS1enB9kP466S-QHaDM?w=1328&h=573&rs=1&pid=ImgDetMain', title: 'Thông báo Hướng dẫn sử dụng khu vực tiện ích', text: 'Ban quản trị cung cấp hướng dẫn chi tiết về cách sử dụng các khu vực tiện ích chung. Hãy đọc kỹ để tận hưởng tốt nhất các tiện ích dành cho cư dân.', date: new Date('2023-04-01'), isChecked: false }
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
  font-family: 'Raleway', sans-serif;
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