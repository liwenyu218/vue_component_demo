<!--
 * @Author: Liwenyu
 * @Date: 2024-02-28 16:07:43
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-02-28 16:07:49
 * @FilePath: \report-demo\src\components\input\input.vue
 * @Description:
 *
-->
<!-- input.vue -->
<template>
  <input
    type="text"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>
<script>
import Emitter from "../../mixins/emitter.js";

export default {
  name: "iInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
  },
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("iFormItem", "on-form-change", value);
    },
    handleBlur() {
      this.dispatch("iFormItem", "on-form-blur", this.currentValue);
    },
  },
};
</script>
