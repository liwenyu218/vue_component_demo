<!--
 * @Author: Liwenyu
 * @Date: 2023-12-28 11:20:47
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-02-26 10:14:02
 * @FilePath: \report-demo\src\views\component-basic\index.vue
 * @Description:
 *
-->
<template>
  <i-button size="large" @on-click="handleClick" @click.native="nativeClick" />
</template>

<script>
import IButton from "./i-button.vue";

export default {
  components: {
    IButton,
  },
  methods: {
    handleClick() {
      console.log("收到button的点击");
    },

    nativeClick() {
      console.log("i-button被点击");
    },
  },
};
</script>

<style scoped></style>
