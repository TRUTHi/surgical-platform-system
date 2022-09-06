<template>
  <div class="tabs_container">
    <!-- 左侧按钮 -->
    <div class="left-side_btn" @click="clickTheLeftButton">
      <svg
        t="1660871383993"
        class="icon-left"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2437"
        width="16"
        height="14"
      >
        <path
          d="M152 512l345.6-345.6c14.4-12.8 19.2-33.6 14.4-51.2-4.8-19.2-19.2-33.6-38.4-38.4-4.8-1.6-9.6-1.6-14.4-1.6-14.4 0-27.2 4.8-38.4 16L40 473.6a53.12 53.12 0 0 0 0 75.2l382.4 382.4c20.8 20.8 56 20.8 75.2 0 20.8-20.8 20.8-54.4 0-75.2L152 512z"
          fill="#333333"
          p-id="2438"
        ></path>
        <path
          d="M524.8 473.6a53.12 53.12 0 0 0 0 75.2l382.4 382.4c12.8 14.4 33.6 19.2 51.2 14.4 19.2-4.8 33.6-19.2 38.4-38.4 4.8-19.2 0-38.4-14.4-51.2L638.4 512l344-345.6c12.8-12.8 19.2-33.6 14.4-51.2C992 96 977.6 81.6 960 76.8c-4.8-1.6-9.6-1.6-12.8-1.6-14.4 0-27.2 4.8-38.4 16l-384 382.4z"
          fill="#333333"
          p-id="2439"
        ></path>
      </svg>
    </div>
    <!-- 右侧按钮 -->
    <div class="right-side_btn" v-show="num < 0" @click="clickTheRightButton">
      <svg
        t="1660871383993"
        class="icon-right"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2437"
        width="16"
        height="14"
      >
        <path
          d="M152 512l345.6-345.6c14.4-12.8 19.2-33.6 14.4-51.2-4.8-19.2-19.2-33.6-38.4-38.4-4.8-1.6-9.6-1.6-14.4-1.6-14.4 0-27.2 4.8-38.4 16L40 473.6a53.12 53.12 0 0 0 0 75.2l382.4 382.4c20.8 20.8 56 20.8 75.2 0 20.8-20.8 20.8-54.4 0-75.2L152 512z"
          fill="#333333"
          p-id="2438"
        ></path>
        <path
          d="M524.8 473.6a53.12 53.12 0 0 0 0 75.2l382.4 382.4c12.8 14.4 33.6 19.2 51.2 14.4 19.2-4.8 33.6-19.2 38.4-38.4 4.8-19.2 0-38.4-14.4-51.2L638.4 512l344-345.6c12.8-12.8 19.2-33.6 14.4-51.2C992 96 977.6 81.6 960 76.8c-4.8-1.6-9.6-1.6-12.8-1.6-14.4 0-27.2 4.8-38.4 16l-384 382.4z"
          fill="#333333"
          p-id="2439"
        ></path>
      </svg>
    </div>
    <!-- 主页标签 -->
    <div
      class="tabs_home"
      @click="clickTabItem('home')"
      :class="[clickHome ? 'isActive' : '']"
    >
      <svg
        t="1660875185510"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2710"
        width="15"
        height="15"
      >
        <path
          d="M477.6 119.2L155.68 355.2c-14.88 11.04-23.84 28.32-23.84 46.88v455.84a58.24 58.24 0 0 0 58.24 58.24h240c0.48 0 0.8-0.32 0.8-0.8V700.48c0-42.72 31.04-81.12 73.6-84.96 48-4.32 88.48 33.6 88.48 80.8v219.2c0 0.48 0.32 0.8 0.8 0.8h240a58.24 58.24 0 0 0 58.24-58.24v-456c0-18.56-8.8-36-23.84-46.88L546.4 119.2a58.08 58.08 0 0 0-68.8 0z m-127.2 582.4v133.12c0 0.48-0.32 0.8-0.8 0.8h-136.32c-0.48 0-0.8-0.32-0.8-0.8V413.44c0-0.32 0.16-0.48 0.32-0.64l298.72-218.4c0.32-0.16 0.64-0.16 0.96 0L811.2 412.96c0.16 0.16 0.32 0.32 0.32 0.64v421.28c0 0.48-0.32 0.8-0.8 0.8h-136.32c-0.48 0-0.8-0.32-0.8-0.8v-138.56c0-94.08-80.8-169.6-176.48-160.96-84.16 7.52-146.72 81.76-146.72 166.24z"
          fill="#333333"
          p-id="2711"
        ></path>
      </svg>
      <span>主页</span>
    </div>
    <!-- 标签主体 -->
    <div class="tabs_main" ref="outsideBox">
      <div class="inside_box" ref="insideBox">
        <div
          :class="['tab_item', item.checked ? 'isActive' : '']"
          v-for="item in tabItems"
          :key="item.id"
          @click="clickTabItem(item)"
        >
          <span>{{ item.name }}</span>
          <svg
            t="1660868938210"
            class="icon-close"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2029"
            width="12"
            height="12"
            v-on:click.stop="removeItem(item)"
          >
            <path
              d="M590.08 512L889.6 811.52a55.136 55.136 0 0 1 0 78.08 55.136 55.136 0 0 1-78.08 0L512 590.08 212.48 889.6a55.136 55.136 0 0 1-78.08 0 55.136 55.136 0 0 1 0-78.08L433.92 512 134.4 212.48a55.136 55.136 0 0 1 0-78.08 55.136 55.136 0 0 1 78.08 0L512 433.92 811.52 134.4a55.136 55.136 0 0 1 78.08 0 55.136 55.136 0 0 1 0 78.08L590.08 512z"
              fill="#999999"
              p-id="2030"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabItems: Array,
    // currentTabItem: Number
  },
  data() {
    return {
      // 当前点击的标签栏
      currentTabItem: null,
      // 里层盒子当前移动的距离
      move: 0,
      // 右边的顶点
      rightTarget: 0,
      // 外层盒子跟里层盒子的宽度差
      num: 0,
      clickHome: true,
      tabItemsLength: 0,
    };
  },
  methods: {
    removeItem(item) {
      console.log(item);
      this.$emit("remove-item", item);
    },
    clickTabItem(item) {
      if (typeof item === "string") {
        this.clickHome = true;
      } else {
        this.clickHome = false;
      }
      this.$emit("current-item", item);
    },
    // 点击左侧滑动按钮
    clickTheLeftButton() {
      // 里层盒子
      const insideBox = this.$refs.insideBox;
      // 判断是否溢出, 如果有溢出判断里层盒子是否左侧完全显示 (是否左侧贴边)
      if (this.move === 0) return;
      if (this.move > -300) {
        this.move = 0;
        insideBox.style.transform = "translate(" + this.move + "px)";
      } else {
        this.move += 200;
        insideBox.style.transform = "translate(" + this.move + "px)";
      }
    },
    // 点击右侧滑动按钮
    clickTheRightButton() {
      const insideBox = this.$refs.insideBox;
      if (this.move === this.rightTarget) return; // 已抵达右边
      const num = this.rightTarget - this.move;
      if (num > -300) {
        this.move = this.rightTarget;
        insideBox.style.transform = "translate(" + this.move + "px)";
      } else {
        this.move += -200;
        insideBox.style.transform = "translate(" + this.move + "px)";
      }
    },
  },
  watch: {
    tabItems: {
      deep: true,
      handler: function (val) {
        if (this.tabItemsLength !== val.length) {
          // this.clickHome = false;
          this.clickHome = !this.clickHome;
          this.tabItemsLength = val.length;
        } else {
          // 表示并没有新增标签, 只是其他的被选中
          this.clickHome = false;
        }
        // 点击标签
        // this.clickTabItem(this.tabItems.length - 1);
        // 外层盒子
        const outsideBox = this.$refs.outsideBox;
        // 里层盒子
        const insideBox = this.$refs.insideBox;
        // 里层盒子的宽度
        const insideBoxWidth = this.tabItems.length * 100;
        // 设置 里层盒子的宽度
        insideBox.style.width = insideBoxWidth + "px";
        // 外层盒子的宽度 - 里层盒子的宽度
        const extraWidth = outsideBox.offsetWidth - insideBoxWidth;
        this.num = extraWidth;
        // 判断里层盒子是否溢出到外层盒子外面
        if (extraWidth < 0) {
          // 表示里层盒子溢出到了外层盒子外面
          // 此时里层盒子要向左移动, 移动溢出的距离
          insideBox.style.transform = "translate(" + extraWidth + "px)";
          // 并记录移动的距离
          this.move = extraWidth;
          // 左边为 0 右边为 extraWidth
          this.rightTarget = extraWidth;
        } else {
          this.rightTarget = extraWidth;
        }
      },
    },
  },
  created() {
    const previousIndex = sessionStorage.getItem("previousIndex");
    if (!previousIndex) {
      this.clickHome = true;
    } else {
      this.clickHome = previousIndex.includes("homepage");
    }
  },
};
</script>

