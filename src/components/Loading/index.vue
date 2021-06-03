<template>
  <img class="loading-container" :src="Loadingurl" alt="" />
</template>

<script>
import Loadingurl from "@/assets/loading.svg";
export default {
  data() {
    return {
      Loadingurl,
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.loading-container {
  .self-center();
}
</style>