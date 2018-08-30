<template>
    <div class="indexWrap conImg">
      <Myheader>
        <img src="../assets/images/ic_scan.png" alt="" class="scanImg" slot="left">
        <img src="../assets/images/ic_inform_center.png" alt="" slot="right" class="rightImg">
        <div slot="left" class="sWrap">
          <img src="../assets/images/ic_search.png" alt="" class="searchImg">
          <input type="text" placeholder="输入商品或品牌名称" class="searchInput">
        </div>
      </Myheader>
      <Banner :auto="0" swiperid="goSwiper2" dire="horizontal" :de=2.5 :mv=true>
        <div class="swiper-slide" slot="slide">
          <p>集市</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <p>旗舰店</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <p>时尚</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <p>热销</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <p>视频</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <p>种草</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <p>保税仓</p>
        </div>
        <div class="swiper-slide" slot="slide">
          <p>场景推荐</p>
        </div>
      </Banner>
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
      <div class="Mycon">
        <img src="../assets/images/home_top1.jpg" alt="">
        <img src="../assets/images/home_top2.jpg" alt="">
        <img src="../assets/images/home_top3.jpg" alt="">
        <img src="../assets/images/home_top4.jpg" alt="">
        <img src="../assets/images/home_top5.jpg" alt="">
      </div>
      <img src="../assets/images/home_CEO.jpg" alt="">
      <img src="../assets/images/home_adver1.jpg" alt="">
      <div class="indexImg">
        <div>
          <img src="../assets/images/home_mei_left_01.jpg" alt="">
          <img src="../assets/images/home_mei_left_02.jpg" alt="">
          <img src="../assets/images/home_mei_left_03.jpg" alt="">
        </div>
        <div>
          <img src="../assets/images/home_mei_right_01.jpg" alt="">
          <img src="../assets/images/home_mei_right_02.jpg" alt="">
          <img src="../assets/images/home_mei_right_03.jpg" alt="">
        </div>
        <div class="clear"></div>
      </div>
      <img src="../assets/images/43cec952c6391b99095ae3aab6a4947d.png@1242w_330h_1l_1wh_1pr.jpg" alt="">
      <img src="../assets/images/cc02c7ceaa80e50339194d02add444b3.png@1242w_295h_1l_1wh_1pr.jpg" alt="">
    </div>
</template>

<script>
  import Myheader from '../components/myHeader'
  import Banner from '../components/banner'
    export default {
        name: "index",
      components:{
          Myheader,
        Banner
      }
    }
</script>

<style scoped>
  .clear{clear: both;}
  .indexWrap{margin-bottom: 100px;}
  .indexWrap .indexWrap{background-color: white;border: none;z-index: 999;}
  .indexWrap .bannerWrap:nth-child(2) div div:nth-child(1){height: 40px;}
  .indexWrap .bannerWrap:nth-child(2) div div{width: 65px!important;line-height: 40px;}
  .Mycon{width: 100%;display: flex;border-bottom: 7px solid #F5F5F5;}
  .Mycon img{flex: 1;width: 10%;height: 10%;}
  .conImg>img{width: 100%;}
  .indexImg{width: 100%;}
  .indexImg div{width: 49%;}
  .indexImg div img{width: 100%;float: left;}
  .indexImg div:nth-child(1){float: left;}
  .indexImg div:nth-child(2){float: right;}
</style>
