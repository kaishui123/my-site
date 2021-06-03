<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="wheelEnd"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index > 0" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        :class="{ active: i === index }"
        @click="switchTo(i)"
      ></li>
    </ul>
    <Loading v-if="isLoading" />
  </div>
</template>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
.carousel-container {
  height: 100%;
  width: 100%;
  transition: 500ms;
  li {
    height: 100%;
    width: 100%;
  }
}
.icon {
  @gap: 25px;
  .self-center();
  transform: translateX(-50%);
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./Carouselitem";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
export default {
  components: {
    CarouselItem,
    Icon,
    Loading,
  },
  data() {
    return {
      banners: [],
      index: 0, //当前是第几张轮播图
      containerHeight: 0, //整个容器的高度
      switching: false, //是否正在切换中
      isLoading: true,
    };
  },
  async created() {
    this.banners = await getBanners();
    this.isLoading = false;
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    addEventListener("resize", this.handleResize);
  },
  destroyed() {
    removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        //向上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        //向下滚动
        this.switching = true;
        this.index++;
      }
    },
    wheelEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>
