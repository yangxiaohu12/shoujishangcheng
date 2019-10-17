<template>
  <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <!-- 监听文本框的 change 事件，来动态获取选择到的数量 -->
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" ref="nobox" @change="countChanged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>

import mui from "../../../lib/mui/js/mui.js";
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      const val = parseInt(this.$refs.nobox.value);
      this.updateGoodsCount({ id: this.id, count: val });
    },
    ...mapMutations(["updateGoodsCount"])
  },
  props: ["initcount", "id"]
};
</script>

<style lang="scss" scoped>

</style>
