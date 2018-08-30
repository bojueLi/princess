<template>
    <div class="itemWrap" @click="changePage()">
      <span v-show="!bol"><slot name="normalImg"></slot></span>
      <span v-show="bol"><slot name="activeImg"></slot></span>
    </div>
</template>

<script>
    export default {
        name: "item",
      props:["txt","mark","sel"],
      computed:{
          bol:function () {
            if (this.mark == this.sel){
              return true
            }
            return false
          }
      },
      methods:{
        changePage:function () {
          //传出
          this.$emit("c",this.mark);//传出自己的mark值
          this.$router.push('/'+this.mark)//点击切换对应的页面
        }
      }
    }
</script>

<style scoped>
  .itemWrap{width: 20%;float: left;}
  .itemWrap p{padding: 0;font-size: 12px;color: #666;}
  .itemWrap img{width: 100%;}
</style>
