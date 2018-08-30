<template>
    <div class="myWrap">
      <div class="top">
        <div class="topBa">
          <Myheader>
            <img src="../assets/images/ic_edit_diary.png" alt="" slot="right">
          </Myheader>
          <div class="topCon">
            <img src="../assets/images/ic_user_avatar_default.png" alt="">
            <p>登录/注册享丰富礼券</p>
            <ul>
              <li>公主说</li>
              <li>参与话题</li>
              <li>关注</li>
              <li>粉丝</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="con">
        <ul>
          <li>
            <img src="../assets/images/ic_order_wait_pay.png" alt="">
            <p>待付款</p>
          </li>
          <li>
            <img src="../assets/images/ic_order_wait_shipping.png" alt="">
            <p>待发货</p>
          </li>
          <li>
            <img src="../assets/images/ic_order_wait_receipt.png" alt="">
            <p>待收货</p>
          </li>
          <li>
            <img src="../assets/images/ic_order_wait_comment.png" alt="">
            <p>待评价</p>
          </li>
          <li>
            <img src="../assets/images/ic_order_all.png" alt="">
            <p>全部订单</p>
          </li>
        </ul>
      </div>
      <Myson></Myson>
    </div>
</template>

<script>
  import Myheader from '../components/myHeader'
  import Myson from '../components/myson'
    export default {
        name: "my",
      components:{
          Myheader,
        Myson
      }
    }
</script>

<style scoped>
  ul,li{list-style: none;}
  .top{width: 100%;height: 300px;background: url("../assets/images/person_detail_default.png");}
  .topBa{width: 100%;height: 300px;background-color: rgba(0,0,0,.4)}
  .top .indexWrap{border-bottom:none;background: none;}
  .myWrap .indexWrap img{right: 10px;}
  .topCon img{border-radius: 50%;margin-top: 50px;}
  .topCon p{color: white;font-size: 14px;margin: 14px 0;}
  .topCon ul{display: flex;}
  .topCon ul li{flex: 1;border-right: 1px solid white;color: white;font-size: 14px;
        margin-top: 28px;}
  .topCon ul li:nth-child(4){border: none;}
  .con ul{width: 100%;display: flex;border-bottom: 4px solid #F1F1F1;}
  .con ul li{flex: 1;}
  .con ul li img{width: 100%;padding: 15px 15px 0 15px;box-sizing: border-box;}
  .con ul li p{font-size: 12px;margin-bottom: 10px;}
</style>
