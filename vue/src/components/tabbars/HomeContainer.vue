<template>
  <div>

    <mt-swipe :auto="4000">
      <mt-swipe-item>
          <img src="../../images/7f311fcd33b956c5fe3cc758570d4ffb.jpg" alt="">
      </mt-swipe-item>
        <mt-swipe-item >
          <img src="../../images/17f8123ba73a91c710c0633fe2a32189.jpg" alt="">
      </mt-swipe-item>
        <mt-swipe-item >
          <img src="../../images/57549d36f34dd7f862fc18e285cb8d6f.jpg" alt="">
      </mt-swipe-item>
     </mt-swipe>


    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
              <img src="../../images/menu1.png" alt="">
              <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
              <img src="../../images/menu2.png" alt="">
              <div class="mui-media-body">图片分享</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
              <img src="../../images/menu3.png" alt="">
              <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
              <img src="../../images/menu4.png" alt="">
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="">
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="">
              <div class="mui-media-body">联系我们</div></a></li>
  </ul>

  </div>
</template>

<script>
// 导入自己封装的轮播图子组件
import swiper from "../sub-components/Swiper.vue";
// import {Toast} from 'mint-ui';
export default {
  data() {
    return {
      lunbotuList: [] // 轮播图的数组
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    async getlunbotu() {
      // 获取轮播图的方法
      const { data } = await this.$http.get("/api/getlunbo");
      if (data.status === 0){ this.lunbotu = data.message;
    }else{
        Toast("获取图片失败");
      }
  },
  components: {
    // 注册子组件
    swiper
  }
},}
</script>

<style lang="scss" scoped>

    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item{
        img{
            width: 100%;
            height: 100%;
        }
    }
.mui-grid-view {
  li {
    img {
      width: 60px;
      height: 60px;
    }
    div {
      font-size: 12px;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
  font-size: 13px;
}
</style>
