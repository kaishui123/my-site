<template>
  <div class="loading-test">
    <Loading v-if="isLoading" />
    <button @click="isLoading = !isLoading">切换显示/隐藏</button>
  </div>
</template>

<script>
import Loading from "./";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    Loading,
  },
};
</script>

<style scoped lang="less">
.loading-test {
  position: relative;
}
</style>