// 项目的JS打包入口文件
// 1. 导入Vue
import Vue from 'vue'
import  moment from 'moment';
// 导入全局的配置模块，这个模块中的代码，和 main.js 中的 vm 实例，没有关系，只是 全局的 Vue 配置；
// 因此，抽离出去之后，可以让项目解构更加清晰
import './globalConfig.js'
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM--DD HH:mm:ss") {
          return moment(dataStr).format(pattern);
});
// 配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import VueResource from 'vue-resource';
Vue.use(VueResource);
// 导入路由对象
import router from './router.js'
Vue.http.options.root='http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON=true;
import {Swipe, SwipeItem,Lazyload} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
// import Vuex from "vuex";
// Vue.use(Vuex);
// let store=new Vuex.Store({
//     state:{
//
//     },
//     mutations:{
//
//     },
//     getters:{
//
//     }
//
// });
// 注册全局的组件
import testcom from '../test/02.test.vue';
// 这些全局注册的组件，在任何组件中，都可以使用 < 的形式引入到页面中
Vue.component('mytest', testcom);

// 导入状态管理对象
import store from './store.js';

// 导入 根组件
import App from './components/App.vue';

Vue.use(Lazyload);

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  router, // 挂载路由
  store // 挂载 store
});
