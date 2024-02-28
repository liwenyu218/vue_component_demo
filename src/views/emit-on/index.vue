<!--
 * @Author: Liwenyu
 * @Date: 2024-02-26 11:21:11
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-02-26 11:21:17
 * @FilePath: \report-demo\src\views\emit-on\index.vue
 * @Description:
 *
-->
<template>
  <div>
    <button @click="handleEmitEvent">触发自定义事件</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleEmitEvent() {
      // 在当前组件上触发自定义事件 test，并传值
      this.$emit("test", "Hello Vue.js");
    },
  },
  mounted() {
    // 监听自定义事件 test
    this.$on("test", (text) => {
      window.alert(text);
    });
  },
};
</script>
