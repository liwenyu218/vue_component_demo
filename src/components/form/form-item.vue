<!--
 * @Author: Liwenyu
 * @Date: 2024-02-28 15:46:36
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-02-28 16:02:36
 * @FilePath: \report-demo\src\components\form\form-item.vue
 * @Description:
 *
-->
<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Emitter from "../../mixins/emitter";

export default {
  name: "iFormItem",
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
  mounted() {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
    }
  },
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  },
};
</script>
