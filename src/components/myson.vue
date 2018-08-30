<template>
    <div class="mysonWrap">
      <div class="myUl" v-for="item in Arr">
        <div class="myLi" v-for="i in item.list">
          <img :src="i.img" alt="">
          <p>{{i.name}}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "myson",
      data:function () {
        return{
          Arr:[
            {
              "list":[
                {img:"src/assets/images/ic_profile_collect.png",name:"收藏的商品"},
                {img:"src/assets/images/ic_profile_brand.png",name:"喜欢的品牌"},
                {img:"src/assets/images/ic_profile_comment.png",name:"我的点评"}
              ]
            },
            {
              "list":[
                {img:"src/assets/images/ic_profile_bonus.png",name:"我的优惠券"},
                {img:"src/assets/images/ic_profile_integral.png",name:"我的积分"},
                {img:"src/assets/images/ic_profile_privilege.png",name:"我的特权"}
              ]
            },
            {
              "list":[
                {img:"src/assets/images/ic_profile_weixin.png",name:"关注服务号"},
                {img:"src/assets/images/ic_profile_share.png",name:"邀请好友"},
                {img:"src/assets/images/ic_profile_service.png",name:"联系客服"}
              ]
            },
            {
              "list":[
                {img:"src/assets/images/ic_profile_bind_inviter.png",name:"日本免税店"},
                {img:"src/assets/images/ic_profile_app_store.png",name:"评价我们"},
                {img:"src/assets/images/ic_profile_setting.png",name:"设置"}
              ]
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .myUl{display: flex;border-bottom: 1px solid #EEEEEE;}
  .myUl .myLi{flex: 1;font-size: 12px;border-right: 1px solid #EEEEEE; }
  .myUl .myLi:nth-child(3){border-right: white;}
  .myUl .myLi img{width: 100%;padding: 30px 30px 0 30px;box-sizing: border-box;}
  .myUl .myLi p{margin-bottom: 10px;}
</style>
