<!--
 * @Author: Liwenyu
 * @Date: 2023-10-24 11:58:42
 * @LastEditors: Liwenyu
 * @LastEditTime: 2023-11-07 14:58:25
 * @FilePath: \vue_component_advanced\src\App.vue
 * @Description:
 *
-->
<template>
  <div id="app">
    <div id="nav">
      <ul>
        <li>
          <router-link to="/"> 首页 </router-link>
        </li>
        <li>
          <router-link to="/demo1"> demo 1：prop </router-link>
        </li>
        <li>
          <router-link to="/demo2"> demo 2：provide&inject </router-link>
        </li>
        <li>
          <router-link to="/demo3"> demo 3：provide as Vuex </router-link>
        </li>
        <li>
          <router-link to="/demo4"> demo 4：emit-on</router-link>
        </li>
        <li>
          <router-link to="/demo5"> demo 5：broadcast&dispatch</router-link>
        </li>
      </ul>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
