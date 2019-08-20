<template>
  <div class="wrap">
    <div class="main">
      <p>英语私教课</p>
      <p>￥365</p>
    </div>
    <div class="shop">
      <div class="shop_left">
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
export default {}
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
    p {
      font-size: 0.24rem;
      line-height: 0.3rem;
      text-align: center;
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
