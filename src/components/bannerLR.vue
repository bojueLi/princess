<template>
    <div class="bannerWrap">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" slot="slide" v-for="item in Arr">
            <div v-for="i in item.list" class="shopfooter">
              <img :src="i.img" alt="">
              <p>{{i.p}}</p>
              <span>{{i.number}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import '../assets/libs/swiper'
    export default {
        name: "banner-l-r",
      props:["p","img","number"],
      mounted:function () {
        var swiper = new Swiper('.swiper-container');
      },
      data:function () {
        return{
          Arr:[
            {
              "list":[
                {img:"src/assets/images/go_four_1.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_four_2.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_four_3.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_four_4.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_four_5.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_four_6.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"}
              ]
            },
            {
              "list":[
                {img:"src/assets/images/go_one_1.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_one_2.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_one_3.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_one_4.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_one_5.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_one_6.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"}
              ]
            },
            {
              "list":[
                {img:"src/assets/images/go_two_1.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_two_2.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_two_3.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_two_4.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_two_5.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_two_6.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"}
              ]
            },
            {
              "list":[
                {img:"src/assets/images/go_three_1.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_three_2.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_three_3.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_three_4.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_three_5.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"},
                {img:"src/assets/images/go_three_6.jpg",p:"Naturie lmju 薏仁水 保湿化妆水50..",number:"￥102.6"}
              ]
            }
          ]
        }
      }
    }
</script>

<style scoped>
  @import "../assets/libs/swiper.css";
  .shopfooter{width: 33.3%;float: left;padding: 0 20px;box-sizing: border-box;text-align: left;}
  .shopfooter p{font-size: 2px;color: #AEAEAE;}
  .shopfooter span{font-size: 8px;}
  .shopfooter img{width: 100%;border: 1px solid #eee;}
  html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    padding-bottom: 100px;
  }
</style>
