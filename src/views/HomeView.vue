<template>
  <div class="home_container">
    <div class="home_container_main">
      <!-- 左侧导航区域 -->
      <nav class="navigation_left">
        <ul>
          <li>
            <div class="left_text">
              <h5>临床信息管理</h5>
              <p>Anesthesia information management</p>
            </div>
            <div class="right_icon">
              <img src="../assets/images/icon.png" alt="" />
            </div>
          </li>
          <li>
            <div class="left_text">
              <h5>临床信息管理</h5>
              <p>Anesthesia information management</p>
            </div>
            <div class="right_icon">
              <img src="../assets/images/icon.png" alt="" />
            </div>
          </li>
          <li>
            <div class="left_text">
              <h5>临床信息管理</h5>
              <p>Anesthesia information management</p>
            </div>
            <div class="right_icon">
              <img src="../assets/images/icon.png" alt="" />
            </div>
          </li>
        </ul>
      </nav>
      <!-- 中间导航区域 -->
      <div class="personal_rights">
        <!-- 顶部 -->
        <div class="personal_information">
          <div class="avatar">
            <!-- 头像 -->
            <el-avatar :size="50" src="">
              <template #default>
                <img src="../assets/images/hd.png" alt="" />
              </template>
            </el-avatar>
          </div>
          <!-- 信息 -->
          <div class="information">
            <h3>王婷婷</h3>
            <el-tag color="#0c4e55" effect="dark">护士</el-tag>
          </div>
        </div>
        <!-- 分割线 -->
        <div class="line_between"></div>
        <!-- 底部 -->
        <div class="functional_region">
          <el-carousel
            indicator-position="outside"
            :autoplay="false"
            arrow="never"
            trigger="click"
          >
            <el-carousel-item v-for="item in 3" :key="item">
              <div class="rights_container">
                <div class="rights_item">
                  <div class="rights_item_img">
                    <img
                      src="../assets/images/functional_btn_icon.png"
                      alt=""
                    />
                  </div>
                  <div class="rights_item_tittle">
                    <h3>电子麻醉记录</h3>
                  </div>
                </div>
                <div class="rights_item">
                  <div class="rights_item_img">
                    <img
                      src="../assets/images/functional_btn_icon.png"
                      alt=""
                    />
                  </div>
                  <div class="rights_item_tittle">
                    <h3>电子麻醉记录</h3>
                  </div>
                </div>
                <div class="rights_item">
                  <div class="rights_item_img">
                    <img
                      src="../assets/images/functional_btn_icon.png"
                      alt=""
                    />
                  </div>
                  <div class="rights_item_tittle">
                    <h3>电子麻醉记录</h3>
                  </div>
                </div>
                <div class="rights_item">
                  <div class="rights_item_img">
                    <img
                      src="../assets/images/functional_btn_icon.png"
                      alt=""
                    />
                  </div>
                  <div class="rights_item_tittle">
                    <h3>电子麻醉记录</h3>
                  </div>
                </div>
                <div class="rights_item">
                  <div class="rights_item_img">
                    <img
                      src="../assets/images/functional_btn_icon.png"
                      alt=""
                    />
                  </div>
                  <div class="rights_item_tittle">
                    <h3>电子麻醉记录</h3>
                  </div>
                </div>
                <div class="rights_item">
                  <div class="rights_item_img">
                    <img
                      src="../assets/images/functional_btn_icon.png"
                      alt=""
                    />
                  </div>
                  <div class="rights_item_tittle">
                    <h3>电子麻醉记录</h3>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 右侧导航区域 -->
      <nav class="navigation_right">
        <ul>
          <li>
            <div class="left_text">
              <h5>临床信息管理</h5>
              <p>Anesthesia information management</p>
            </div>
            <div class="right_icon">
              <img src="../assets/images/icon.png" alt="" />
            </div>
          </li>
          <li>
            <div class="left_text">
              <h5>临床信息管理</h5>
              <p>Anesthesia information management</p>
            </div>
            <div class="right_icon">
              <img src="../assets/images/icon.png" alt="" />
            </div>
          </li>
          <li>
            <div class="left_text">
              <h5>临床信息管理</h5>
              <p>Anesthesia information management</p>
            </div>
            <div class="right_icon">
              <img src="../assets/images/icon.png" alt="" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.home_container {
  background: url("../assets/images/home_bg.jpg") no-repeat center 0;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;
}

