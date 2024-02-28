<!--
 * @Author: Liwenyu
 * @Date: 2023-12-28 16:06:25
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-01-08 16:48:12
 * @FilePath: \report-demo\src\views\provide\cnp-a.vue
 * @Description:
 *
-->
<template>
  <div class="cnp-a">cnpa: {{ friendName }}</div>
</template>

<script>
export default {
  name: "cnpA",
  inject: {
    friendName: { default: "non" },
  },
};
</script>

<style scoped></style>
