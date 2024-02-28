<template>
  <cnp-a></cnp-a>
</template>

<script>
import cnpA from "./cnp-a.vue";

export default {
  components: {
    cnpA,
  },
  provide() {
    return {
      app: this,
    };
  },
  data() {
    return {
      userInfo: "info",
      userName: "liwenyu",
    };
  },
  methods: {
    getUser() {
      console.log(this.userInfo);
    },
    updateUser(data) {
      this.userInfo = data;
    },
  },
};
</script>

<style scoped></style>
