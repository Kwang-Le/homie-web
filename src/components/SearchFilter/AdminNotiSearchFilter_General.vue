<template>
    <div>
      <input type="text" @keyup.enter="emitSearchTerm" class= "search-term" v-model="searchTerm" placeholder=" Nhập tiêu đề..."/>
      <button class="btn btn-primary" @click="emitSearchTerm" type="submit" style="margin-left: 10px; background-color: #457B9D; color: #F1FAEE;">Tìm kiếm</button>
      <select v-model="status" class = "status" @change="emitStatus">
        <option default value="">Trạng thái</option>
        <option value="read">Đã đọc</option>
        <option value="unread">Chưa đọc</option>
      </select>
  
      <select v-model="date" class = "date" @change="emitDate">
        <option default value="">Ngày</option>
        <option value="oldest">Cũ nhất</option>
        <option value="newest">Mới nhất</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: '',
        status: '',
        date: '',
       
      };
    },
    methods: {
    emitSearchTerm() {
      this.$emit('search', this.searchTerm);
    },
    emitStatus() {
      this.$emit('filterStatus', this.status);
    },
    emitDate() {
      this.$emit('filterDate', this.date);
    },
  },
  };
  </script>
  <style scoped>
  .search-term {
    width: 20%;
    height: 40px;
    border-radius: 4px;
    border: 1px solid var(--Neutral-Grey-400, #CED4DA);
    background: var(--Primary-Base-White, #FFF);
  }
  .status {
    width: 100px;
    margin-left: 50px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid var(--Neutral-Grey-400, #CED4DA);
    background: var(--Primary-Base-White, #FFF);
  }
  .date {
    margin-left: 20px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid var(--Neutral-Grey-400, #CED4DA);
    background: var(--Primary-Base-White, #FFF);
  }
  </style>