<template>
  <div>
    <div>name: {{ app.userName }}</div>
    <div>info: {{ app.userInfo }}</div>
    <button @click="handleClick">更新info</button>
  </div>
</template>

<script>
export default {
  inject: ["app"],
  methods: {
    handleClick() {
      this.app.updateUser("123");
    },
  },
};
</script>

<style scoped></style>
