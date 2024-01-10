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
        { image: 'https://th.bing.com/th/id/OIP.J6wux5CxkDDF-p4CTCrzSwHaE8?rs=1&pid=ImgDetMain', title: 'Thông báo Lên lịch Vệ sinh Khu vực chung', text: 'Chào cư dân căn hộ D102, chúng tôi thông báo về lịch trình làm vệ sinh khu vực chung trong tháng này. Đề nghị mọi người hợp tác để đảm bảo sự sạch sẽ và thoải mái cho mọi người.', date: new Date('2023-05-09'), isChecked: false },
        { image: 'https://bcp.cdnchinhphu.vn/Uploaded/nguyenthiphuongmai/2020_08_28/nuoc.jpg ', title: 'Thông báo về Lịch cung cấp Nước sạch', text: 'Chào gia đình ông Nguyễn Văn A, chúng tôi thông báo về lịch cung cấp nước sạch trong thời gian sửa chữa hệ thống. Vui lòng dựa vào lịch trình để chuẩn bị. Cảm ơn sự hợp tác của gia đình!', date: new Date('2023-10-30'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.oucQAeDQk6QGmoM49_Fb9QAAAA?rs=1&pid=ImgDetMain ', title: 'Thông báo về Cuộc kiểm tra An toàn Điện', text: 'Chào ông Trần Thị B, chúng tôi sẽ tiến hành cuộc kiểm tra an toàn điện tại căn hộ của ông vào ngày 10/11. Vui lòng tắt các thiết bị điện trong thời gian kiểm tra. Xin cảm ơn sự hợp tác của ông!', date: new Date('2023-11-08'), isChecked: false },
        { image: ' https://setupphonggym.vn/wp-content/uploads/2020/09/mau-thiet-ke-phong-gym-dep-768x576.jpg', title: 'Thông báo về Lịch sử dụng Phòng gym', text: 'Chào gia đình bà Lê Văn C, thông báo về lịch sử dụng phòng gym cho cư dân trong khu chung cư. Vui lòng tuân thủ để đảm bảo mọi người sử dụng được công bằng. Cảm ơn sự hợp tác của gia đình!', date: new Date('2023-10-01'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.zlG1QNHzCbFD7nGlrm59ogHaEh?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc kiểm tra An ninh', text: 'Chào ông Nguyễn Thị D, chúng tôi sẽ tiến hành cuộc kiểm tra an ninh vào ngày 20/11. Mong ông hợp tác cung cấp thông tin và hỗ trợ để đảm bảo an toàn trong khu chung cư. Xin cảm ơn sự hợp tác của ông!', date: new Date('2023-11-12'), isChecked: false },
        { image: 'https://lsx.vn/wp-content/uploads/2022/05/Mau-giay-moi-hop-to-dan-pho.jpg ', title: 'Thông báo về Cuộc họp Cư dân', text: 'Chào gia đình bà Nguyễn Văn E, thông báo về cuộc họp cư dân diễn ra vào lúc 19h ngày 25/11 tại phòng họp tầng 1. Vui lòng tham gia để thảo luận về các vấn đề quan trọng. Cảm ơn sự hợp tác của gia đình!', date: new Date('2023-11-18'), isChecked: true },
        { image: ' https://gotrangtri.vn/wp-content/uploads/2020/09/trang-tri-giang-sinh-cho-cua-hang-18.jpg', title: 'Thông báo về Cuộc thi Trang trí Giáng sinh', text: 'Chào gia đình ông Nguyễn Thị F, chúng tôi tổ chức cuộc thi trang trí Giáng sinh. Vui lòng đăng ký tham gia để tạo không khí vui tươi và ấm áp trong khu chung cư. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-12-05'), isChecked: false },
        { image: ' https://th.bing.com/th/id/OIP.WyP5N0wAHpTO5UV_LKDxmAHaLL?rs=1&pid=ImgDetMain', title: 'Thông báo về Lịch cắt điện', text: 'Chào ông Trần Thị G, thông báo về lịch cắt điện định kỳ để bảo dưỡng hệ thống. Mong ông thông cảm và chuẩn bị trước. Cảm ơn sự hợp tác của ông!', date: new Date('2023-09-25'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.uIOjaDBmJig4wzQvPPOFuQAAAA?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc họp Ban quản lý', text: 'Chào gia đình bà Lê Văn H, thông báo về cuộc họp Ban quản lý diễn ra vào lúc 15h ngày 30/11 tại phòng họp tầng 2. Vui lòng tham gia để thảo luận về quản lý và phát triển khu chung cư. Cảm ơn sự hỗ trợ của gia đình!', date: new Date('2023-11-25'), isChecked: false },
        { image: ' https://i.ytimg.com/vi/mIvsqIDJli0/maxresdefault.jpg', title: 'Thông báo về Cuộc thi Nghệ thuật 3D', text: 'Chào gia đình ông Nguyễn Văn I, chúng tôi tổ chức cuộc thi nghệ thuật 3D. Vui lòng tham gia để thể hiện tài năng và sáng tạo của mình. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-12-10'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.ngCD_XyprXJAr1g5kF8kTQHaFK?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc thi Ảnh cộng đồng', text: 'Chào gia đình bà Nguyễn Văn K, chúng tôi tổ chức cuộc thi ảnh cộng đồng. Vui lòng gửi những khoảnh khắc đẹp và ý nghĩa trong khu chung cư để chia sẻ với mọi người. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-12-20'), isChecked: false },
        { image: ' https://th.bing.com/th/id/OIP.FEG53zWszolDnna11wUfjQEsDo?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc thi Sáng tạo Cộng đồng', text: 'Chào gia đình ông Nguyễn Văn L, chúng tôi tổ chức cuộc thi sáng tạo cộng đồng. Hãy đóng góp ý kiến và ý tưởng để cùng nhau phát triển khu chung cư. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-12-25'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.LrLkYEIpC6oCDm-6RA9pywHaE8?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc thi Trang trí Phòng ốc', text: 'Chào gia đình bà Lê Văn M, chúng tôi tổ chức cuộc thi trang trí phòng ốc để tạo không khí mới mẻ và thoải mái trong từng căn hộ. Vui lòng tham gia để biến không gian sống thành nơi ấm áp và độc đáo. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-11-05'), isChecked: false },
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
  font-size: 200%;
  color: #1D3557;
}

.text-wrapper {
  height: fit-content;
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