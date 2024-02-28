<template>
  <button :class="'i-button-size-' + size" @click="handleClick">
    <slot>button</slot>
    <slot name="icon"></slot>
  </button>
</template>
<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true;
    }
  }
  return false;
}

export default {
  props: {
    size: {
      validator(value) {
        return oneOf(value, ["small", "large", "default"]);
      },
      default: "default",
    },
  },
  methods: {
    handleClick() {
      this.$emit("on-click", "button被点击了");
    },
  },
};
</script>

<style scoped>
.i-button-size-small {
  font-size: small;
}

.i-button-size-large {
  font-size: larger;
}
</style>
