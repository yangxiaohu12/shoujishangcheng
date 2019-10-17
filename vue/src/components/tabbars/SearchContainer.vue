<template>
  <div>
    <div class="search"><input type="text">
      <input type="submit" value="搜索"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
  .search{
    display: flex;
    justify-content: center;
    input[type=text]{
      width: 70%;
      margin-top: 5px;
    }
    input[type=submit]{
      width: 20%;
      height: 40px;
      margin-top: 5px;
      margin-left: 5px;
    }
  }
</style>
