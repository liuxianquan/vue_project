<template>
  <div class="wrap">
    <div class="main" v-for="item in shoplist" :key="item.productId">
 
          <img :src="item.bigPhotoUrl" alt />
          <h5>{{item.ownerName}}</h5>
          <p>{{item.productName}}</p>
          <b>售价：<span>￥{{item.price}}</span></b>
          <dl>
            <dt>金刚般若波罗蜜经</dt>
            <dd>第一品 法会因由分<br>

如是我闻，一时，佛在舍卫国祗树给孤独园，与大比丘众千二百五十人俱。尔时，世尊食时，著衣持钵，

入舍卫大城乞食。于其城中，次第乞已，还至本处。饭食讫，收衣钵，洗足已，敷座而坐。

　<br>

第二品 善现启请分<br>

时，长老须菩提在大众中即从座起，偏袒右肩，右膝着地，合掌恭敬而白佛言：“希有！世尊！如来善护念

诸菩萨，善付嘱诸菩萨。世尊！善男子、善女人，发阿耨多罗三藐三菩提心，应云何住，云何降伏其心？

”佛言：“善哉，善哉。须菩提！如汝所说，如来善护念诸菩萨，善付嘱诸菩萨。汝今谛听！当为汝说：善

男子、善女人，发阿耨多罗三藐三菩提心，应如是住，如是降伏其心。”“唯然，世尊！愿乐欲闻。”

　<br>

第三品 大乘正宗分
<br>

佛告须菩提：“诸菩萨摩诃萨应如是降伏其心！所有一切众生之类：若卵生、若胎生、若湿生、若化生；若

有色、若无色；若有想、若无想、若非有想非无想，我皆令入无余涅盘而灭度之。如是灭度无量无数无边

众生，实无众生得灭度者。何以故？须菩提！若菩萨有我相、人相、众生相、寿者相，即非菩萨。”</dd>
          </dl>
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
    padding: 0.1rem;
    img {
        width: 100%;
        height: 2rem;
      }
      h5 {
        font-size: 0.2rem;
        line-height: 0.5rem;
      }
      p{
        font-size: .16rem;
        line-height: .24rem;
      }
      b {
        font-size: 0.16rem;
        line-height: 0.2rem;
        color: blue;
        span{
          color:#ff632a;
          font-size: .2rem;
        }
      }
  }
  dt{
    font-size: .16rem;
    color:#666;
    line-height: .26rem;
  }
  dl{
    text-align: center;
  }
  dd{
    font-size: .14rem;
    color: #ccc;
    line-height: .2rem;
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
