<template >
  <div class="cq_wrap">
    <!-- <h1>这是我的账号</h1> -->
    <router-link to="/mysign" class="cq_header">
      <p>
        <img :src="userInfo.avatar" />
      </p>
      <dl>
        <dt>{{userInfo.username}}</dt>
      </dl>
      <b class="iconfont">&#xe602;</b>
    </router-link>
    <div class="cq_main">
      <ul>
        <router-link :to="item.href" tag="li" v-for="item in list" :key="item.id">
          <span class="iconfont" :class="item.icons"></span>
          <p>{{item.text}}</p>
          <b class="iconfont">&#xe602;</b>
          <i v-if="cats.length > 0">{{cats.length}}</i>
        </router-link>
      </ul>
      <div class="cq_last">
        <span class="iconfont">&#xe7bd;</span>
        <p>分享赚学费</p>
        <b class="iconfont">&#xe602;</b>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      userInfo:
        JSON.parse(localStorage.getItem('userInfo')) ?
          JSON.parse(localStorage.getItem('userInfo')) :
          {
            avatar: 'https://edu-image.nosdn.127.net/7c5a8d29-ce20-4f97-a3a6-49872772667d.png?imageView&quality=100&thumbnail=100y100',
            username: '登录/注册',
          },
      list: [
        { id: 1, text: '我的订单', icons: 'icon-place-order', href: '/order' },
        { id: 2, text: '我的优惠券', icons: 'icon-youhuiquan', href: '/cart' },
        { id: 3, text: '我的购物车', icons: 'icon-tab_car', href: '/cart' },
        { id: 4, text: '我的学习卡', icons: 'icon-xuexiqia', href: '/shopping' }
      ]
    }
  },
  computed: {
    ...mapState('cat', ['cats']),
    getUsername () {
      return this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    }
  }
}
</script>

<style lang="scss" scoped>
.cq_wrap {
  display: flex;
  flex-direction: column;
  background: #eee;
}
.cq_header {
  background: #fff;
  height: 0.5rem;
  padding: 14px 0 14px 12px;
  display: flex;
  justify-content: space-between;
  p {
    width: 0.5rem;
    height: 0.5rem;
    padding-right: 0.12rem;
    img {
      width: 100%;
      border-radius: 0.25rem;
    }
  }
  dl {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    dt {
      font-size: 0.2rem;
      color: #333;
    }
    dd {
      color: #999;
    }
  }
  b {
    align-self: center;
    margin-right: 0.1rem;
    font-size: 0.16rem;
    color: #ccc;
  }
}
.cq_main {
  flex: 1;
  overflow-y: auto;

  ul {
    background: #fff;
    margin-bottom: 0.1rem;
  }
  .cq_last,
  li {
    background: #fff;
    height: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.16rem;
    position: relative;
    span {
      width: 0.42rem;
      text-align: center;
      color: #888;
    }

    p {
      flex: 1;
      font-size: 0.16rem;
    }
    b {
      margin-right: 0.1rem;
      color: #ccc;
    }
    i {
      position: absolute;
      right: 0.4rem;
      width: 0.2rem;
      height: 0.2rem;
      background: #ff4400;
      color: #ffffff;
      border-radius: 50%;
      text-align: center;
      line-height: 0.2rem;
      font-style: normal;
    }
  }
  ul > li {
    border-bottom: 1px solid #ddd;
  }
}
</style>
