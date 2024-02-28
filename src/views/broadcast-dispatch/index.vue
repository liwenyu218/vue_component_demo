<!--
 * @Author: Liwenyu
 * @Date: 2024-02-26 11:52:36
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-02-26 11:59:46
 * @FilePath: \report-demo\src\views\broadcast-dispatch\index.vue
 * @Description:
 *
-->
<template>
  <div>
    <button @click="handleClick">触发事件</button>
    <cnp-b></cnp-b>
  </div>
</template>
<script>
import Emitter from "../../mixins/emitter";
import CnpB from "./cnp-b.vue";

export default {
  name: "componentA",
  mixins: [Emitter],
  components: {
    CnpB,
  },
  methods: {
    handleClick() {
      this.broadcast("componentB", "on-message", "Hello Vue.js");
    },
  },
};
</script>
