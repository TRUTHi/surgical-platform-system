<template>
  <div>Homepage</div>
</template>

<script>
export default {
  created() {
    // 记住当前访问的路由组件
    sessionStorage.setItem("previousIndex", this.$route.path);
  },
};
</script>

<style>
</style>