.home_container_main {
  width: 1600px;
  height: 635px;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
}

/* 中间区域 start */

.personal_rights {
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 750px;
  border-radius: 15px;
  box-shadow: 0 0px 40px #08cdb8;
  user-select: none;
}

.personal_information {
  display: flex;
  margin: 50px 0 0 80px;
}

.avatar .el-avatar {
  width: 80px;
  height: 80px;
  border: 2px solid var(--border-theme-color);
}

.information {
  margin-left: 20px;
}

.information h3 {
  color: #fff;
  font-weight: 400;
  margin: 4px 0 20px 0;
}

.information .el-tag {
  border: 1px solid var(--border-theme-color);
  font-size: 14px;
}

.line_between {
  width: 80%;
  height: 1px;
  background-image: linear-gradient(to right, #0cffe0, #0cffe000);
  margin-top: 30px;
  margin: 30px 0 0 85px;
}

.functional_region {
  margin: 0px 85px;
}

/* 轮播图 - 滑动条的样式 */
.el-carousel__indicators--outside button {
  background-color: var(--border-theme-color) !important;
}

/* 轮播图 - 滑动条的样式 */
.el-carousel__button {
  width: 30px !important;
  height: 5px !important;
}

/* 轮播图 - 内容区域样式 */
.el-carousel__container {
  height: 420px !important;
}

.rights_container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 27px;
}

.rights_item {
  margin: 30px 35px;
}

.rights_item_img {
  width: 80px;
  height: 80px;
  background: #0c4e55;
  border: 1px solid var(--border-theme-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  cursor: pointer;
  margin: 0 auto 20px;
}

.rights_item_img img {
  width: 50%;
}

.rights_item_tittle h3 {
  color: #fff;
  font-weight: 400;
  font-size: 18px;
}

/* 中间区域 end */

.navigation_left,
.navigation_right {
  height: 100%;
  width: 370px;
  user-select: none;
}

.navigation_left ul,
.navigation_right ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.navigation_left li,
.navigation_right li {
  width: 100%;
  height: 190px;
  background-image: linear-gradient(
    to right,
    rgb(2, 158, 138, 0.7),
    rgba(3, 95, 89, 0.4)
  );
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.navigation_left li:hover {
  background-image: linear-gradient(
    to right,
    rgb(2, 158, 138, 0.9),
    rgba(3, 95, 89, 0.6)
  );
}

.navigation_right li {
  background-image: linear-gradient(
    to right,
    rgba(3, 95, 89, 0.4),
    rgb(2, 158, 138, 0.7)
  );
  display: flex;
  flex-direction: row-reverse;
}

.navigation_right li:hover {
  background-image: linear-gradient(
    to right,
    rgba(3, 95, 89, 0.6),
    rgb(2, 158, 138, 0.9)
  );
}

.navigation_left .left_text {
  width: 215px;
  margin-left: 30px;
}

.navigation_right .left_text {
  margin-right: 30px;
}

.left_text h5 {
  color: #0be6cd;
  font-size: 20px;
  letter-spacing: 2px;
  text-align: right;
}

.navigation_right .left_text h5 {
  text-align: left;
}

.left_text p {
  color: #0be6cd;
  opacity: 0.3;
  font-size: 12px;
}

.right_icon {
  width: 60px;
  height: 60px;
  border: 1px solid #64f1f8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  margin-left: 20px;
}

.navigation_right .right_icon {
  margin-right: 20px;
}

.right_icon img {
  width: 50px;
  height: 50px;
}
</style>
