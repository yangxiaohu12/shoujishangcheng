<template>
  <div class="goodsdesc-container">
    <h3 class="title">{{ info.title }}</h3>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {} // 商品的描述信息
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    async getGoodsDesc() {
        let id=this.$route.params.id;
        const { data } = await this.$http.get("api/goods/getdesc/" + id);
      if (data.status === 0) return (this.info = data.message[0]);
    }
  },
  // props: ["id"]
};
</script>

<style lang="scss">
.goodsdesc-container {
  padding: 4px;
  h3{
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>
