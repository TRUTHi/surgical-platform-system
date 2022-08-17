<template>
  <div class="manage_layout">
    <el-container>
      <!-- 左侧 导航栏 -->
      <el-aside :width="controlFold ? '65px' : '240px'" ref="asideLeft">
        <!-- 左上角 标志牌 -->
        <div class="manage_signboard">
          <img src="../assets/images/manage_logo.png" alt="" />
          <h3 v-show="!controlFold">镭沃智慧手术部平台系统</h3>
        </div>

        <!-- 菜单栏 -->
        <el-menu
          :default-active="currentIndex"
          background-color="#052a32"
          text-color="#ffffff"
          active-text-color="#0be6cd"
          :unique-opened="true"
          :collapse-transition="true"
          :collapse="controlFold"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon :size="50"><TrendCharts /></el-icon>
              <span>手术排程管理</span>
            </template>
            <el-menu-item
              v-for="item in menuItem"
              :key="item.id"
              :index="item.id"
              @click="clickMenuItem(item)"
              >{{ item.name }}</el-menu-item
            >
          </el-sub-menu>
          <el-sub-menu index="22">
            <template #title>
              <el-icon :size="50"><TrendCharts /></el-icon>
              <span>手术排程管理</span>
            </template>
            <el-menu-item index="2-1">手术申请</el-menu-item>
            <el-menu-item index="2-2">手术申请</el-menu-item>
            <el-menu-item index="2-3">手术申请</el-menu-item>
            <el-menu-item index="2-4">手术申请</el-menu-item>
            <el-menu-item index="2-5">手术申请</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="33">
            <template #title>
              <el-icon :size="50"><TrendCharts /></el-icon>
              <span>手术排程管理</span>
            </template>
            <el-menu-item index="3-1">手术申请</el-menu-item>
            <el-menu-item index="3-2">手术申请</el-menu-item>
            <el-menu-item index="3-3">手术申请</el-menu-item>
            <el-menu-item index="3-4">手术申请</el-menu-item>
            <el-menu-item index="3-5">手术申请</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>

      <!-- 右侧 主体 -->
      <el-main>
        <div class="manage_top">
          <el-row>
            <el-col :span="12">
              <div class="tab_control_left">
                <!-- 折叠按钮 -->
                <div class="fold_button" v-on:click="clickFoldBtn">
                  <img src="../assets/images/fold_btn.png" alt="" />
                </div>
                <!-- 临床信息管理 -->
                <div
                  :class="['clinical_btn', isClinicalManage ? 'active' : '']"
                  v-on:click="clickClinicalHandle"
                >
                  临床信息管理
                </div>
                <!-- 手术信息管理 -->
                <div
                  :class="['surgery_btn', !isClinicalManage ? 'active' : '']"
                  v-on:click="clickSurgeryHandle"
                >
                  手术信息管理
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="function_right">
                <!-- 按钮 -->
                <div class="function_right_btn">
                  <!-- 清除 -->
                  <el-button color="#0be6cd" circle>
                    <el-icon color="#FFF"><DeleteFilled /></el-icon>
                  </el-button>
                  <!-- 全屏 -->
                  <el-button color="#0be6cd" circle>
                    <el-icon color="#FFF"><FullScreen /></el-icon>
                  </el-button>
                  <!-- 刷新 -->
                  <el-button color="#0be6cd" circle>
                    <el-icon color="#FFF"><RefreshRight /></el-icon>
                  </el-button>
                  <!-- 消息 -->
                  <el-button color="#0be6cd" circle>
                    <el-icon color="#FFF"><Bell /></el-icon>
                  </el-button>
                  <!-- 主页 -->
                  <el-button color="#0be6cd" circle>
                    <el-icon color="#FFF"><HomeFilled /></el-icon>
                  </el-button>
                </div>
                <!-- 头像 -->
                <div class="function_right_avatar">
                  <el-avatar
                    :size="37"
                    src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                  ></el-avatar>
                  <h3>这里是用户昵称</h3>
                  <el-icon color="#FFF" :size="14"><CaretBottom /></el-icon>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="manage_bottom">
          <div class="tab_bar">
            <MyTabs :tab-items="tabItems" v-on:current-item="clickTabHandle" />
          </div>
          <div class="tab_content"></div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MyTabs from "../components/my-tabs.vue";
