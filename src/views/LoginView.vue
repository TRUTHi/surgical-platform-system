<template>
  <div class="login_container">
    <!-- 表单区域 -->
    <el-form
      class="login_form"
      :rules="rules"
      :model="userInfo"
      ref="ruleForm"
      autocomplete="on"
    >
      <!-- 标题 -->
      <div class="login_title">用户登录</div>
      <!-- 账户密码 -->
      <div class="login_main_input">
        <el-form-item class="u_number" prop="username">
          <el-input v-model="userInfo.username" placeholder="请输入用户名">
            <template #prefix>
              <svg
                t="1660814398061"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3698"
                width="22"
                height="22"
              >
                <path
                  d="M377.6 369.6c-8 8-6.4 22.4 3.2 28.8 43.2 32 86.4 48 129.6 48s88-16 129.6-48c9.6-6.4 11.2-20.8 3.2-28.8-6.4-8-17.6-9.6-27.2-3.2-36.8 27.2-72 41.6-107.2 41.6s-70.4-12.8-107.2-41.6c-6.4-6.4-17.6-4.8-24 3.2z m188.8 203.2C761.6 600 944 769.6 945.6 976c0 24-19.2 41.6-41.6 41.6l-785.6 3.2c-22.4 0-41.6-19.2-41.6-41.6 0-206.4 180.8-377.6 376-406.4-128-27.2-225.6-142.4-227.2-281.6C224 132.8 350.4 3.2 507.2 1.6s283.2 128 284.8 286.4c0 139.2-96 256-225.6 284.8z"
                  fill="#2c9f89"
                  p-id="3699"
                ></path>
              </svg>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="u_password" prop="password">
          <el-input
            :type="psdIsVisible ? 'text' : 'password'"
            v-model="userInfo.password"
            placeholder="请输入密码"
          >
            <template #prefix>
              <svg
                t="1660814644665"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3834"
                width="22"
                height="22"
              >
                <path
                  d="M882.56 358.08H745.6v-91.52c0-129.44-104.96-234.24-234.24-234.24h-3.84c-127.68 2.08-230.4 106.24-230.4 234.24v91.52H140c-39.84 0-72.16 32.32-72.16 72.16v488c0 39.84 32.32 72.16 72.16 72.16h742.56c39.84 0 72.16-32.32 72.16-72.16v-488c0-39.84-32.32-72.16-72.16-72.16zM536.48 783.84v0.32c-0.16 17.6-11.52 32-25.12 32h-0.48c-13.6-0.16-24.64-14.56-24.64-32.16V608.96c0.16-17.6 11.36-31.84 25.12-31.84 13.92 0 25.12 14.56 25.12 32.32v174.4z m144.48-427.84h-339.2v-90.72c0-93.44 76.16-168.96 169.6-168.32h2.88c92.32 1.44 166.72 76.8 166.72 169.6v89.44z"
                  fill="#2c9f89"
                  p-id="3835"
                ></path>
              </svg>
            </template>
          </el-input>
          <div class="eye">
            <span
              class="iconfont"
              :class="switchEye"
              @click="changePsdIsVisible"
            ></span>
          </div>
        </el-form-item>
        <div class="validate">
          <el-row :gutter="15">
            <el-col :span="16">
              <el-form-item prop="code">
                <el-input v-model="userInfo.code" placeholder="请输入验证码">
                  <template #prefix>
                    <svg
                      t="1660814683861"
                      class="icon"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="3970"
                      width="22"
                      height="22"
                    >
                      <path
                        d="M908.64 128.64C809.6 120.16 677.76 77.28 513.28 0 351.04 79.36 218.72 122.56 116.16 129.44a39.68 39.68 0 0 0-36.96 39.52v382.08C110.72 781.44 255.04 939.04 512 1024c253.76-84.64 397.92-242.24 432.8-472.96V168.16c0-20.48-15.68-37.76-36.16-39.52z m-254.4 314.88L490.72 608c-7.36 7.36-20 7.36-27.36 0l-93.44-93.92c-7.52-7.68-7.52-20 0-27.52 3.68-3.68 8.48-5.76 13.76-5.76 5.12 0 10.08 2.08 13.6 5.76l79.84 80.16L626.88 416c3.68-3.68 8.48-5.76 13.6-5.76a19.52 19.52 0 0 1 13.76 33.28z"
                        fill="#2c9f89"
                        p-id="3971"
                      ></path>
                    </svg>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <div class="security_code" v-on:click="getSecurityCodeImg">
                <img v-if="securityCodeImg" :src="securityCodeImg" alt="" />
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 登录按钮 -->
      <div class="login_main_btn">
        <button @click.prevent="clickLoginButton">立即登录</button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validateEmail = (rule, value, callback) => {
      var regExp =
        /[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
      if (value.trim() === "") {
        callback(new Error("请输入邮箱地址"));
        // } else if (!regExp.test(value)) {
        // callback("请输入合法邮箱地址");
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value.trim() === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validateCode = (rule, value, callback) => {
      if (value.trim() === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    return {
      // 用戶信息
      userInfo: {
        username: "", // admin
        password: "", // 850423
        code: "",
      },
      rules: {
        username: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        code: [{ validator: validateCode, trigger: "blur" }],
      },
      // 控制密碼可看或不可看
      psdIsVisible: false,
      switchEye: {
        "icon-yanjing_xianshi_o": false,
        "icon-yanjing_yincang_o": true,
      },
      // 验证码图片
      securityCodeImg: "",
      // 验证码 key
      securityCodeKey: "",
    };
  },
  methods: {
    changePsdIsVisible() {
      this.psdIsVisible = !this.psdIsVisible;
      this.switchEye["icon-yanjing_xianshi_o"] =
        !this.switchEye["icon-yanjing_xianshi_o"];
      this.switchEye["icon-yanjing_yincang_o"] =
        !this.switchEye["icon-yanjing_yincang_o"];
    },
    async clickLoginButton() {
      const isValid = await this.$refs.ruleForm
        .validate()
        .catch((e) => console.log(e));
      if (!isValid) return;

      const params = new URLSearchParams();
      params.append("username", this.userInfo.username);
      params.append("password", this.userInfo.password);
      params.append("captcha_key", this.securityCodeKey);
      params.append("captcha", this.userInfo.code);
      const { data } = await this.$http.post(
        "/adminapi/User/login",
        params
      );

      // 重新获取验证码图片
      this.getSecurityCodeImg();
      // 清空验证码
      this.userInfo.code = "";

      // console.log(data);

      // 判断是否登录成功
      if (data.code == -1) {
        this.showMessage(data.message);
      } else if (data.code == 4406) {
        this.showMessage(data.result.captcha);
      } else {
        // 登录成功, 保存 token
        localStorage.setItem("token", data.result.token);
        // 跳转到首页
        this.$router.push("/home");
      }
    },
    showMessage(message) {
      this.$alert(message, {
        showClose: false,
        showConfirmButton: false,
      });
      setTimeout(() => {
        this.$msgbox.close();
      }, 1500);
    },
    // 获取验证码图片
    async getSecurityCodeImg() {
      const { data: res } = await this.$http.get("/adminapi/Other/captcha");
      this.securityCodeImg = res.result.captcha;
      this.securityCodeKey = res.result.key;
    },
  },
  created() {
    // 获取验证码图片
    this.getSecurityCodeImg();
  },
};
</script>

<style lang="less">
.el-message-box__message > p {
  text-align: center;
}

.el-form-item {
  margin-bottom: 0 !important;
}

.eye {
  height: 37px;
  width: 50px;
  position: absolute;
  right: 0;
  top: 0;
}

.eye .iconfont {
  font-size: 28px !important;
  position: absolute;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.security_code {
  height: 37px;
  overflow: hidden;
  cursor: pointer;
}

.security_code img {
  width: 100%;
  height: 100%;
}

.login_container {
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("../assets/images/lg_bg.jpg") no-repeat center 0;
  background-size: cover;
}

.login_form {
  box-shadow: 0 -5px 30px #40cfb1;
  border-radius: 15px;
  width: 450px;
  height: 395px;
  background: rgba(0, 0, 0, 0.69);
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 0 65px;
}

.login_title {
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 30px 0;
}

.login_main_input .iconfont {
  font-size: 22px;
  color: #2c9f89;
}

/* 阿里云 icon */
.el-input__wrapper {
  padding: 0 !important;
  position: relative;
}

.el-input__prefix {
  position: absolute;
}
/* 阿里云 icon */

.el-input__prefix {
  left: 15px !important;
}

.login_main_input {
  .el-input--prefix .el-input__inner {
    border: 0 !important;
    // background: #0cffe0 !important;
    background: #0cffe0;
    border-radius: 0;
    color: #999999;
    // padding-left: 50px !important;
    padding-left: 50px;
    font-weight: 500;
    height: 37px;
  }
}

.u_password {
  margin: 27px 0 !important;
  position: relative;
}

.login_main_btn {
  margin-top: 45px;
}

.login_main_btn button {
  background: #db4c1f;
  width: 100%;
  border: 0;
  height: 45px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
</style>
