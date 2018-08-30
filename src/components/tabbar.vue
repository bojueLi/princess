<template>
    <div class="tabbarWrap">
      <Item mark="index" :sel="selected" @c="getValue">
        <img src="../assets/images/main_tab_home_nor.png" alt="" slot="normalImg">
        <img src="../assets/images/main_tab_home_select.png" alt="" slot="activeImg">
      </Item>
      <Item mark="classify" :sel="selected" @c="getValue">
        <img src="../assets/images/main_tab_category_nor.png" alt="" slot="normalImg">
        <img src="../assets/images/main_tab_category_select.png" alt="" slot="activeImg">
      </Item>
      <Item mark="theory" :sel="selected" @c="getValue">
        <img src="../assets/images/main_tab_community_nor.png" alt="" slot="normalImg">
        <img src="../assets/images/main_tab_community_select.png" alt="" slot="activeImg">
      </Item>
      <Item mark="shop" :sel="selected" @c="getValue">
        <img src="../assets/images/main_tab_cart_nor.png" alt="" slot="normalImg">
        <img src="../assets/images/main_tab_cart_select.png" alt="" slot="activeImg">
      </Item>
      <Item mark="my" :sel="selected" @c="getValue">
        <img src="../assets/images/main_tab_profile_nor.png" alt="" slot="normalImg">
        <img src="../assets/images/main_tab_profile_select.png" alt="" slot="activeImg">
      </Item>
    </div>
</template>

<script>
  import Item from './item'
    export default {
        name: "tabbar",
      data:function(){
          return{
            selected:"home"
          }
      },
      components:{
        Item
      },
      methods:{
          getValue:function (v) {
            //v就是接收过来的值，现在要把接收过来的值赋给sel
            this.selected = v;
          }
      }
    }
</script>

<style scoped>
.tabbarWrap{width: 100%;height: 97px;border-top: 1px solid #ccc;
      position: fixed;bottom: 0;background-color: white;z-index: 999;}
</style>
