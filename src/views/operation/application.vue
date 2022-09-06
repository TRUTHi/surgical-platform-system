<template>
  <div class="application_container">
    <!-- 手术申请 | 头部 -->
    <div class="application_head">
      <el-card class="box-card">
        <el-row :gutter="40">
          <!-- 申请手术日期 -->
          <el-col :span="4">
            <div class="grid-content">
              <!-- 申请手术日期 | 选择器 -->
              <el-date-picker
                v-model="applicationDate"
                type="date"
                placeholder="请选择申请手术日期"
                :clearable="false"
              />
              <!-- 申请手术日期 | icon -->
              <svg
                t="1661213739483"
                class="icon-date"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2029"
                width="16"
                height="16"
              >
                <path
                  d="M1014.4 232c0-78.4-64-140.8-140.8-140.8h-99.2V44.8c0-19.2-16-33.6-33.6-33.6-19.2 0-33.6 16-33.6 33.6v46.4H318.4V44.8c0-19.2-16-33.6-33.6-33.6s-33.6 16-33.6 33.6v46.4H150.4c-78.4 0-140.8 64-140.8 140.8v641.6c0 78.4 62.4 140.8 140.8 140.8h721.6c78.4 0 140.8-64 140.8-140.8l1.6-641.6z m-68.8 640c0 19.2-8 38.4-20.8 51.2s-32 20.8-51.2 20.8H150.4c-19.2 0-38.4-8-51.2-20.8-12.8-12.8-20.8-32-20.8-51.2v-640c0-19.2 8-38.4 20.8-51.2 12.8-12.8 32-20.8 51.2-20.8h99.2v46.4c0 19.2 16 33.6 33.6 33.6s33.6-16 33.6-33.6v-48H704v46.4c0 19.2 16 33.6 33.6 33.6 19.2 0 33.6-16 33.6-33.6V158.4h99.2c19.2 0 38.4 8 51.2 20.8 14.4 14.4 20.8 32 20.8 51.2l3.2 641.6z"
                  fill="#999999"
                  p-id="2030"
                ></path>
                <path
                  d="M766.4 451.2H257.6c-19.2 0-33.6 16-33.6 33.6s16 33.6 33.6 33.6h508.8c19.2 0 33.6-16 33.6-33.6s-16-33.6-33.6-33.6z"
                  fill="#999999"
                  p-id="2031"
                ></path>
                <path
                  d="M604.8 651.2H257.6c-19.2 0-33.6 16-33.6 33.6s16 33.6 33.6 33.6h347.2c19.2 0 33.6-16 33.6-33.6s-14.4-33.6-33.6-33.6z"
                  fill="#999999"
                  p-id="2032"
                ></path>
              </svg>
            </div>
          </el-col>
          <!-- 患者姓名 -->
          <el-col :span="4">
            <div class="grid-content">
              <!-- 患者姓名 | input -->
              <el-input v-model="patientName" placeholder="请输入患者姓名">
                <!-- 患者姓名 | icon -->
                <template #suffix>
                  <svg
                    t="1661215241661"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2440"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M204.8 955.2H33.6c-20.8 0-33.6-12.8-33.6-33.6V756.8c0-9.6 3.2-17.6 9.6-24l683.2-656c12.8-12.8 33.6-12.8 48 0L912 241.6c6.4 6.4 9.6 14.4 9.6 24s-3.2 17.6-9.6 24L228.8 944c-6.4 8-14.4 11.2-24 11.2z m-136-68.8H192l648-620.8-123.2-116.8L68.8 771.2v115.2z"
                      fill="#999999"
                      p-id="2441"
                    ></path>
                    <path
                      d="M747.2 432c-6.4 0-17.6-3.2-24-9.6L553.6 257.6c-12.8-14.4-12.8-33.6 0-48 12.8-14.4 33.6-14.4 48 0l171.2 163.2c12.8 14.4 12.8 33.6 0 48-4.8 8-14.4 11.2-25.6 11.2z"
                      fill="#999999"
                      p-id="2442"
                    ></path>
                    <path
                      d="M990.4 955.2H436.8c-20.8 0-33.6-12.8-33.6-33.6s14.4-33.6 33.6-33.6h553.6c20.8 0 33.6 12.8 33.6 33.6s-12.8 33.6-33.6 33.6z"
                      fill="#999999"
                      p-id="2443"
                    ></path>
                  </svg>
                </template>
              </el-input>
            </div>
          </el-col>
          <!-- 住院号 -->
          <el-col :span="4">
            <div class="grid-content">
              <!-- 输入住院号 -->
              <el-input v-model="patientName" placeholder="请输入住院号">
                <!-- 输入住院号 | icon -->
                <template #suffix>
                  <svg
                    t="1661215241661"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2440"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M204.8 955.2H33.6c-20.8 0-33.6-12.8-33.6-33.6V756.8c0-9.6 3.2-17.6 9.6-24l683.2-656c12.8-12.8 33.6-12.8 48 0L912 241.6c6.4 6.4 9.6 14.4 9.6 24s-3.2 17.6-9.6 24L228.8 944c-6.4 8-14.4 11.2-24 11.2z m-136-68.8H192l648-620.8-123.2-116.8L68.8 771.2v115.2z"
                      fill="#999999"
                      p-id="2441"
                    ></path>
                    <path
                      d="M747.2 432c-6.4 0-17.6-3.2-24-9.6L553.6 257.6c-12.8-14.4-12.8-33.6 0-48 12.8-14.4 33.6-14.4 48 0l171.2 163.2c12.8 14.4 12.8 33.6 0 48-4.8 8-14.4 11.2-25.6 11.2z"
                      fill="#999999"
                      p-id="2442"
                    ></path>
                    <path
                      d="M990.4 955.2H436.8c-20.8 0-33.6-12.8-33.6-33.6s14.4-33.6 33.6-33.6h553.6c20.8 0 33.6 12.8 33.6 33.6s-12.8 33.6-33.6 33.6z"
                      fill="#999999"
                      p-id="2443"
                    ></path>
                  </svg>
                </template>
              </el-input>
            </div>
          </el-col>
          <!-- 术间名称 -->
          <el-col :span="4">
            <div class="grid-content">
              <!-- 选择术间名称 -->
              <el-select
                v-model="intraoperativeName"
                placeholder="请选择术间名称"
              >
                <el-option
                  v-for="item in intraoperativeNameOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </el-col>
          <!-- 查询 重置 按钮 -->
          <el-col :span="4">
            <div class="grid-content">
              <!-- 查询 按钮 -->
              <el-button class="query_btn" color="#27c5b7">
                <svg
                  t="1661219341259"
                  class="icon-query"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2578"
                  width="15"
                  height="15"
                >
                  <path
                    d="M457.6 24C224 24 40 208 40 441.6S224 860.8 457.6 860.8s419.2-184 419.2-417.6S692.8 24 457.6 24z m0 758.4c-190.4 0-340.8-148.8-340.8-340.8S267.2 102.4 457.6 102.4s340.8 148.8 340.8 340.8-148.8 339.2-340.8 339.2z"
                    fill="#FFFFFF"
                    p-id="2579"
                  ></path>
                  <path
                    d="M947.2 908.8l-88-88c-8-8-17.6-11.2-27.2-11.2s-20.8 4.8-27.2 11.2-11.2 17.6-11.2 27.2 4.8 20.8 11.2 27.2l88 88c14.4 14.4 40 14.4 54.4 0 8-8 11.2-17.6 11.2-27.2s-4.8-20.8-11.2-27.2z"
                    fill="#FFFFFF"
                    p-id="2580"
                  ></path>
                </svg>
                查询
              </el-button>
              <!-- 重置 按钮 -->
              <el-button color="#FFFFFF">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>

    <!-- 手术申请 | 主体 -->
    <div class="application_main">
      <el-card class="box-card">
        <!-- 顶部 按钮区域 -->
        <div class="top_button_area">
          <el-row :gutter="20">
            <el-col :span="18">
              <!-- 左侧 按钮区域 -->
              <div class="left_button_area">
                <el-button color="#27C5B7">
                  <el-icon :size="16"><CirclePlus /></el-icon>
                  手术申请
                </el-button>
                <el-button color="#FFFFFF">提交HIS</el-button>
                <el-button color="#FFFFFF">同步数据</el-button>
              </div>
            </el-col>
            <el-col :span="6">
              <!-- 右侧 按钮区域 -->
              <div class="right_button_area">
                <!-- 打印 -->
                <el-button color="#FFFFFF">
                  <svg
                    t="1661239759663"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2482"
                    width="18"
                    height="18"
                  >
                    <path
                      d="M829.44 312.8V144.64a82.4 82.4 0 0 0-82.4-82.4H276.96a82.4 82.4 0 0 0-82.4 82.4v168.32H151.68a82.4 82.4 0 0 0-82.4 82.4v281.92a82.4 82.4 0 0 0 82.4 82.4h42.88v105.6a82.4 82.4 0 0 0 82.4 82.4h469.92a82.4 82.4 0 0 0 82.4-82.4v-105.6h42.88a82.4 82.4 0 0 0 82.4-82.4V395.36a82.4 82.4 0 0 0-82.4-82.4h-42.72zM758.72 132.8v180.16H265.28V132.8h493.44zM194.56 646.08v42.88H139.84V383.52h744.32v305.44h-54.72v-42.88a82.4 82.4 0 0 0-82.4-82.4H276.96c-45.44 0-82.4 36.96-82.4 82.4z m70.72 231.04V634.4h493.6v242.72H265.28z"
                      fill="#333333"
                      p-id="2483"
                    ></path>
                  </svg>
                </el-button>
                <!-- 全屏 -->
                <el-button color="#FFFFFF">
                  <svg
                    t="1661240106056"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2618"
                    width="18"
                    height="18"
                  >
                    <path
                      d="M136.64 136.8h198.24c20.64 0 37.44-16.8 37.44-37.44 0-20.64-16.8-37.44-37.44-37.44H137.12c-41.6 0-75.36 33.76-75.36 75.36v197.6c0 20.64 16.8 37.44 37.44 37.44 20.64 0 37.44-16.8 37.44-37.44V136.8zM650.72 99.36c0 20.64 16.8 37.44 37.44 37.44H886.4v198.24c0 20.64 16.8 37.44 37.44 37.44 20.64 0 37.44-16.8 37.44-37.44V137.28c0-41.6-33.76-75.36-75.36-75.36H688.16c-20.64 0-37.44 16.8-37.44 37.44zM886.4 886.56H688.16c-20.64 0-37.44 16.8-37.44 37.44 0 20.64 16.8 37.44 37.44 37.44h197.6c41.6 0 75.36-33.76 75.36-75.36V688.32c0-20.64-16.8-37.44-37.44-37.44-20.64 0-37.44 16.8-37.44 37.44v198.24zM99.2 650.88c-20.64 0-37.44 16.8-37.44 37.44v197.6c0 41.6 33.76 75.36 75.36 75.36h197.6c20.64 0 37.44-16.8 37.44-37.44 0-20.64-16.8-37.44-37.44-37.44H136.64V688.32c0-20.64-16.8-37.44-37.44-37.44zM284.48 716h454.08c41.6 0 75.36-33.76 75.36-75.36V382.72c0-41.6-33.76-75.36-75.36-75.36H284.48c-41.6 0-75.36 33.76-75.36 75.36v257.76a75.216 75.216 0 0 0 75.36 75.52z m454.56-333.76v258.88H283.84V382.24h455.2z"
                      fill="#333333"
                      p-id="2619"
                    ></path>
                  </svg>
                </el-button>
                <!-- 过滤 -->
                <el-button color="#FFFFFF">
                  <svg
                    t="1661240128318"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="2754"
                    width="18"
                    height="18"
                  >
                    <path
                      d="M512.16 328c-101.28 0-183.68 82.4-183.68 183.68s82.4 183.68 183.68 183.68 183.68-82.4 183.68-183.68S613.44 328 512.16 328z m0 297.12c-62.56 0-113.44-50.88-113.44-113.44 0-62.56 50.88-113.44 113.44-113.44 62.56 0 113.44 50.88 113.44 113.44 0 62.56-50.88 113.44-113.44 113.44z"
                      fill="#333333"
                      p-id="2755"
                    ></path>
                    <path
                      d="M1011.2 475.52L792.96 97.44c-12.8-22.24-36.8-36.16-62.56-36.16H293.92c-25.76 0-49.76 13.92-62.56 36.16L13.12 475.52c-12.8 22.24-12.8 49.92 0 72.32l218.24 378.08c12.8 22.24 36.8 36.16 62.56 36.16h436.48c25.76 0 49.76-13.92 62.56-36.16L1011.2 547.84c12.96-22.4 12.96-50.08 0-72.32z m-65.6 36.16L728.96 887.04H295.52L78.72 511.68 295.52 136.32h433.44L945.6 511.68z"
                      fill="#333333"
                      p-id="2756"
                    ></path>
                  </svg>
                </el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 中间 表格区域 -->
        <div class="middle_list">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed="left" type="selection" width="64" />
            <el-table-column
              v-for="item in headerField"
              :key="item.value"
              :prop="item.value"
              :label="item.label"
              width="120"
            />
            <el-table-column fixed="right" label="操作" width="192">
              <template #default="scope">
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click.prevent="deleteRow(scope.$index)"
                >
                  编辑
                </el-button>
                <el-button
                  link
                  size="small"
                  @click.prevent="deleteRow(scope.$index)"
                  class="check-button"
                  v-on:mousedown="checkButtonMouseDown"
                  v-on:mouseup="checkButtonMouseUp"
                  v-on:blur="checkButtonblur"
                >
                  查看
                </el-button>
                <el-button
                  link
                  type="warning"
                  size="small"
                  @click.prevent="deleteRow(scope.$index)"
                >
                  审核
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- 底部 页码区域 -->
        <div class="bottom_pagination">
          <!-- 左侧条数 -->
          <div class="number_records">共109条记录</div>
          <!-- 右侧页码 -->
          <el-pagination
            small
            background
            layout="prev, pager, next, jumper"
            :total="50"
            class="mt-4"
          >
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 申请手术日期
      applicationDate: "",
      // 患者姓名
      patientName: "",
      // 住院号
      inpatientNumber: "",
      // 术间名称
      intraoperativeName: "",
      // 术间名称 选项
      intraoperativeNameOptions: [
        {
          value: "1",
          label: "术间名称-1",
        },
        {
          value: "2",
          label: "术间名称-2",
        },
        {
          value: "3",
          label: "术间名称-3",
        },
        {
          value: "4",
          label: "术间名称-4",
        },
        {
          value: "5",
          label: "术间名称-5",
        },
        {
          value: "6",
          label: "术间名称-6",
        },
        {
          value: "7",
          label: "术间名称-7",
        },
        {
          value: "8",
          label: "术间名称-8",
        },
      ],
      // 列表数据 表头
      headerField: [],
      // 列表数据
      tableData: [
        { num: "01" },
        { num: "02" },
        { num: "03" },
        { num: "04" },
        { num: "05" },
        { num: "06" },
        { num: "07" },
        { num: "08" },
        { num: "09" },
        { num: "10" },
      ],
    };
  },
  methods: {
    // 查看按钮 - 鼠标按下, 鼠标松开, 失去焦点的样式
    checkButtonMouseDown(e) {
      e.currentTarget.style.color = "#42C0F5";
    },
    checkButtonMouseUp(e) {
      e.currentTarget.style.color = "rgba(66, 192, 245, 0.5)";
    },
    checkButtonblur(e) {
      e.currentTarget.style.color = "#42C0F5";
    },
  },
  async created() {
    // 本地缓存 - 当前访问的路由地址
    sessionStorage.setItem("previousIndex", this.$route.path);
    // 发起请求 - 获取表头数据
    const { data } = await this.$http.get(
      "/adminapi/OperationApplication/hqbt"
    );
    this.headerField = data.result;
    console.log(this.headerField);
  },
};
</script>

