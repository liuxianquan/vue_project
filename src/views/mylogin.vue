<template>
  <div class="mylogin">
    <div class="login_top">
      <p>使用短信登录</p>
      <i class="iconfont icon-ziyuan"></i>
    </div>
    <div class="u_iptbox">
      <div class="u_logo"></div>
      <input type="text" placeholder="请输入手机号" class="ipt1" v-model="username" />
    </div>
    <div class="u_iptbox">
      <div class="u_logo_2"></div>
      <input type="password" placeholder="请输入密码" class="ipt1" v-model="password" />
    </div>
    <div
      class="loginbox"
      :disabled="!username || !password"
      @click="handleLogin({username, password})"
    >
      <a href="#">登录</a>
    </div>
    <div class="u_unlogin">
      <input type="checkbox" class="check" />
      <span>十天内免登录</span>|
      <span>忘记密码?</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['handleLogin'])
  }
}
</script>

<style lang="scss">
.mylogin {
  padding: 4% 5% 0;
  display: flex;
  flex-direction: column;
  .login_top {
    .icon-ziyuan {
      position: relative;
      right: 0.1rem;
      top: -0.02rem;
      float: right;
    }
    p {
      float: right;
      text-align: right;
      margin-bottom: 0.1rem;
    }
  }
  .u_iptbox {
    width: 100%;
    height: 0.46rem;
    margin-bottom: 0.3rem;
    border: 1px solid #eeeeee;
    display: flex;
    .u_logo {
      background: url('../images/zhuce01.png');
      background-position: 0 -78px;
      width: 0.22rem;
      height: 0.24rem;
      margin: 0.1rem 0 0 0.1rem;
    }
    .u_logo_2 {
      background: url('../images/zhuce01.png');
      background-position: 0 -42px;
      width: 0.22rem;
      height: 0.24rem;
      margin: 0.08rem 0 0 0.1rem;
    }
    .ipt1 {
      width: 2.35rem;
      height: 0.4rem;
      margin-left: 0.1rem;
      border: none;
      outline: none;
    }
  }
  .loginbox {
    width: 100%;
    height: 0.44rem;
    text-align: center;
    background: #2cc17b;
    line-height: 0.44rem;
    margin-bottom: 0.1rem;
    a {
      text-decoration: none;
      font-size: 18px;
      color: #ffffff;
    }
  }
  .u_unlogin {
    display: flex;
    .check {
      width: 0.18rem;
      height: 0.18rem;
      display: block;
      position: relative;
      top: -0.05rem;
    }
    span {
      padding: 0 0.1rem;
      display: block;
    }
  }
}
</style>
