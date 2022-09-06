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
          :collapse-transition="false"
          :collapse="controlFold"
          :router="true"
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
              <span>三方核查管理</span>
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
              <span>麻醉信息管理</span>
            </template>
            <el-menu-item index="3-1">手术申请</el-menu-item>
            <el-menu-item index="3-2">手术申请</el-menu-item>
            <el-menu-item index="3-3">手术申请</el-menu-item>
            <el-menu-item index="3-4">手术申请</el-menu-item>
            <el-menu-item index="3-5">手术申请</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="44">
            <template #title>
              <el-icon :size="50"><TrendCharts /></el-icon>
              <span>手术护理管理</span>
            </template>
            <el-menu-item index="4-1">手术申请</el-menu-item>
            <el-menu-item index="4-2">手术申请</el-menu-item>
            <el-menu-item index="4-3">手术申请</el-menu-item>
            <el-menu-item index="4-4">手术申请</el-menu-item>
            <el-menu-item index="4-5">手术申请</el-menu-item>
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
                <div class="fold_button" v-on:click="clickFoldBtn('home')">
                  <!-- <img src="../assets/images/fold_btn.png" alt="" /> -->
                  <svg
                    t="1660871080429"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2165"
                    width="22"
                    height="20"
                    v-show="!controlFold"
                  >
                    <path
                      d="M904 112h-784c-27.2 0-48 22.4-48 48s20.8 48 48 48h785.6c27.2 0 48-22.4 48-48s-22.4-48-49.6-48zM904 464h-544c-27.2 0-48 22.4-48 48s22.4 48 48 48h545.6c27.2 0 48-20.8 48-48s-22.4-48-49.6-48zM904 816h-784c-27.2 0-48 20.8-48 48s20.8 48 48 48h785.6c27.2 0 48-20.8 48-48-1.6-27.2-22.4-48-49.6-48zM238.4 608V416c0-24-32-36.8-49.6-19.2l-105.6 96c-11.2 11.2-11.2 27.2 0 38.4l105.6 96c17.6 17.6 49.6 4.8 49.6-19.2z"
                      fill="#FFF"
                      p-id="2166"
                    ></path>
                  </svg>
                  <svg
                    t="1660871243188"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2301"
                    width="22"
                    height="20"
                    v-show="controlFold"
                  >
                    <path
                      d="M120 112h785.6c27.2 0 48 22.4 48 48s-20.8 48-48 48H120c-27.2 0-48-22.4-48-48s20.8-48 48-48zM120 464h545.6c27.2 0 48 22.4 48 48s-20.8 48-48 48H120c-27.2 0-48-20.8-48-48s20.8-48 48-48zM120 816h785.6c27.2 0 48 20.8 48 48s-20.8 48-48 48H120c-27.2 0-48-20.8-48-48-1.6-27.2 20.8-48 48-48zM785.6 608V416c0-24 32-36.8 49.6-19.2l105.6 96c11.2 11.2 11.2 27.2 0 38.4l-105.6 96c-17.6 17.6-49.6 4.8-49.6-19.2z"
                      fill="#FFF"
                      p-id="2302"
                    ></path>
                  </svg>
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
                  <el-button color="#0be6cd" circle v-on:click="screen">
                    <el-icon color="#FFF"><FullScreen /></el-icon>
                  </el-button>
                  <!-- 刷新 -->
                  <el-button color="#0be6cd" circle>
                    <el-icon color="#FFF"><RefreshRight /></el-icon>
                  </el-button>
                  <!-- 消息 -->
                  <div class="message_box">
                    <div>
                      <p>99+</p>
                    </div>
                    <el-tooltip
                      content="消息通知"
                      placement="bottom"
                      effect="light"
                    >
                      <el-button color="#0be6cd" circle>
                        <el-icon color="#FFF"><Bell /></el-icon>
                      </el-button>
                    </el-tooltip>
                  </div>
                  <!-- 主页 -->
                  <el-button color="#0be6cd" circle>
                    <el-icon color="#FFF"><HomeFilled /></el-icon>
                  </el-button>
                </div>
                <!-- 头像 -->
                <div class="function_right_avatar">
                  <!-- 基本信息 -->
                  <el-popover
                    placement="bottom-start"
                    :width="190"
                    trigger="hover"
                  >
                    <div>
                      <div class="personal-details">个人信息</div>
                      <div class="log-out">退出登录</div>
                    </div>
                    <template #reference>
                      <el-avatar
                        :size="37"
                        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                      ></el-avatar>
                    </template>
                  </el-popover>
                  <h3>这里是用户昵称</h3>
                  <el-icon color="#FFF" :size="14"><CaretBottom /></el-icon>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="manage_bottom">
          <div class="tab_bar">
            <MyTabs
              :tab-items="tabItems"
              v-on:current-item="clickTabHandle"
              v-on:remove-item="removeItemHandle"
            />
          </div>
          <div class="tab_content">
            <!-- <iframe src="/#/list1"></iframe> -->
            <router-view />
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MyTabs from "../components/my-tabs.vue";
// 全屏
import screenfull from "screenfull";
export default {
  data() {
    return {
      // 左侧 - 菜单栏选项
      menuItem: [
        { id: "/home/operation/application", name: "手术申请", checked: false },
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
      headerFields: null,
    };
  },
  methods: {
    screen() {
      screenfull.toggle();
    },
    // 移除标签
    removeItemHandle(item) {
      // 找出要移除的标签下标
      const index = this.tabItems.findIndex(
        (currentTab) => currentTab.id === item.id
      );
      // 移除
      this.tabItems.splice(index, 1);
      // 判断当前移除的标签是否被选中, 是的话, 左侧的选项也取消选中
      if (item.id === this.currentIndex) this.currentIndex = "";

      // 跳转到主页
      this.$router.push('/home/homepage');
    },
    // 点击 - 标签
    clickTabHandle(item) {
      if (typeof item == "string") {
        // 点击主页
        this.currentIndex = "/home/homepage";
        this.tabItems.forEach((val) => (val.checked = false));
        this.$router.push("/home/homepage");
        return;
      }
      // 点击的不是主业标签
      this.tabItems.forEach((val) => {
        if (item.id == val.id) {
          val.checked = true;
          this.currentIndex = val.id;
        } else {
          val.checked = false;
        }
      });
      this.$router.push(item.id);
    },
    // 点击 - 导航栏选项
    clickMenuItem(val) {
      this.currentIndex = val.id;
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
  created() {
    // 获取上一次访问的路由组件路径
    const previousIndex =
      sessionStorage.getItem("previousIndex") || "/home/homepage";
    // 判断是否为主页
    if (previousIndex.includes("homepage")) {
      return this.$router.push("/home/homepage");
    }
    // 不是主页, 找出对应的标签
    const tab = this.menuItem.find((item) => item.id == previousIndex);
    if (tab) {
      this.currentIndex = previousIndex;
      this.clickMenuItem(tab);
      this.$router.push(previousIndex);
    }
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
                margin-left: 20px;
              }

              .message_box {
                margin: 0 20px;
                position: relative;
                cursor: pointer;

                div {
                  width: 25px;
                  height: 14px;
                  background: #ff0000;
                  position: absolute;
                  border-radius: 10px;
                  top: 0;
                  right: -17px;
                  color: #fff;
                  font-size: 12px;
                  padding: 0 0 2px 4px;

                  p {
                    width: 25px;
                    height: 14px;
                    transform: scale(0.85) translate(-2px, -1px);
                  }
                }
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

              .personal-details {
                color: blue;
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
          overflow: hidden;

          iframe {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
