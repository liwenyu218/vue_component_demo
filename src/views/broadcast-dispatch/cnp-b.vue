<!--
 * @Author: Liwenyu
 * @Date: 2024-02-26 11:52:55
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-02-26 12:00:01
 * @FilePath: \report-demo\src\views\broadcast-dispatch\cnp-b.vue
 * @Description:
 *
-->
<template>
  <div></div>
</template>

<script>
export default {
  name: "componentB",
  created() {
    this.$on("on-message", this.showMessage);
  },
  methods: {
    showMessage(text) {
      window.alert(text);
    },
  },
};
</script>

<style scoped></style>