<style lang="less" scoped>
.tabs_container {
  width: 100%;
  height: 40px;
  position: relative;

  .left-side_btn {
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    z-index: 1;
    width: 40px;
    height: 40px;

    .icon-left {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .right-side_btn {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    z-index: 1;
    width: 40px;
    height: 40px;

    .icon-right {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }

  .tabs_home {
    height: 40px;
    width: 90px;
    position: absolute;
    left: 40px;
    top: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 1;
    border: 1px solid #f6f6f6;
    box-sizing: border-box;

    &.isActive {
      background: rgb(244, 244, 244);
    }

    &:hover {
      background: #f4f4f4;
    }

    svg {
      margin: 0 10px 0 15px;
    }

    span {
      font-size: 14px;
    }
  }

  .tabs_main {
    width: calc(1680px - 170px);
    height: 40px;
    position: absolute;
    left: 130px;
    top: 0;
    overflow: hidden;

    .inside_box {
      display: flex;
      transition: transform 1s;
      position: absolute;
      left: 0;
      top: 0;

      .tab_item {
        height: 40px;
        width: 100px;
        display: flex;
        align-items: center;
        flex-shrink: 0;

        &:hover {
          background: rgb(244, 244, 244);
        }

        span {
          font-size: 14px;
          margin: 0 5px 0 13px;
        }

        .icon-close {
          cursor: pointer;
          margin-top: 2px;
          padding: 3px;

          &:hover {
            background: #ccc;
            border-radius: 14px;
          }
        }
      }

      .isActive {
        background: rgb(244, 244, 244);
      }
    }
  }
}
</style>