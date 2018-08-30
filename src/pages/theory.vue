<template>
    <div class="theoryWrap">
      <Myheader>
        <span slot="center">社区</span>
      </Myheader>
      <Banner :auto="2000" swiperid="go" dire="horizontal">
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/banner4.jpg" alt="">
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/banner6.jpg" alt="">
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/banner7.jpg" alt="">
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/banner8.jpg" alt="">
        </div>
      </Banner>
      <div class="conWrap">
        <span>热门话题</span>
        <span>全部</span>
        <div class="clear"></div>
      </div>
      <Banner :auto="0" swiperid="goSwiper" dire="horizontal" :de=1.5 :mv=true>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/banner1.jpg" alt="">
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/banner2.jpg" alt="">
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/banner3.jpg" alt="">
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/banner4.jpg" alt="">
        </div>
      </Banner>
      <div class="conWrap">
        <span>特别奖励</span>
        <span>全部</span>
        <div class="clear"></div>
      </div>
      <Banner :auto="0" swiperid="goSwiper1" dire="horizontal" :de=2.5 :mv=true>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/30264feb150690f23d601e75a35e137e.png@900w_4000h_1l_1wh_1pr.jpg" alt="">
          <p>ALOVIVI 薏仁滋润保湿霜 25g</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/dd88bf9e3cf914dd44688c4802b52805.png@900w_4000h_1l_1wh_1pr.jpg" alt="">
          <p>KOBAYASHI 小林制药 高保湿美颜胶原蛋白面霜晚霜 45g</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/332c1d373b988f1615d053ae2757d2a8.png@900w_4000h_1l_1wh_1pr.jpg" alt="">
          <p>SK-II 保湿修复按摩霜 80g</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/fa0412ea730b36114a9a491e724356b5.png@900w_4000h_1l_1wh_1pr.jpg" alt="">
          <p>IPSA 茵芙莎 抗老化精华面霜 S 30g</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <img src="../assets/images/728c4ffcc73d732bf2715ec092d8e2f9.png@900w_4000h_1l_1wh_1pr.jpg" alt="">
          <p>IPSA 茵芙莎 抗老化精华面霜 G 30g</p>
        </div>
      </Banner>
    </div>
</template>

<script>
  import Myheader from '../components/myHeader'
  import Banner from '../components/banner'
  import BannerLR from '../components/bannerLR'
    export default {
        name: "theory",
      components:{
          Myheader,
        Banner,
        BannerLR
      }
    }
</script>

<style scoped>
  .theoryWrap .indexWrap{background-color: white;border: none;z-index: 999;}
  .clear{clear: both;}
  .conWrap{padding: 3% 4%;box-sizing: border-box;border-top: 6px solid #F4F4F4;}
  .conWrap span:nth-child(1){float: left;}
  .conWrap span:nth-child(2){float: right;}
  .theoryWrap div:nth-child(4){height: 140px;}
  .theoryWrap div:nth-child(4)>div{height: 140px;}
  .theoryWrap div:nth-child(6){height: 140px;}
  .theoryWrap div:nth-child(6)>div{height: 140px;}
  .theoryWrap div:nth-child(6)>div p{font-size: 12px;text-align: left;padding: 0 10px;}
</style>
