<template>
  <div>
    <button @click="p">111111</button>
    <button @click="q">222222</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    p() {
      this.$router.push({
        path: "/login"
      });
    },
    q() {
      this.$router.push({
        path: "/layout"
      });
    }
  }
};
</script>

<style>
@import url("./styles/base.less");
</style>
