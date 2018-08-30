<template>
    <div class="bannerWrap">
      <div class="swiper-container" :id="swiperid">
        <div class="swiper-wrapper">
          <!--<div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>-->
          <!--轮播内容-->
          <slot name="slide"></slot>
        </div>
        <!-- 如果需要导航按钮 -->
        <div :class="{'swiper-button-prev':prev}"></div>
        <div :class="{'swiper-button-next':next}"></div>
      </div>
    </div>
</template>

<script>
  import '../assets/libs/swiper'
    export default {
        name: "banner",
      props:{
          auto:{
            type:Number,
            default:null
          },
        prev:{
            type:Boolean,
          default:false
        },
        next:{
          type:Boolean,
          default:false
        },
        swiperid:{
            type:String,
          default:""
        },
        dire:{
          type:String,
          default:""
        },
        de:{
          type:Number,
          default:1
        },
        mv:{
          type:Boolean,
          default:false
        }
      },
      mounted:function () {
          var This = this;
        var mySwiper = new Swiper ('#'+This.swiperid, {
          /*direction: 'vertical',*/
          /*loop: true,*/
          autoplay:This.auto,
          direction:This.dire,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          autoplayDisableOnInteraction : false,
          slidesPerView: This.de,
          spaceBetween: 10,
          freeMode: This.mv,
        });
      }
    }
</script>

<style scoped>
@import "../assets/libs/swiper.css";
.swiper-container {width: 100%;height: 200px;margin-top: 40px;}
.swiper-container img{width: 100%;}
#goSwiper{height: 140px;margin-top: 0;}
#goSwiper1{height: 200px;margin-bottom: 150px;margin-top: 0;}
#goSwiper1 img{padding: 20px 10px;box-sizing: border-box;border: 1px solid #E4E4E4;}
#goSwiper2{height: 40px;}
.indexWrap #go{margin-top: 0;}
</style>
