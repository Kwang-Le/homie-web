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
        { image: 'https://fnb.qdc.vn/pictures/catalog/kinh-nghiem/PCCC.jpg ', title: 'Thông báo về Quy định An toàn PCCC', text: 'Chào anh Trần Vinh Khánh, chúng tôi xin thông báo về việc cập nhật quy định an toàn phòng cháy chữa cháy (PCCC) trong toàn bộ khu chung cư. Tất cả cư dân đều cần tuân thủ để đảm bảo an toàn cho cả cộng đồng.', date: new Date('2023-11-05'), isChecked: true },
        { image: 'https://th.bing.com/th/id/R.3ac62df7e5e3e8e243ed5d667786e454?rik=zC291Xuo3q%2fy4A&riu=http%3a%2f%2fdanvan.vn%2fUploads%2f2017%2f9%2f15%2fquangyen040917.jpg&ehk=Fv3yRXqfC2FTKlQ9cu9pDA%2frEf8EfqlC6p8dgqJzN4Q%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', title: 'Thông báo Vệ sinh môi trường', text: 'Chào anh Trần Vinh Khánh, ban quản trị nhắc nhở anh về trách nhiệm duy trì vệ sinh môi trường chung quanh căn hộ B1-205. Anh hãy chung tay giữ gìn môi trường sống xanh sạch và đẹp đẽ.', date: new Date('2023-10-15'), isChecked: false },
        { image: 'https://giadinh.mediacdn.vn/296230595582509056/2023/6/5/lich-cat-dien6-1685936046027138996783.jpg ', title: 'Thông báo về Lịch cắt điện', text: 'Chào cư dân căn hộ B1-205, chúng tôi thông báo về lịch cắt điện định kỳ để bảo dưỡng hệ thống. Mong mọi người thông cảm và chuẩn bị trước. Cảm ơn!', date: new Date('2023-09-25'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.HlZHf8xTE2RQmyPMlBREewHaFi?rs=1&pid=ImgDetMain ', title: 'Thông báo về Sửa chữa Thang máy', text: 'Chào anh Trần Vinh Khánh, thông báo về kế hoạch sửa chữa thang máy tại tòa nhà B1. Anh vui lòng lưu ý và tối ưu hóa việc sử dụng thang máy trong thời gian này. Trân trọng!', date: new Date('2023-09-10'), isChecked: false },
        { image: ' https://th.bing.com/th/id/OIP.zlG1QNHzCbFD7nGlrm59ogHaEh?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc kiểm tra An ninh', text: 'Chào cư dân căn hộ B1-205, chúng tôi sẽ tiến hành cuộc kiểm tra an ninh vào ngày 20/11. Mong mọi người hợp tác cung cấp thông tin và hỗ trợ để đảm bảo an toàn. Xin cảm ơn!', date: new Date('2023-11-12'), isChecked: true },
        { image: ' https://lsx.vn/wp-content/uploads/2022/05/Mau-giay-moi-hop-to-dan-pho.jpg', title: 'Thông báo về Cuộc họp cư dân', text: 'Chào anh Trần Vinh Khánh, thông báo về cuộc họp cư dân diễn ra vào lúc 19h ngày 25/11 tại phòng họp tầng 1. Anh vui lòng tham gia để thảo luận về các vấn đề quan trọng. Cảm ơn!', date: new Date('2023-11-18'), isChecked: false },
        { image: ' https://setupphonggym.vn/wp-content/uploads/2020/09/mau-thiet-ke-phong-gym-dep-768x576.jpg', title: 'Thông báo về Lịch sử dụng Phòng gym', text: 'Chào anh Trần Vinh Khánh, thông báo về lịch sử dụng phòng gym cho cư dân căn hộ B1-205. Anh vui lòng tuân thủ để đảm bảo mọi người sử dụng được công bằng. Xin cảm ơn!', date: new Date('2023-10-01'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.Ogk7MKgo8FvJOGETWxemZQHaFU?rs=1&pid=ImgDetMain', title: 'Thông báo về Cải thiện An ninh', text: 'Chào cư dân căn hộ B1-205, chúng tôi đang triển khai các biện pháp cải thiện an ninh. Anh vui lòng hợp tác và báo cáo mọi hành vi nghi ngờ để bảo vệ cộng đồng. Cảm ơn sự hỗ trợ của anh!', date: new Date('2023-11-28'), isChecked: false },
        { image: ' https://gotrangtri.vn/wp-content/uploads/2020/09/trang-tri-giang-sinh-cho-cua-hang-18.jpg', title: 'Thông báo về Cuộc thi trang trí Giáng sinh', text: 'Chào cư dân căn hộ B1-205, chúng tôi tổ chức cuộc thi trang trí Giáng sinh. Anh vui lòng đăng ký tham gia để tạo không khí vui tươi và ấm áp trong khu chung cư. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-12-05'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.Aj6u0WMIeRRQvi_oEU2HogHaFj?rs=1&pid=ImgDetMain', title: 'Thông báo về Nâng cấp Hệ thống CCTV', text: 'Chào anh Trần Vinh Khánh, chúng tôi sẽ tiến hành nâng cấp hệ thống camera an ninh tại tòa nhà B1. Anh vui lòng chú ý và hỗ trợ để đảm bảo an ninh tốt nhất cho mọi người. Cảm ơn sự hiểu biết của anh!', date: new Date('2023-12-15'), isChecked: false },
        { image: 'https://th.bing.com/th/id/R.860c8c776e281b736091c26ae32f267a?rik=8HqZuN0Ny%2bdIKw&riu=http%3a%2f%2fminhquanginfo864.chiliweb.org%2fwp-content%2fuploads%2f2017%2f03%2fnha-may-nuoc.jpg&ehk=xcfNPQ6UD43A0xPXOBjOje9OF9y4O%2bdyTtakWjVtPu8%3d&risl=&pid=ImgRaw&r=0 ', title: 'Thông báo về Lịch cung cấp Nước sạch', text: 'Chào cư dân căn hộ B1-205, thông báo về lịch cung cấp nước sạch trong thời gian sửa chữa hệ thống. Anh vui lòng dựa vào lịch trình để chuẩn bị. Xin cảm ơn sự hợp tác của mọi người!', date: new Date('2023-10-30'), isChecked: true },
        { image: ' https://th.bing.com/th/id/R.c9c00a004b607fcc9535337067385256?rik=LP5lxacICZZuJg&pid=ImgRaw&r=0', title: 'Thông báo về Đăng ký Sử dụng cổng điện tử', text: 'Chào anh Trần Vinh Khánh, thông báo về việc đăng ký sử dụng cổng điện tử cho cư dân căn hộ B1-205. Anh vui lòng đến phòng quản lý để hoàn tất thủ tục. Cảm ơn sự hợp tác của anh!', date: new Date('2023-09-20'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.ngCD_XyprXJAr1g5kF8kTQHaFK?rs=1&pid=ImgDetMain ', title: 'Thông báo về Cuộc thi Ảnh cộng đồng', text: 'Chào cư dân căn hộ B1-205, chúng tôi tổ chức cuộc thi ảnh cộng đồng. Anh hãy gửi những khoảnh khắc đẹp và ý nghĩa trong khu chung cư để chia sẻ với mọi người. Thông tin chi tiết tại phòng quản lý. Cảm ơn!', date: new Date('2023-12-20'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.GztbIQqwAPvM51ilsD8KrAHaEj?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc kiểm tra An toàn Điện', text: 'Chào anh Trần Vinh Khánh, chúng tôi sẽ tiến hành cuộc kiểm tra an toàn điện tại căn hộ B1-205 vào ngày 10/11. Anh vui lòng tắt các thiết bị điện trong thời gian kiểm tra. Xin cảm ơn sự hợp tác của anh!', date: new Date('2023-11-08'), isChecked: false },
        { image: ' https://th.bing.com/th/id/OIP.uIOjaDBmJig4wzQvPPOFuQAAAA?rs=1&pid=ImgDetMain', title: 'Thông báo về Cuộc họp Ban quản lý', text: 'Chào cư dân căn hộ B1-205, thông báo về cuộc họp Ban quản lý diễn ra vào lúc 15h ngày 30/11 tại phòng họp tầng 2. Anh vui lòng tham gia để thảo luận về quản lý và phát triển khu chung cư. Cảm ơn sự hỗ trợ của anh!', date: new Date('2023-11-25'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.pRJECyvfHj9fMQcoAm8exAHaEK?rs=1&pid=ImgDetMain ', title: 'Thông báo về Kế hoạch Sửa chữa Khu vui chơi trẻ em', text: 'Chào anh Trần Vinh Khánh, thông báo về kế hoạch sửa chữa khu vui chơi trẻ em trong khu chung cư. Anh vui lòng giữ an toàn và tránh tiếp cận khu vực đang được sửa chữa. Cảm ơn sự hiểu biết của anh!', date: new Date('2023-10-05'), isChecked: false },
        { image: ' https://i.ytimg.com/vi/mIvsqIDJli0/maxresdefault.jpg', title: 'Thông báo về Cuộc thi Nghệ thuật 3D', text: 'Chào cư dân căn hộ B1-205, chúng tôi tổ chức cuộc thi nghệ thuật 3D. Anh hãy tham gia để thể hiện tài năng và sáng tạo của mình. Thông tin chi tiết và đăng ký tại phòng quản lý. Cảm ơn sự quan tâm của anh!', date: new Date('2023-12-10'), isChecked: true },
        { image: ' https://th.bing.com/th/id/OIP.kQdxpWL3vgt8WIMssfsrmwHaHM?rs=1&pid=ImgDetMain', title: 'Thông báo về Hướng dẫn Sử dụng Hệ thống Intercom', text: 'Chào anh Trần Vinh Khánh, thông báo về hướng dẫn sử dụng hệ thống intercom tại căn hộ B1-205. Anh vui lòng đến phòng quản lý để nhận thông tin và hỗ trợ nếu cần. Cảm ơn sự hợp tác của anh!', date: new Date('2023-09-15'), isChecked: false },
        { image: ' https://bietthudangcap.vn/wp-content/uploads/2020/10/sanh-tang-1-khach-san-5-sao-3.jpg', title: 'Thông báo về Lịch sử dụng Sảnh tầng 1', text: 'Chào cư dân căn hộ B1-205, thông báo về lịch sử dụng sảnh tầng 1 cho các sự kiện và cuộc họp. Anh vui lòng liên hệ với phòng quản lý để đặt lịch và biết thêm chi tiết. Cảm ơn sự hợp tác của anh!', date: new Date('2023-11-01'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.FEG53zWszolDnna11wUfjQEsDo?rs=1&pid=ImgDetMain ', title: 'Thông báo về Cuộc thi Sáng tạo Cộng đồng', text: 'Chào anh Trần Vinh Khánh, chúng tôi tổ chức cuộc thi sáng tạo cộng đồng. Anh hãy đóng góp ý kiến và ý tưởng để cùng nhau phát triển khu chung cư. Thông tin chi tiết tại phòng quản lý. Cảm ơn sự đóng góp của anh!', date: new Date('2023-12-25'), isChecked: false },],
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