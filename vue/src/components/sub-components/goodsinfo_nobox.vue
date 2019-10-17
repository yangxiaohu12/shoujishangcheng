<template>
  <div class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <!-- 监听文本框的 change 事件，来动态获取选择到的数量 -->
    <input id="test" class="mui-input-numbox" type="number" value="1" ref="nobox" @change="countChanged" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>

import mui from "../../../lib/mui/js/mui.js";

export default {
  data() {
    return {};
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {

      const val = this.$refs.nobox.value;
      this.$emit("func", parseInt(val));
    }
  },
  props: ["max"],
  watch: {

    max: function(newval, oldval) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newval);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
