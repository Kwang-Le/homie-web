<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faCheck); library.add(faTrash);
import AdminNotiSearchFilter from '@/components/SearchFilter/AdminNotiSearchFilter.vue'
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
        { title: 'Tết thiếu nhi 2023', text: 'GL301 mang đến cho bạn sự thoải mái cho người sử dụng khi ngồi làm việc liên tục trong nhiều giờ liền. Với thiết kế hiện đại cùng màu sắc đẹp mắt, sản phẩm còn là điểm nhấn cho không gian làm việc của bạn thêm hiện đại và đẳng cấpThiết kế hiện đại cùng màu sắc đẹp mắt, sản phẩm còn là điểm nhấn cho không gian làm việc của bạn thêm hiện đại và đẳng cấp', date: new Date('2002-12-28') },
        { title: 'Thông báo 2', text: 'Nội dung thông báo 2', date: new Date('2002-12-28') },

        { title: 'Thông báo 3', text: 'Nội dung thông báo 2', date: new Date('2002-12-28') },
        { title: 'Thông báo 4', text: 'Nội dung thông báo 2', date: new Date('2002-12-28') },
        { title: 'Muahaha 1', text: 'TNA đao', date: new Date('2002-12-28') },
        { title: 'Muahaha 2', text: 'TNA đao', date: new Date('2002-12-28') },
        { title: 'Muahaha 3', text: 'TNA đao', date: new Date('2002-12-28') },
        { title: 'Muahaha 4', text: 'TNA đao', date: new Date('2002-12-28') },
        // ...
      ],
      // isSelected: false, 
      searchTerm: '',
      status: ''
    };
  },
  computed: {
    filteredCards() {
      let filtered = this.cards;
      // if (!this.searchTerm) {return this.cards;}
      //  let lowerCaseSearchTerm = this.searchTerm.toLowerCase();
      // filtered = filtered.filter(card => card.title.toLowerCase().includes(lowerCaseSearchTerm) || card.text.toLowerCase().includes(lowerCaseSearchTerm) || card.date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).includes(lowerCaseSearchTerm));
      if (this.status === 'read') {
        filtered = filtered.filter(card => card.isChecked);
      } else if (this.status === 'unread') {
        filtered = filtered.filter(card => !card.isChecked);
      }
      return filtered;
    }
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
      event.preventDefault();

      // Đảo ngược trạng thái isChecked của card
      card.isChecked = !card.isChecked;

      // Cập nhật trạng thái "Đã đọc"
      this.updateReadStatus(card);
    },
    // ...
  },

};

</script>

<template>
  <AdminNotiSearchFilter @search="onSearch" @filterStatus="setStatus" style="margin-left: 1%;" />
  <div class="card-list" style="overflow-y: auto; height: 100%;width: 100%">
    <div class="card" v-for="(card, index) in filteredCards" :key="index">
      <div class="overlap-group">
        <img class="image" alt="Image" src="F:\homie-web\src\assets\logo.png" />
        <div class="overlap">
          <h1 class="card-title">{{ card.title }}</h1>
          <p class="text-wrapper">{{ card.text }}</p>
          <p class="date-wrapper" style="height: 10px;">{{ formatDate(card.date) }}</p>
        </div>
        <div class="d-flex flex-column">
          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary">
              <input type="checkbox" v-model="card.isChecked" @change="onCheckboxChange($event, card)"
                autocomplete="false">
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