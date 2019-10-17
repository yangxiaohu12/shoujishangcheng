<template>
  <div>

    <h4>发表评论</h4>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <!--<textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>-->
    <mt-button type="primary" size="large" @click="postMsg">发表评论</mt-button>


  <!-- 评论列表区域 -->
  <div class="cmt-list">
    <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time" style="padding: 5px">
      <div class="cmt-item-title" style="background-color: #ccc">第{{ i+1 }}楼&nbsp;用户：{{ item.user_name }}&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
      <div class="cmt-item-body">{{item.content}}</div>
    </div>
  </div>


    <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>

  </div>
</template>

<script>
// 按需从 MintUI 中，导出需要的 弹框组件
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      page: 1, // 默认展示第一页的评论
      comments: [], // 评论数组
      // msg: "" // 即将发表的评论内容
    };
  },
  created() {
    this.getCommentByPage();
  },
  methods: {
    async getCommentByPage() {
      // 根据页数来获取评论的数据
      const { data } = await this.$http.get(
        'api/getcomments/13' + "?pageindex=" + this.page
      );
        if (data.status === 0)
        this.comments = data.message;
            // this.cmtlist.concat(data.message));
    },
    loadMore() {
      // 点击按钮，加载更多的评论
      // 当触发这个加载更多方法的时候，应该让 page 页码 + 1 之后，再调用 getCommentByPage 方法
      this.page++;
      this.getCommentByPage();
    },
    async postMsg() {
      // 点击发表评论：
      // 如果用户没有填写评论内容，则阻止其发表评论
      if (this.msg.trim().length <= 0) return Toast("请填写评论内容！");
      let id=this.$route.params.id;
      const { data } = await this.$http.post(
        "api/postcomment/"+id,
        {
          content: this.msg.trim()
        }
      );
      if (data.status === 0) {
        this.comments.unshift({
          user_name: "匿名用户",
          add_time: new Date(),
          content: this.msg.trim()
        });
        this.msg = "";
      }
    }
  },
  props: ["id"] // 接收父组件传递过来的新闻Id
}
</script>

<style lang="scss" scoped>,
textarea {
  font-size: 14px;
  margin: 0;
}
.cmt-list {
  margin-top: 4px;
  .cmt-item {
    line-height: 30px;
    background: #ccc;
    .cmt-item-title {
      font-size: 14px;
    }
    .cmt-item-body {
      font-size: 13px;
      text-indent: 2em;
    }
  }
}
</style>
