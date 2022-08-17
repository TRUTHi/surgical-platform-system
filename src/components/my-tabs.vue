<template>
  <div class="tabs_container">
    <!-- 左侧按钮 -->
    <div class="left-side_btn" @click="clickTheLeftButton">
      <el-icon :size="17"><DArrowLeft /></el-icon>
    </div>
    <!-- 右侧按钮 -->
    <div class="right-side_btn" v-show="num < 0" @click="clickTheRightButton">
      <el-icon :size="17"><DArrowRight /></el-icon>
    </div>
    <div class="tabs_home">
      <el-icon :size="17"><House /></el-icon>
      <span>主页</span>
    </div>
    <!-- 标签主体 -->
    <div class="tabs_main" ref="outsideBox">
      <div class="inside_box" ref="insideBox">
        <div
          :class="['tab_item', item.checked ? 'isActive' : '']"
          v-for="(item, idx) in tabItems"
          :key="item.id"
          @click="clickTabItem(item)"
        >
          <span>{{ item.name }}</span>
          <el-icon
            v-on:click="removeItem(idx)"
            v-show="item.checked"
            :size="17"
            ><Close
          /></el-icon>
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
    };
  },
  methods: {
    removeItem(idx) {
      this.tabItems.splice(idx, 1);
    },
    clickTabItem(item) {
      this.$emit("current-item", item);
      // this.currentTabItem = idx;
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
      handler: function () {
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
  }

  .right-side_btn {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    z-index: 1;
  }

  .left-side_btn .el-icon,
  .right-side_btn .el-icon {
    width: 40px;
    height: 40px;
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

    .el-icon {
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
        cursor: pointer;

        &:hover {
          background: rgb(244, 244, 244);
        }

        span {
          font-size: 14px;
          margin: 0 5px 0 13px;
        }

        .el-icon {
          cursor: pointer;
        }
      }

      .isActive {
        background: rgb(244, 244, 244);
      }
    }
  }
}
</style>