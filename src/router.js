/*
 * @Author: Liwenyu
 * @Date: 2023-12-28 13:57:09
 * @LastEditors: Liwenyu
 * @LastEditTime: 2023-12-28 14:35:48
 * @FilePath: \report-demo\src\router.js
 * @Description:
 *
 */
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/demo1",
      component: () => import("./views/component-basic/index.vue"),
    },
    {
      path: "/demo2",
      component: () => import("./views/provide/index.vue"),
    },
    {
      path: "/demo3",
      component: () => import("./views/provide-as-vuex/index.vue"),
    },
    {
      path: "/demo4",
      component: () => import("./views/emit-on/index.vue"),
    },
    {
      path: "/demo5",
      component: () => import("./views/broadcast-dispatch/index.vue"),
    },
  ],
});
