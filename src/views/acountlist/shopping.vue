<template>
  <div class="wrap">
    <div class="main">
      <ul>
        <li v-for="item in shoplist" :key="item.productId">
          <img :src="item.bigPhotoUrl" alt />
          <h5>{{item.ownerName}}</h5>
          <p>{{item.productName}}</p>
          <p>售价：{{item.price}}</p>
        </li>
      </ul>
    </div>
    <div class="shop">
      <div class="shop_left" @click="add(shoplist)">
        <span class="iconfont">&#xe605;</span>
        <p>加入购物车</p>
      </div>
      <div class="shop_right">
        <button>加入学习</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'shopping',
  computed: {
    ...mapState('product', ['shoplist'])
  },

  methods: {
    ...mapMutations('cat', ['add'])
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow-y: auto;
    li {
      padding: 0.1rem;
      img {
        width: 100%;
        height: 3rem;
      }
      h5 {
        font-size: 0.2rem;
        line-height: 0.3rem;
      }
      p {
        font-size: 0.16rem;
        line-height: 0.2rem;
        color: blue;
      }
    }
  }
  .shop {
    height: 0.48rem;
    padding: 0.1rem;
    display: flex;
    border-top: 0.01rem solid rgba(221, 221, 221, 0.4);
    .shop_left {
      width: 0.8rem;
      padding: 0.07rem 0;
      text-align: center;
      font-size: 0.14rem;
      color: #3c4a55;
      span {
        font-size: 0.2rem;
      }
      p {
        line-height: 0.22rem;
      }
    }
    .shop_right {
      flex: 1;
      button {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0.24rem;
        color: #fff;
        background: #ff632a;
        font-size: 0.16rem;
        text-align: center;
        outline: none;
      }
    }
  }
}
</style>
