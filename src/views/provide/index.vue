<!--
 * @Author: Liwenyu
 * @Date: 2023-12-28 16:06:07
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-02-26 10:26:21
 * @FilePath: \report-demo\src\views\provide\index.vue
 * @Description:
 *
-->
<template>
  <div>
    <cnp-a></cnp-a>
    <button @click="changeName">changeName</button>
    {{ name }}
  </div>
</template>

<script>
import cnpA from "./cnp-a.vue";
export default {
  components: {
    cnpA,
  },
  provide() {
    return {
      friendName: this.name,
    };
  },
  data() {
    return {
      name: "Aneen",
    };
  },
  methods: {
    changeName() {
      this.name = "jerry";
    },
  },
};
</script>

<style scoped></style>
