<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCheck); library.add(faTrash);
import AdminNotiSearchFilter from '@/components/SearchFilter/AdminNotiSearchFilter_Complain.vue'
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
        { image: 'https://th.bing.com/th/id/OIP.WFywdZN0cafWKrbhyNmqCwHaE7?rs=1&pid=ImgDetMain', title: 'Phàn nàn từ cư dân Nguyễn Thị Lan', text: 'Tôi đã gửi đơn khiếu nại về tình trạng vệ sinh khu vực chung trong chung cư. Rất mong ban quản lý sớm giải quyết để tạo môi trường sống tốt hơn cho cả cộng đồng.', date: new Date('2023-11-15'), isChecked: true },
        { image: 'https://noithatmanhhe.vn/media/25271/1-khong-gian-phong-khach.jpg', title: 'Khiếu nại từ cư dân Trương Văn Hải', text: 'Các hành lang chung cư thiếu ánh sáng, tạo điều kiện nguy hiểm cho cư dân. Mong nhận được sự quan tâm và khắc phục từ phía quản lý.', date: new Date('2023-10-02'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.esLlQLbft1o4DUugXr0qpQHaEL?rs=1&pid=ImgDetMain', title: 'Góp ý từ cư dân Phạm Thị Mai', text: 'Tôi muốn đề xuất cải thiện hệ thống an ninh tại bãi đỗ xe chung cư. Việc này sẽ giúp nâng cao an toàn cho tất cả cư dân.', date: new Date('2023-09-18'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.G6va-GWwlqbhxvSt6dCwwAHaF0?rs=1&pid=ImgDetMain', title: 'Đề nghị của cư dân Lê Văn Đức', text: 'Thang máy thường xuyên gặp sự cố, gây phiền toái cho cư dân. Rất mong được sự ưu tiên và sửa chữa kịp thời.', date: new Date('2023-08-27'), isChecked: false },
        { image: 'https://th.bing.com/th/id/OIP.JUtsLOHyeazhBeg3S7dauwHaEr?rs=1&pid=ImgDetMain', title: 'Thông báo từ cư dân Ngọc Anh', text: 'Cần sửa chữa cấp nước mặt cho căn hộ B204 vì có vấn đề lớn gây ảnh hưởng đến sinh hoạt hàng ngày của cư dân.', date: new Date('2023-07-14'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.WkgnPAAdbJQDyJfibrkCFgHaFM?rs=1&pid=ImgDetMain', title: 'Khiếu nại từ cư dân Bùi Thị Hoa', text: 'Tiếng ồn từ căn hộ lân cận làm ảnh hưởng đến giấc ngủ và cuộc sống hàng ngày. Mong nhận được sự hỗ trợ để giải quyết tình trạng này.', date: new Date('2023-06-30'), isChecked: false },
        { image: 'https://th.bing.com/th/id/R.46bef61a15d2ae79f76dd16e14ad04a0?rik=kjoqzGfAfL3jXA&pid=ImgRaw&r=0', title: 'Yêu cầu của cư dân Vũ Minh Tuấn', text: 'Tôi đề xuất tăng cường dịch vụ giữ xe cho cư dân chung cư. Điều này sẽ giúp giải quyết vấn đề đỗ xe hiệu quả hơn.', date: new Date('2023-05-09'), isChecked: true },
        { image: 'https://th.bing.com/th/id/OIP.Jlhtxy5y5YL78VSJv_GvNwHaEQ?rs=1&pid=ImgDetMain', title: 'Phản ánh từ cư dân Nguyễn Hữu Duy', text: 'Cần chấn chỉnh hành vi gửi thư rác từ tầng trên xuống. Điều này làm ảnh hưởng đến môi trường sống chung và yêu cầu sự quản lý chặt chẽ hơn từ ban quản lý.', date: new Date('2023-04-22'), isChecked: false }
        // ...
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
              <input type="checkbox" v-model="card.isChecked" @change="onCheckboxChange($event, card)"
                autocomplete="false">
              <!-- <label class="checkbox-container">
    <input type="checkbox" v-model="card.isChecked" @change="onCheckboxChange" />
    <span class="checkmark" :class="{ checked: card.isChecked }"></span>
  </label> -->
              <font-awesome-icon icon="check" size="2xl" class="icon-padding" />
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
  background-color: #007B40 !important;
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