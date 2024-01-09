<template>
    <div class="div">
      <div class="div-2">
        <div class="div-3">
          <font-awesome-icon icon="circle-info" style="color: #ffffff; margin-top: 2px;" />
          <div class="div-4">Thông báo: bạn có thông báo mới!</div>
        </div>
      </div>
    </div>
  </template>
  <script>
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCircleInfo);
</script>
  
  
  <style scoped>
  .div {
    display: inline-block;
    
    max-width: 500px;
    flex-direction: column;
    justify-content: center;
  }
  .div-2 {
    border-radius: 8px;
    background-color: var(--Success, #0088FF);
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 24px;
    opacity: 0.75;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      flex-wrap: wrap;
      padding: 0 20px;
    }
  }
  .div-3 {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }
  .img {
    color: var(--Success, #FFF);
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 24px;
    overflow: hidden;
    max-width: 100%;
  }
  .div-4 {
    color: var(--Success, #FFF);
    align-self: center;
    flex-grow: 1;
    flex-basis: auto;
    margin: auto 0;
    font: 400 16px/125% Roboto, sans-serif;
    
  }
  </style>