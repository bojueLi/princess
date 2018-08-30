<template>
    <div class="shopWrap">
      <Myheader>
        <span slot="center">购物袋</span>
      </Myheader>
      <img src="../assets/images/ic_cart_empty.png" alt="" class="shopImg">
      <p>购物袋是空的，快去逛逛吧！</p>
      <span>去逛逛</span>
      <p class="footerShop">大家都在买</p>
      <BannerLR>
      </BannerLR>
    </div>
</template>

<script>
  import Myheader from '../components/myHeader'
  import BannerLR from '../components/bannerLR'
    export default {
        name: "shop",
      components:{
        Myheader,
        BannerLR
      }
    }
</script>

<style scoped>
  .shopWrap .indexWrap{background-color: white;border: none;}
  .shopImg{margin-top: 150px;}
  .shopWrap>span{display: inline-block;width: 100px;height: 40px;border: 1px solid black;
      text-align: center;line-height: 40px;margin-top: 20px;}
  .shopWrap .footerShop{margin-top: 50px;margin-bottom: 20px;color: #B6B6B6;}
  .footerShop:before{content: "————————";color: #E4E4E4;}
  .footerShop:after{content: "————————";color: #E4E4E4;}
</style>
