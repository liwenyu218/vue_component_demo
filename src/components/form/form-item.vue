<!--
 * @Author: Liwenyu
 * @Date: 2024-02-28 15:46:36
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-02-28 15:46:47
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
export default {
  name: "iFormItem",
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
    },
  },
};
</script>
