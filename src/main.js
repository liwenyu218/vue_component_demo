/*
 * @Author: Liwenyu
 * @Date: 2023-12-28 11:14:03
 * @LastEditors: Liwenyu
 * @LastEditTime: 2023-12-28 14:16:36
 * @FilePath: \report-demo\src\main.js
 * @Description:
 *
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