<style lang="less">
.application_container {
  background: #eaecec;
  padding: 20px 14px 0;

  .application_head {
    .box-card {
      height: 64px;

      .el-card__body {
        padding: 0;
        margin-top: 16px;

        .el-row {
          margin-left: 20px !important;
          margin-right: 0 !important;

          .el-col {
            min-width: 220px;

            .grid-content {
              position: relative;

              // 申请手术日期 | 选择器
              .el-date-editor {
                width: 100%;

                // 输入控件
                .el-input__inner {
                  padding-left: 16px;
                }
                // 图标
                .el-input__prefix {
                  display: none;
                }
              }

              // 申请手术日期 | icon
              .icon-date {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 10px;
              }

              // 患者姓名 住院号 | 输入框
              .el-input {
                height: 100%;

                .el-input__inner {
                  padding-left: 13px;
                }

                .el-input__suffix-inner > :first-child {
                  margin-right: 10px;
                }
              }

              .el-select {
                width: 100%;

                .el-input__inner {
                  height: 32px;
                }
              }

              .el-button {
                width: 72px;
                height: 32px;

                &.query_btn {
                  color: #fff;
                  border: 0;
                }

                .icon-query {
                  margin-right: 5px;
                }

                & + .el-button {
                  margin-left: 9px;
                  border: 1px solid #efefef;
                }
              }
            }
          }
        }
      }
    }
  }

  .application_main {
    margin-top: 10px;

    .box-card {
      height: calc(100vh - 110px - 64px - 10px - 28px);

      .el-card__body {
        padding: 20px 20px 0;

        .top_button_area {
          .el-row {
            margin: 0 !important;

            .el-col {
              padding: 0 !important;

              .left_button_area {
                .el-button {
                  width: 102px;
                  height: 32px;
                  padding-left: 12px;

                  &:first-child {
                    color: #fff;

                    .el-icon {
                      margin-right: 6px;
                    }
                  }

                  & + .el-button {
                    margin-left: 20px;
                    border: 1px solid #efefef;
                  }
                }
              }

              .right_button_area {
                float: right;

                .el-button {
                  width: 32px;
                  height: 32px;
                  border: 1px solid #efefef;

                  & + .el-button {
                    margin-left: 20px;
                  }
                }
              }
            }
          }
        }

        .middle_list {
          margin-top: 10px;

          .el-table {
            .el-table__header-wrapper {
              .el-table__cell {
                height: 48px;
                background: #f2f4f5;
              }
            }

            .el-table__body-wrapper {
              .el-table__row {
                height: calc((100vh - 294px) / 12);
              }
            }
          }

          .check-button {
            color: rgb(66, 192, 245);

            &:hover {
              color: rgba(66, 192, 245, 0.5);
            }
          }
        }

        .bottom_pagination {
          margin-top: 1.5%;

          .number_records {
            float: left;
          }

          .el-pagination {
            float: right;
            padding: 0;
          }
        }
      }
    }
  }

  .application_head,
  .application_main {
    // 卡片
    .box-card {
      box-shadow: none;
      border-radius: 10px;
      border: 0;
    }
  }
}

// 术间名称 | 下拉列表
.el-select-dropdown__list {
  height: 165px;
}
</style>