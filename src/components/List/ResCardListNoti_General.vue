<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCheck); library.add(faTrash); library.add(faEye)
import ResNotiSearchFilter from '@/components/SearchFilter/ResNotiSearchFilter.vue'
export default {
  name: "CardBox",
  components: {
    'font-awesome-icon': FontAwesomeIcon,
    ResNotiSearchFilter,
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
        { image: 'https://th.bing.com/th/id/OIP.p1t1Bl7ZS1enB9kP466S-QHaDM?w=1328&h=573&rs=1&pid=ImgDetMain', title: 'Thông báo Hướng dẫn sử dụng khu vực tiện ích', text: 'Ban quản trị cung cấp hướng dẫn chi tiết về cách sử dụng các khu vực tiện ích chung. Hãy đọc kỹ để tận hưởng tốt nhất các tiện ích dành cho cư dân.', date: new Date('2023-04-01'), isChecked: false },
        { image: 'https://th.bing.com/th/id/R.d1d84b9559fb7883cb086a842e4b730e?rik=p8f1jllFULeqWA&pid=ImgRaw&r=0 ', title: 'Thông báo về Chương trình Tập huấn Sơ cứu', text: 'Chúng tôi tổ chức chương trình tập huấn sơ cứu cho cư dân trong khu chung cư. Xin mời mọi người tham gia để nâng cao kiến thức và kỹ năng cần thiết. Thông tin chi tiết sẽ được thông báo sau. Cảm ơn!', date: new Date('2023-11-15'), isChecked: false },
        { image: ' https://th.bing.com/th/id/R.47550656770991d998bcf8b5b4f5fa4d?rik=b0apa6XVrIsdKA&pid=ImgRaw&r=0', title: 'Thông báo về Lịch sử dụng Sân thể thao', text: 'Chúng tôi thông báo về lịch sử dụng sân thể thao chung của khu chung cư. Mọi người vui lòng tuân thủ lịch và giữ gìn sân để mọi người cùng sử dụng được thoải mái. Xin cảm ơn sự hợp tác của mọi người!', date: new Date('2023-10-20'), isChecked: true },
        { image: ' https://cdn.slidesharecdn.com/ss_thumbnails/tp3activ1-161017192347-thumbnail-4.jpg?cb=1476732323', title: 'Thông báo về Cuộc thi Nghệ thuật Graffiti', text: 'Chúng tôi tổ chức cuộc thi nghệ thuật graffiti để trang trí khu chung cư. Mọi người có tài năng và đam mê vui lòng đăng ký để tạo nên không khí mới mẻ và sáng tạo. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-12-01'), isChecked: false },
        { image: ' https://th.bing.com/th/id/OIP.pRJECyvfHj9fMQcoAm8exAHaEK?rs=1&pid=ImgDetMain', title: 'Thông báo về Lịch sử dụng Khu vui chơi trẻ em', text: 'Chúng tôi thông báo về lịch sử dụng khu vui chơi trẻ em trong khu chung cư. Quý phụ huynh vui lòng chú ý đến lịch trình để đảm bảo an toàn và thoải mái cho các em nhỏ. Cảm ơn sự hiểu biết của mọi người!', date: new Date('2023-10-25'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.Nh_OiCIus0q55vnJRUSoBgHaE8?rs=1&pid=ImgDetMain ', title: 'Thông báo về Cuộc thi Ảnh Kỷ niệm', text: 'Chúng tôi tổ chức cuộc thi ảnh kỷ niệm để ghi lại những khoảnh khắc đẹp trong khu chung cư. Mọi người hãy gửi những bức ảnh ý nghĩa của mình để chia sẻ cùng cộng đồng. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-12-08'), isChecked: false },
        { image: 'https://th.bing.com/th/id/R.9d26ffa11e816026b38ae72bce2094ac?rik=JJQpvA8%2bfCt0vw&pid=ImgRaw&r=0 ', title: 'Thông báo về Chương trình Đổi sách', text: 'Chúng tôi khuyến khích mọi người tham gia chương trình đổi sách trong khu chung cư để tạo ra một thư viện cộng đồng đa dạng. Hãy mang sách cũ của bạn đến phòng quản lý để tham gia. Cảm ơn sự ủng hộ của mọi người!', date: new Date('2023-11-18'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.AMpeHreidmOk5mowNAIWhQHaED?rs=1&pid=ImgDetMain', title: 'Thông báo về Lịch cung cấp Dịch vụ Vệ sinh', text: 'Chúng tôi thông báo về lịch cung cấp dịch vụ vệ sinh cho khu chung cư. Mọi người vui lòng giữ cho không gian chung sạch sẽ và thoải mái bằng cách tuân thủ lịch trình. Cảm ơn sự hợp tác của mọi người!', date: new Date('2023-11-22'), isChecked: false },
        { image: ' https://th.bing.com/th/id/OIP.LrLkYEIpC6oCDm-6RA9pywHaE8?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc thi Điều chỉnh Thiết kế Căn hộ', text: 'Chúng tôi tổ chức cuộc thi điều chỉnh thiết kế căn hộ để tạo ra những không gian sống sáng tạo và thoải mái hơn. Mọi người có ý tưởng hãy đăng ký tham gia để đóng góp vào sự phát triển của khu chung cư. Cảm ơn!', date: new Date('2023-12-15'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.dIbmm5C4ZEu9g5tt5_eBNAHaHL?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc thi Tài năng Cộng đồng', text: 'Chúng tôi tổ chức cuộc thi tài năng cộng đồng để tìm kiếm và tôn vinh những tài năng đặc biệt trong khu chung cư. Mọi người hãy đăng ký để chia sẻ tài năng của mình với cộng đồng. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-12-20'), isChecked: false },
        { image: ' https://aftavietnam.com.vn/wp-content/uploads/2021/06/trang-tri-phong-tro-dep-cho-sinh-vien-17.JPG-768x626.jpg', title: 'Thông báo về Cuộc thi Trang trí Phòng ốc', text: 'Chúng tôi tổ chức cuộc thi trang trí phòng ốc để tạo không khí mới mẻ và thoải mái trong từng căn hộ. Mọi người hãy tham gia để biến không gian sống thành nơi ấm áp và độc đáo. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-11-05'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.pfl5qhCisC31YZ6wXJpI0gHaD-?rs=1&pid=ImgDetMain', title: 'Thông báo về Lịch cung cấp Dịch vụ Giao thức An toàn', text: 'Chúng tôi thông báo về lịch cung cấp dịch vụ giao thức an toàn trong khu chung cư. Mọi người vui lòng tuân thủ để đảm bảo an toàn thông tin và giao tiếp trong cộng đồng. Cảm ơn sự hợp tác của mọi người!', date: new Date('2023-11-28'), isChecked: false }
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
    created() {
      this.$on('new-card', function (card) {
        this.cards.push(card);
      });
    },
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
  <ResNotiSearchFilter @search="onSearch" @filterStatus="setStatus" @filterDate="setDate" style="margin-left: 1%;" />
  <div class="card-list" style="overflow-y: auto; height: 90%;width: 100%">
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
  height: 90%;
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
  height: fit-content;
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
  font-size: 200%;
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
  font-size: 110%;
  color: #1D3557;
}

.image {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
}
</style>