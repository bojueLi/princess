<template>
    <div :class="{indexWrap:true}">
      <span>{{title}}</span>
      <slot name="left"></slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        name: "myheader",
      props:["title","bol"]
    }
</script>

<style scoped>
.indexWrap{width: 100%;height: 40px;line-height: 40px;
      border-bottom: 1px solid #ccc;position: fixed;top: 0;background: #f7f7f7;}
  .indexWrap img{width: 25px;position: absolute;top: 7px;}
  .indexWrap img.rightImg{right: 10px;}
  .indexWrap img.centerImg{right: 50px;}
  .indexWrap img.scanImg{left: 5px;}
  .green{background: #48bd5a;}
  .indexWrap .searchInput{width: 68%;height: 30px;position: absolute;left: 60px;top: 6px;
      border: none;outline: none;text-indent: 2rem;border-radius: 16px;background-color: #E6E6E6;}
.sWrap{position: relative;}
.sWrap img{position: absolute;z-index: 999;width: 20px;top: 11px;}
.sWrap img.searchImg{left: 66px;}
.sWrap .scanImg{right: 60px;left: 5px;}
</style>
