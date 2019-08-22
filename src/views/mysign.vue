<template >
  <div class="login">
    <div class="login_top">
      <img src="../images/xing01.png" alt />
      <a href="http://localhost:8080/#/mylogin" class="get_login">手机号登录</a>
      <a href="#" class="set_login">手机号快捷注册</a>
    </div>
    <div class="login_bottom">
      <div class="login_math">
        <div class="login_line"></div>
        <div class="math_center">其他登录方式</div>
        <div class="login_line"></div>
      </div>
      <div class="bottom_tu">
        <div class="login_emial">
          <img src="../images/xing02.png" alt />
          <span>邮箱</span>
        </div>
        <div class="login_emial">
          <img src="../images/xing03.png" alt />
          <span>微博</span>
        </div>
        <div class="login_emial">
          <img src="../images/xing04.png" alt />
          <span>QQ</span>
        </div>
        <div class="login_emial">
          <img src="../images/xing05.png" alt />
          <span>人人</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
console.log(axios)
export default {
}
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  background: url('../images/xingbj.png') no-repeat center center;
  background-size: 100%;
  position: fixed;
  box-sizing: border-box;
  padding: 0.26rem 5% 0;
  background-size: 100% 100%;
  bottom: 0;
  top: 0;
  .login_top {
    img {
      display: block;
      margin: 0.88rem auto 0.54rem;
      width: 0.9rem;
      height: 0.9rem;
    }
    .get_login {
      display: block;
      width: 100%;
      height: 0.4rem;
      margin-bottom: 0.2rem;
      text-align: center;
      line-height: 0.4rem;
      background: #2cc17b;
      color: #fff;
      border-radius: 3px;
      font-size: 16px;
      text-decoration: none;
    }
    .set_login {
      display: block;
      width: 100%;
      height: 0.38rem;
      margin-bottom: 0.2rem;
      text-align: center;
      line-height: 0.4rem;
      border: 1px solid #2cc17b;
      color: #2cc17b;
      box-sizing: border-box;
      border-radius: 3px;
      font-size: 16px;
      text-decoration: none;
    }
  }
  .login_bottom {
    height: 1.6rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
    .login_math {
      display: flex;
      .math_center {
        padding: 0 0.2rem;
        color: #a4a9b2;
      }
    }
    .login_line {
      height: 1px;
      width: 0.9rem;
      background: #a4a9b2;
      margin-top: 0.08rem;
    }
    .login_line:nth-child(1) {
      margin-left: 0.2rem;
    }
    .bottom_tu {
      display: flex;
    }
    img {
      width: 0.42rem;
      display: block;
      padding: 0.3rem 0.2rem 0;
    }
    span {
      display: inline-block;
      margin-top: 0.1rem;
    }
  }
}
</style>
