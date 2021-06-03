<template>
  <div class="image-loader-container">
    <img v-if="!everythingLoaded" class="loader" :src="placeholder" alt="" />
    <img
      class="main"
      @load="handleLoad"
      :style="{ opacity: imgShow, transition: `${duration}ms` }"
      :src="src"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      imgLoaded: false, //图片是否加载完成
      everythingLoaded: false, // 一起是否尘埃落定
    };
  },
  computed: {
    imgShow() {
      return this.imgLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      (this.imgLoaded = true),
        setTimeout(() => {
          (this.everythingLoaded = true), this.$emit("load");
        }, this.duration);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
    &.loader {
      filter: blur(2vw);
    }
  }
}
</style>