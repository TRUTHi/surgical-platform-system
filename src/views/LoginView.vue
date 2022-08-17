<template>
  <div class="login_container">
    <!-- 表单区域 -->
    <el-form class="login_form" :rules="rules" :model="userInfo" ref="ruleForm">
      <!-- 标题 -->
      <div class="login_title">用户登录</div>
      <!-- 账户密码 -->
      <div class="login_main_input">
        <el-form-item class="u_number" prop="email">
          <el-input v-model="userInfo.email" placeholder="请输入手机号">
            <template #prefix>
              <span class="iconfont icon-yonghu"></span>
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
              <span class="iconfont icon-mima"></span>
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
              <el-input v-model="userInfo.code" placeholder="请输入验证码">
                <template #prefix>
                  <span class="iconfont icon-hudun"></span>
                </template>
              </el-input>
            </el-col>
            <el-col :span="8">
              <div class="security_code" v-if="securityCodeImg">
                <img :src="securityCodeImg" alt="" />
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <!-- 登录按钮 -->
      <div class="login_main_btn">
        <button @click="clickLoginButton">立即登录</button>
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
      } else if (!regExp.test(value)) {
        callback("请输入合法邮箱地址");
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
    return {
      // 用戶信息
      userInfo: {
        email: "123456@qq.com",
        password: "123456",
        code: "",
      },
      rules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
      // 控制密碼可看或不可看
      psdIsVisible: false,
      switchEye: {
        "icon-yanjing_xianshi_o": false,
        "icon-yanjing_yincang_o": true,
      },
      // 验证码图片
      securityCodeImg: '',
      // 验证码 key
      securityCodeKey: ''
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
      try {
        const res = await this.loginApi();
        if (res === "成功") {
          localStorage.setItem("token", "8888");
          this.$router.push("/home");
        }
      } catch {
        this.showMessage();
      }
    },
    async loginApi() {
      const p = new Promise((res, rej) => {
        setTimeout(() => {
          if (
            this.userInfo.email === "123456@qq.com" &&
            this.userInfo.password === "123456"
          ) {
            res("成功");
          } else {
            rej("错误");
          }
        }, 1500);
      });
      return await p;
    },
    showMessage() {
      this.$alert("您输入的账户或密码有误，请重新输入！", {
        showClose: false,
        showConfirmButton: false,
      });
      setTimeout(() => {
        this.$msgbox.close();
      }, 1500);
    },
  },
  async created() {
    const { data: res } = await this.$http.get('/adminapi/Other/captcha')
    this.securityCodeImg = res.data.captcha
    this.securityCodeKey = res.data.key
  }
};
</script>

<style>
.el-message-box__message > p {
  text-align: center;
}

/* .el-message-box {
  background: rgba(255, 255, 255, 0.5) !important;
} */

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
  background: white;
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
  height: 380px;
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

.el-input--prefix .el-input__inner {
  border: 0 !important;
  background: #0cffe0;
  border-radius: 0;
  color: #999999;
  padding-left: 50px !important;
  font-weight: 500;
  height: 37px;
}

.u_password {
  margin: 27px 0 !important;
  position: relative;
}

.login_main_btn {
  margin-top: 23px;
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