export default {
  data() {
    return {
      // 左侧 - 菜单栏选项
      menuItem: [
        { id: "0", name: "手术申请", checked: false },
        { id: "1", name: "手术排台", checked: false },
        { id: "2", name: "手术排班", checked: false },
        { id: "3", name: "手术通知", checked: false },
        { id: "4", name: "患者列表", checked: false },
        { id: "5", name: "手术查询", checked: false },
      ],
      isClinicalManage: true,
      controlFold: false,
      // 控制 logo 标题显示隐藏
      titleVisible: true,
      // Tabs
      tabItems: [],
      // 当前标签对应展示的内容
      tabContent: null,
      // 当前点击的标签
      currentIndex: "",
    };
  },
  methods: {
    // 点击 - 标签
    clickTabHandle(item) {
      this.tabItems.forEach((val) => {
        if (item.id == val.id) {
          val.checked = true;
          this.currentIndex = val.id;
        } else {
          val.checked = false;
        }
      });
      // this.tabItemContent = this.tabItems.find((v, i) => i === idx);
      console.log(item);
    },
    // 点击 - 导航栏选项
    clickMenuItem(val) {
      const index = this.tabItems.findIndex((item) => item.id === val.id);
      this.tabItems.forEach((i) => (i.checked = false));
      if (index !== -1) {
        // 已有
        this.tabItems[index].checked = true;
      } else {
        // 沒有
        val.checked = true;
        this.tabItems.push(val);
      }
    },
    clickLeftBtn() {
      console.log(this.$refs.outside.$refs);
      console.log(this.$refs.inside);
    },
    // 点击 - 折叠按钮
    clickFoldBtn() {
      this.controlFold = !this.controlFold;
    },
    // 点击 - 临床信息管理
    clickClinicalHandle() {
      this.isClinicalManage = true;
    },
    // 点击 - 手术信息管理
    clickSurgeryHandle() {
      this.isClinicalManage = false;
    },
  },
  components: {
    MyTabs,
  },
};
</script>

<style lang="less" scoped>
.manage_layout {
  // width: 1920px;
  // height: 1080px;
  width: 100%;
  height: 100vh;
  user-select: none;

  .el-container {
    height: 100%;

    .el-aside {
      background: var(--manage-theme-color-1);
      transition: width 0.5s;
      -webkit-transition: width 0.5s;
      -moz-transition: width 0.5s;
      -webkit-transition: width 0.5s;
      -o-transition: width 0.5s;

      .manage_signboard {
        height: 50px;
        display: flex;
        align-items: center;

        img {
          width: 28px;
          height: 23px;
          margin-left: 16px;
        }

        h3 {
          font-size: 16px;
          color: #fff;
          margin-left: 7px;
          // 不换行
          word-break: keep-all;
        }
      }

      .el-menu {
        border-right: 0; // 取消默认样式
        transition: width 0.5s;
        -webkit-transition: width 0.5s;
        -moz-transition: width 0.5s;
        -webkit-transition: width 0.5s;
        -o-transition: width 0.5s;

        .el-sub-menu {
          .el-icon {
            margin: 0 10px 0 -2px !important;
          }

          // li 旁边的小圆点
          .el-menu-item::before {
            content: "";
            width: 4px;
            height: 4px;
            display: inline-block;
            border-radius: 50%;
            background: #fff;
            margin: 0 10px 0 13px;
          }

          // 被选中的 li 旁边的小圆点
          .el-menu-item.is-active::before {
            background: rgb(11, 230, 205);
          }

          .el-menu-item.is-active {
            background: rgba(11, 230, 205, 0.1);
          }
        }
      }
    }

    .el-main {
      padding: 0;

      .manage_top {
        height: 50px;
        background: #1b3d44;

        .el-row {
          height: 100%;

          .tab_control_left {
            height: 100%;
            display: flex;
            align-items: center;

            .fold_button {
              height: 50px;
              width: 50px;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              // border-radius: 8px;
              // margin-left: 10px;
              // margin-right: 10px;

              &:hover {
                background: rgba(11, 230, 205, 0.1);
              }

              img {
                width: 22px;
                height: 20px;
              }
            }

            .clinical_btn,
            .surgery_btn {
              width: 132px;
              height: 40px;
              color: #fff;
              font-size: 14px;
              cursor: pointer;
              line-height: 40px;
              text-align: center;
              border-radius: 8px;
              background: #193b42;
              margin-left: 10px;

              &:hover {
                background: rgba(11, 230, 205, 0.1);
              }
            }

            .active {
              background: rgba(11, 230, 205, 0.1);
            }
          }

          .function_right {
            display: flex;
            justify-content: flex-end;
            height: 100%;

            .function_right_btn {
              display: flex;
              align-items: center;
              margin-right: 30px;

              .el-button + .el-button {
                margin-left: 17px;
              }

              .el-button {
                background: rgba(11, 230, 205, 0.1);
                border: 0;

                &:hover {
                  background: rgba(11, 230, 205, 0.5);
                }
              }
            }

            .function_right_avatar {
              display: flex;
              align-items: center;
              margin: 0 40px 0 10px;

              .el-avatar--circle {
                border: 2px solid #fff;
              }

              h3 {
                color: #fff;
                font-size: 14px;
                margin: 0 25px 0 12px;
              }
            }
          }
        }
      }

      .manage_bottom {
        .tab_bar {
          height: 40px;
          background: #fff;
          display: flex;

          .el-icon {
            cursor: pointer;
            height: 100%;
            width: 40px;
          }
        }

        .tab_content {
          background: #eaecec;
          width: 100%;
          height: calc(100vh - 90px);
        }
      }
    }
  }
}
</style>
