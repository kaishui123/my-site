<template>
  <ul class="contact-container">
    <li>
      <a target="_blank" href="https://github.com/kaishui123">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>KaiShui</span>
      </a>
    </li>
    <li>
      <a href="mailto:520131zcs@gmail.com ">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>520131zcs@gmail.com</span>
      </a>
    </li>
    <li>
      <a>
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>2012419819</span>
      </a>
      <div class="pop">
        <img src="@/assets/qq.png" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>kaishui</span>
      </a>
      <div class="pop">
        <img src="@/assets/wx.jpg" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight + 5px;
    padding: 10px 15px;
    background: #fff;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
    }
  }
}
</style>
    