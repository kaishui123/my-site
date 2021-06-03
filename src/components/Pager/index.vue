<template>
  <!-- 当页码数小于1的时候不显示 -->
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleChange(1)" :class="{ disable: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleChange(current - 1)" :class="{ disable: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in visiblePage"
      :key="i"
      @click="handleChange(n)"
      :class="{ active: current === n }"
      >{{ n }}</a
    >
    <a
      @click="handleChange(current + 1)"
      :class="{ disable: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleChange(pageNumber)"
      :class="{ disable: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      // 当前页码
      type: Number,
      default: 1,
    },
    total: {
      // 总数据量
      type: Number,
      default: 0,
    },
    limit: {
      //页容量
      type: Number,
      default: 10,
    },
    visibleNumber: {
      // 可见页码数
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      //总页码数
      return Math.ceil(this.total / this.limit);
    },
    visibleMix() {
      //显示的最小页码
      let mix = Math.floor(this.current - this.visibleNumber / 2);
      if (mix < 1) {
        mix = 1;
      }
      return mix;
    },
    visibleMax() {
      //显示最大的页码数
      let max = this.visibleMix + this.visibleNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    visiblePage() {
      let arr = [];
      for (let i = this.visibleMix; i <= this.visibleMax; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    handleChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("changPage", newPage);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  a {
    margin: 0 6px;
    color: @primary;
    cursor: pointer;
    &.disable {
      cursor: no-drop;
      color: @gray;
    }
    &.active {
      color: @dark;
      font-weight: bold;
      cursor: no-drop;
    }
  }
}
</style>