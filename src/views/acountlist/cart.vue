<template>
  <div class="wrap">
    <div class="while" v-if="cats.length<1">
      <p>
        好好学习，天天向上，看到喜欢的课程，点击
        <br />【加入购物车】，在这里合并购买
      </p>
    </div>
    <div class="content" v-if="cats.length">
      <div class="header">
        <p>
          共
          <span>{{cats.length}}</span>
          门课程
        </p>
      </div>
      <div class="main">
        <div class="full">
          <dl v-for="item in cats" :key="item.productId">
            <dt>
              <input type="checkbox" :value="item.productId" v-model="checkedIds" />
              <span>{{item.ownerName}}</span>
            </dt>
            <dd>
              <input type="checkbox" :value="item.productId" v-model="checkedIds" />
              <img :src="item.bigPhotoUrl" alt />
              <div class="box">
                <p>{{item.productName}}</p>
                <p>永久有效</p>
                <p>￥{{item.price}}.00</p>
              </div>
              <span @click="remove(item)">删除</span>
            </dd>
            <dd>
              <p>
                该机构小计：
                <span>￥{{item.priceAfterPackage}}.00</span>
              </p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="footer">
        <input type="checkbox" v-model="isAllCheck" />
        <div class="tox">
          <p>
            合计：
            <span>￥{{total}}.00</span>
          </p>
          <p>若有优惠, 将在订单结算页面减扣</p>
        </div>
        <button>去结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'cart',
  computed: {
    ...mapState('cat', ['cats', 'msg']),
    ...mapGetters('cat', ['total']),
    isAllCheck: {
      get() {
        return this.$store.getters['cat/isAllCheck']
      },
      set(value) {
        this.$store.commit('cat/toggleCheck', value)
      }
    },
    checkedIds: {
      get() {
        return this.$store.state.cat.checkedIds
      },
      set(value) {
        this.$store.commit('cat/setCheckedIds', value)
      }
    }
  },
  methods: {
    ...mapMutations('cat', ['remove'])
  }
}
</script>
<style lang="scss">
.wrap {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.while {
  width: 100%;
  height: 100%;
  position: relative;
  p {
    width: 3rem;
    height: 0.36rem;
    text-align: center;
    color: #3c4a55;
    font-size: 0.14rem;
    line-height: 0.18rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
.header {
  height: 0.4rem;
  p {
    line-height: 0.4rem;
    font-size: 0.12rem;
    color: #3c4a55;
    padding: 0 0.1rem;
  }
}
.full {
  width: 100%;
  height: 100%;
  dl {
    input {
      width: 0.15rem;
      height: 0.15rem;
    }
    dt {
      padding: 0 0.1rem;
      height: 0.32rem;
      display: flex;
      align-items: center;
      background: #f7f9fc;
      font-size: 0.12rem;
      color: #3c4a55;
    }
    dd:nth-of-type(1) {
      background: #fff;
      margin: 0 0.1rem 0 0.1rem;
      padding: 0.1rem 0 0.2rem 0;
      display: flex;
      border-bottom: 0.01rem solid #edeff2;
      img {
        width: 0.97rem;
        height: 0.54rem;
      }
      .box {
        flex: 1;
        padding: 0 0.1rem 0 0.05rem;
        p:nth-of-type(1) {
          font-size: 0.14rem;
          line-height: 0.18rem;
          color: #3c4a55;
        }
        p:nth-of-type(2) {
          color: #8891a7;
          font-size: 0.12rem;
          line-height: 0.24rem;
        }
        p:nth-of-type(3) {
          font-size: 12px;
          color: #3c4a55;
        }
      }
      span {
        font-size: 0.12rem;
        padding-top: 0.24rem;
        color: #99a4bf;
      }
    }
    dd:nth-of-type(2) {
      padding-bottom: 0.08rem;
      background: #edeff2;
      height: 0.44rem;

      p {
        background: #fff;
        line-height: 0.44rem;
        padding: 0 0.1rem;
        text-align: right;
        font-size: 0.12rem;
        color: #70788c;
        span {
          color: #ff4400;
          font-size: 0.14rem;
        }
      }
    }
  }
}
.main {
  flex: 1;
  overflow-y: auto;
}
.footer {
  background: #fafafa;
  height: 0.48rem;
  display: flex;
  padding-left: 0.1rem;
  input {
    width: 0.15rem;
    height: 0.15rem;
    margin-top: 0.1rem;
  }
  .tox {
    flex: 1;
    p {
      padding: 0.06rem 0.1rem 0;
      font-size: 0.12rem;
      text-align: right;
      color: #3c4a55;
      span {
        color: #ff4400;
        font-size: 0.12rem;
      }
    }
  }
  button {
    width: 0.9rem;
    background: #ced1da;
    border: 1px solid #ccc;
    cursor: pointer;
    color: #fff;
    font-size: 0.14rem;
  }
}
</style>
