<template>
  <div class="wrap">
    <div class="header">
      <p>
        共
        <span>1</span>门课程
      </p>
    </div>
    <div class="main">
      <div class="while">
        <p>
          好好学习，天天向上，看到喜欢的课程，点击
          <br />【加入购物车】，在这里合并购买
        </p>
      </div>
      <div class="full">
        <ul>
          <li>1</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 0.49rem;
  border-bottom: 1px solid #ccc;
  p {
    line-height: 0.49rem;
    font-size: 0.14rem;
  }
}
.main {
  flex: 1;
  overflow-y: auto;
  p {
    text-align: center;
    color: #3c4a55;
    font-size: 0.16rem;
  }
}
</style>
