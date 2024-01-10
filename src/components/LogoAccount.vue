<template>
    <div class="box">
      <div class="app-ava">
        <div class="overlap-group">
          <div class="rectangle"></div>
          <div class="ellipse"></div>
          <div class="homie"> {{ name }}</div>
          <img class="image" alt="Image" src="../assets/img/logo.png" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LogoAccount",
    props: {
      name: String
    }
  };
  </script>
  
  
  <style scoped>
  .box {
    height: 52px;
    width: 236px
    }
  
  .box .app-ava {
    height: 52px;
    left: 8;
    /* position: fixed; */
    top: 0;
    width: 236px;
    top: 4px;
  }
  
  .box .overlap-group {
    height: 52px;
    position: relative;
    width: 236px;
  }
  
  .box .rectangle {
    background-color: #1d3557;
    border-radius: 15px;
    height: 44px;
    left: 28px;
    position: absolute;
    top: 6px;
    width: 189px;
  }
  
  .box .ellipse {
    background-color: #f6f6f6;
    border-radius: 24px;
    box-shadow: 0px 4px 4px #00000040;
    height: 52px;
    left: 0;
    position: absolute;
    top: 0;
    width: 52px;
  }
  
  .box .homie {
    color: #f1faee;
    font-family: "Raleway-Bold", Helvetica;
    font-size: 32px;
    font-weight: 700;
    height: 43px;
    left: 24px;
    letter-spacing: -0.7px;
    line-height: 48px;
    position: absolute;
    text-align: center;
    top: 6px;
    white-space: nowrap;
    width: 210px;
  }
  
  .box .image {
    height: 52px;
    left: 2px;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 52px;
    border-radius: 50%;
  }
  
  </style>
  