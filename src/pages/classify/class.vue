<template>
  <div class="classWrap">
    <div>
      <li :class="{active:nowIndex==0}" @click="nowIndex=0">
        <router-link to="/classify/class/makeup">
          <p>1階</p>
          个护化妆
          <p>美容コスメ</p>
        </router-link>
      </li>
      <li :class="{active:nowIndex==1}" @click="nowIndex=1">
        <router-link to="/classify/class/nutrition">
          <p>2階</p>
          营养保健
          <p>ヘルスケア</p>
        </router-link>
      </li>
      <li :class="{active:nowIndex==2}" @click="nowIndex=2">
        <p>3階</p>
        日式美食
        <p>グルメ</p>
      </li>
      <li :class="{active:nowIndex==3}" @click="nowIndex=3">
        <p>4階</p>
        家居生活
        <p>日用品雑貨</p>
      </li>
      <li :class="{active:nowIndex==4}" @click="nowIndex=4">
        <p>5階</p>
        服饰箱包
        <p>ファッション＆カバン</p>
      </li>
      <li :class="{active:nowIndex==5}" @click="nowIndex=5">
        <p>6階</p>
        母婴儿童
        <p>マタニティー</p>
      </li>
      <li :class="{active:nowIndex==6}" @click="nowIndex=6">
        <p>7階</p>
        宠物生活
        <p>ペット生活</p>
      </li>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "class",
      data:function () {
        return{
          nowIndex:0
        }
      }
    }
</script>

<style scoped>
  ul,li{list-style: none;}
  .classWrap{position: absolute;left: 0;top: 80px;padding-bottom: 100px;background-color: #FAFAFA;}
  .classWrap li{width: 100px;height: 86px;text-align: left;padding-left: 10px;color: black;}
  .classWrap li p:nth-child(1){color: #9e9e9e;font-size: 1.3rem;line-height: 1.1;opacity: .8;padding-top: 10px;}
  .classWrap li p:nth-child(2){color: #9e9e9e;font-size: 10px;}
  .classWrap li.active{color: #CCAD7B;background-color: white;}
  .classWrap li a{text-decoration: none;color: black;}
  .classWrap li.active p:nth-child(1){color: #CCAD7B;opacity: .3;}
</style>
