<template>
  <div class="newsinfo-container">
    <h3>新闻详情</h3>
    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="info">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}</span>
    </p>
    <hr>
    <!-- 新闻内容 -->
    <div class="content" v-html="newsinfo.content"></div>


    <!-- 这里评论组件的位置 -->
    <!-- 父组件向子组件传值，通过 属性绑定的形式 -->
    <comment-box :id="this.id"></comment-box>

  </div>
</template>

<script>
// 导入 Comment.vue 子组件
import comment from "../sub-components/Comment.vue";

export default {
  data() {
    return {
        id: this.$route.params.id,
        newsinfo: {} ,// 新闻详情
    };
  },
    created() {
        console.log(this.id);
        this.getNewsInfo();
    },
  methods: {
    async getNewsInfo() {
      // 根据Id获取新闻的详情
      const { data } = await this.$http.get('api/getnew/' + this.id);

        if (data.status === 0) return (this.newsinfo = data.message[0]);
    }
  },
  components: {
    "comment-box":comment
  }
};
</script>

<style lang="scss">
.newsinfo-container {
  padding: 3px;
  .title {
    font-size: 15px;
    text-align: center;
    color: red;
    margin: 15px 0;
  }

  .info {
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
