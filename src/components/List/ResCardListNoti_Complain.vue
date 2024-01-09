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
        { image: 'https://th.bing.com/th/id/OIP.WFywdZN0cafWKrbhyNmqCwHaE7?rs=1&pid=ImgDetMain', title: 'Phàn nàn từ cư dân Lê Thanh Quang', text: 'Rất mong ban quản lý sớm giải quyết tình trạng vệ sinh để tạo môi trường sống tốt hơn cho cả cộng đồng.', date: new Date('2023-12-28'), isChecked: true },
        { image: 'https://noithatmanhhe.vn/media/25271/1-khong-gian-phong-khach.jpg', title: 'Khiếu nại từ cư dân Trương Văn Hải', text: 'Các hành lang chung cư thiếu ánh sáng, tạo điều kiện nguy hiểm cho cư dân. Mong nhận được sự quan tâm và khắc phục từ phía quản lý.', date: new Date('2023-10-02'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.esLlQLbft1o4DUugXr0qpQHaEL?rs=1&pid=ImgDetMain', title: 'Góp ý từ cư dân Phạm Thị Mai', text: 'Tôi muốn đề xuất cải thiện hệ thống an ninh tại bãi đỗ xe chung cư. Việc này sẽ giúp nâng cao an toàn cho tất cả cư dân.', date: new Date('2023-09-18'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.G6va-GWwlqbhxvSt6dCwwAHaF0?rs=1&pid=ImgDetMain', title: 'Đề nghị của cư dân Lê Văn Đức', text: 'Thang máy thường xuyên gặp sự cố, gây phiền toái cho cư dân. Rất mong được sự ưu tiên và sửa chữa kịp thời.', date: new Date('2023-08-27'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.JUtsLOHyeazhBeg3S7dauwHaEr?rs=1&pid=ImgDetMain', title: 'Thông báo từ cư dân Ngọc Anh', text: 'Cần sửa chữa cấp nước mặt cho căn hộ B204 vì có vấn đề lớn gây ảnh hưởng đến sinh hoạt hàng ngày của cư dân.', date: new Date('2023-07-14'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.WkgnPAAdbJQDyJfibrkCFgHaFM?rs=1&pid=ImgDetMain', title: 'Khiếu nại từ cư dân Bùi Thị Hoa', text: 'Tiếng ồn từ căn hộ lân cận làm ảnh hưởng đến giấc ngủ và cuộc sống hàng ngày. Mong nhận được sự hỗ trợ để giải quyết tình trạng này.', date: new Date('2023-06-30'), isChecked: false },
        { image: 'https://th.bing.com/th/id/R.46bef61a15d2ae79f76dd16e14ad04a0?rik=kjoqzGfAfL3jXA&pid=ImgRaw&r=0', title: 'Yêu cầu của cư dân Vũ Minh Tuấn', text: 'Tôi đề xuất tăng cường dịch vụ giữ xe cho cư dân chung cư. Điều này sẽ giúp giải quyết vấn đề đỗ xe hiệu quả hơn.', date: new Date('2023-05-09'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.Jlhtxy5y5YL78VSJv_GvNwHaEQ?rs=1&pid=ImgDetMain', title: 'Phản ánh từ cư dân Nguyễn Hữu Duy', text: 'Cần chấn chỉnh hành vi gửi thư rác từ tầng trên xuống. Điều này làm ảnh hưởng đến môi trường sống chung và yêu cầu sự quản lý chặt chẽ hơn từ ban quản lý.', date: new Date('2023-04-22'), isChecked: false },
        { image: 'https://timviec365.vn/pictures/news/2020/08/25/rzq1598320753.jpg ', title: 'Gửi ý kiến từ cư dân Trần Thị Hương.', text: ' Đề xuất sắp xếp lại lịch trình thu gom rác để tránh tiếng ồn vào buổi tối.', date: new Date('2023-05-15'), isChecked: true },
        { image: 'https://th.bing.com/th/id/R.170259425a14d5674fdae89cbd031b49?rik=97NpCJv5%2b2YAxw&pid=ImgRaw&r=0', title: 'Phản ánh từ cư dân Lê Văn Anh. ', text: 'Yêu cầu tăng cường an ninh tại khu vực sân thể thao do có người lạ xâm phạm.', date: new Date('2023-04-28'), isChecked: false },
        { image: 'https://th.bing.com/th/id/R.4b590ffae68d6a8eaa3fb95730f3782a?rik=F0gVEPTdV2H78Q&pid=ImgRaw&r=0', title: 'Đề xuất từ cư dân Nguyễn Thị Mai.', text: ' Cần cải thiện chiếu sáng trong khu vực cổng chính để tăng cường an toàn.', date: new Date('2023-04-20'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.OnFLD_JtKgevwJPtfFWVzAHaE7?rs=1&pid=ImgDetMain', title: 'Góp ý từ cư dân Hoàng Minh Tuấn. ', text: 'Đề nghị mở thêm khu vui chơi cho trẻ em để tạo ra môi trường sống tích cực.', date: new Date('2023-03-10'), isChecked: false },
        { image: 'https://th.bing.com/th/id/R.00ca5e1eb7a27663a4e66a3034021685?rik=F6cvdiKE6Bckuw&pid=ImgRaw&r=0 ', title: 'Yêu cầu từ cư dân Vương Thị Lan.', text: ' Cần tăng cường dịch vụ vệ sinh chung cư để duy trì môi trường sạch sẽ.', date: new Date('2023-02-25'), isChecked: true },
        { image: 'https://th.bing.com/th/id/R.e6521ad43e054e6e1885becbf2d8c69a?rik=7JEFxh7VIlYsyg&pid=ImgRaw&r=0 ', title: 'Phản ánh từ cư dân Đỗ Văn Hải.', text: ' Đề nghị kiểm tra và sửa chữa hệ thống cửa cổng an ninh để tránh rủi ro.', date: new Date('2023-01-15'), isChecked: false },
        { image: 'https://th.bing.com/th/id/R.b98b500ff92380b9aba15970b783d344?rik=M3p6e7GNa9Twow&pid=ImgRaw&r=0 ', title: 'Gửi ý kiến từ cư dân Trần Minh Hiếu.', text: ' Yêu cầu tăng cường hệ thống camera giám sát tại khu vực bãi giữ xe.', date: new Date('2022-12-30'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.IBT4FnX-7xgkkoVGlT1n1gFaC0?rs=1&pid=ImgDetMain', title: 'Phản ánh từ cư dân Nguyễn Thị Thu.', text: ' Cần cải thiện kết nối internet chung cư để phục vụ nhu cầu công việc và giải trí.', date: new Date('2022-11-18'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.4zyvXruEaMdmclGnqlJ4JAHaEK?rs=1&pid=ImgDetMain ', title: 'Đề xuất từ cư dân Lê Đình Quang.', text: ' Cần tăng cường hoạt động tập thể cư dân để tạo ra sự gắn kết trong cộng đồng.', date: new Date('2022-10-05'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.SCUsnwJvu9EEMyIKR1vmbwHaD4?rs=1&pid=ImgDetMain', title: 'Góp ý từ cư dân Phạm Thị Nga.', text: ' Yêu cầu tăng cường thông tin liên lạc để cư dân có thể nắm bắt thông tin cộng đồng nhanh chóng.', date: new Date('2022-09-12'), isChecked: false },
        { image: 'https://th.bing.com/th/id/R.5cbb2c77f96489e0ddcb155df69192dd?rik=WN77GwgAGNQevQ&pid=ImgRaw&r=0 ', title: 'Yêu cầu từ cư dân Nguyễn Văn Khánh.', text: ' Đề xuất mở rộng khu vực công viên để cư dân có thêm không gian giải trí và vận động.', date: new Date('2022-08-28'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.MJClMYrXDkW8MWDu41coHgHaEg?rs=1&pid=ImgDetMain ', title: 'Phản ánh từ cư dân Trần Thị Bích.', text: ' Cần tăng cường kiểm soát việc thả rác từ ban công xuống để duy trì môi trường sạch sẽ.', date: new Date('2022-07-10'), isChecked: false },
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
  this.$on('new-card', function(card) {
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