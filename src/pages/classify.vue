<template>
    <div class="classifyWrap">
      classifyWrap
      <Myheader>
        <div slot="left" class="sWrap">
          <img src="../assets/images/ic_search.png" alt="" class="searchImg">
          <input type="text" placeholder="输入商品或品牌名称" class="searchInput">
        </div>
      </Myheader>
      <ul class="menu">
        <li :class="{active:nowIndex==0}" @click="nowIndex=0"><router-link to="/classify/class">分类</router-link></li>
        <li :class="{active:nowIndex==1}" @click="nowIndex=1"><router-link to="/classify/brand">品牌馆</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
  import Myheader from '../components/myHeader'
    export default {
        name: "classify",
      data:function () {
        return{
          nowIndex:0
        }
      },
      components:{
          Myheader
      }
    }
</script>

<style scoped>
  ul,li{list-style: none;}
  .classifyWrap .indexWrap{z-index: 999;}
  .classifyWrap .indexWrap .searchInput{width: 80%;left: 10%;text-indent: 7rem;}
  .classifyWrap .sWrap img.searchImg{left: 115px;}
  .menu{width: 100%;margin-top: 22px;display: flex;position: fixed;background-color: #FAFAFA;z-index: 999;
      height: 40px;line-height: 40px;}
  .menu li{flex: 1;}
  .menu a{text-decoration: none;color: #000000;}
  .menu li.active a{color: #CCAD7B;}
</style>
