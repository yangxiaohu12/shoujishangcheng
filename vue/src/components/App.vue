<template>
  <div class="app-container">


    <mt-header fixed title="手机商城">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>


    <transition>
			<router-view></router-view>
		</transition>



    <nav class="mui-bar mui-bar-tab">
			<router-link class="my-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="my-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="my-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{ totalcount }}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="my-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      flag: true // 默认显示返回按钮
    };
  },
  methods: {
    goBack() {
      // 点击返回按钮，向后跳转
      this.$router.go(-1);
      console.log(this);
    }
  },
  created() {
    if (this.$route.path === "/home") {
      this.flag = false;
    } else {
      this.flag = true;
    }
  },
  watch: {

    "$route.path": function(newVal, oldVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  },
  computed: {
    ...mapGetters(["totalcount"])
  }
};
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;

  overflow: hidden;
}


.v-enter {
  opacity: 0;

  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;

  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

.mint-header {
  z-index: 99;
}

.mui-bar-tab .my-tab-item.mui-active {
  color: #007aff;
}

.mui-bar-tab .my-tab-item {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .my-tab-item .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .my-tab-item .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
