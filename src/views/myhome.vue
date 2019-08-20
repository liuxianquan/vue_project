<template >
  <div class="myHome">
    <div class="myHomeHeader">
      <div class="headerTitle">
        <img
          src="https://nos.netease.com/edu-image/a9333338-6b0e-4e56-a34a-77b2a2268b4a.png?imageView&quality=100"
          alt
        />
      </div>
      <div class="headApp">APP查看</div>
      <div class="headSearch">
        <i class="iconfont icon-tubiao01"></i>
      </div>
    </div>
    <banner ref="myBanner" :imgs="bannerListImgs" v-if="bannerListImgs.length > 0" />
    <div class="category">
      <div class="category-cell" v-for="(category, index) in categoryLists" :key="index">
        <img :src="category.photoUrl" alt />
        <p>{{category.name}}</p>
      </div>
    </div>
    <div class="divide"></div>
    <div class="goodClass">
      <h2>{{goodClassLists.sectionName}}</h2>
      <div class="goodClassCell" v-for="(value, num) in goodClassLists.cellList" :key="num">
        <img :src="value.photoUrl" alt />
        <p>{{ value.name }}</p>
      </div>
    </div>
    <div class="divide"></div>
  </div>
</template>
<script>
import banner from '../components/banner'
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: 'myhome',

  components: {
    banner
  },

  computed: {
    ...mapGetters('myhome', ['bannerListImgs']),
    ...mapGetters('myhome', ['categoryLists']),
    ...mapGetters('myhome', ['goodClassLists'])
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions('myhome', ['getBannerList']),
    ...mapActions('myhome', ['getCategoryList']),
    ...mapActions('myhome', ['getGoodClassList'])

  },
  created () {
    this.getBannerList();
    this.getCategoryList();
    this.getGoodClassList();

  },

}
</script>

<style lang="scss">
.myHomeHeader {
  display: flex;
  padding: 0 0.15rem 0 0.1rem;
  height: 0.49rem;
  .headerTitle {
    height: 0.49rem;
    line-height: 0.6rem;
    margin-right: 0.08rem;
    img {
      height: 0.24rem;
      width: 1.15rem;
    }
  }
  .headApp {
    width: 0.62rem;
    height: 0.2rem;
    color: #2cc17b;
    line-height: 0.2rem;
    text-align: center;
    border-radius: 0.1rem;
    border: 1px solid #2cc17b;
    margin-top: 0.12rem;
  }
  .headSearch {
    flex: 1;
    line-height: 0.49rem;
    i {
      width: 0.13rem;
      height: 0.13rem;
      font-size: 0.12rem;
      float: right;
      margin-right: 0.2rem;
    }
  }
}
.category {
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.15rem 0.35rem 0.15rem;
  .category-cell {
    display: inline-block;
    margin-top: 0.26rem;
    width: 25%;
    text-align: center;
    img {
      display: block;
      margin: 0 auto;
      width: 0.38rem;
      height: 0.38rem;
      // border-radius: 0.14rem;
      line-height: 1.01333rem;
      // color: #fff;
    }
    p {
      margin-top: 0.1rem;
      text-align: center;
      font-size: 0.14rem;
    }
  }
}
.divide {
  width: 100%;
  height: 0.12rem;
  background-color: #f2f4f7;
}
.goodClass {
  margin: 0 0.1rem;
  // height:6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  h2 {
    margin: 0.2rem 0 0.15rem 0;
    width: 100%;
    display: block;
    height: 0.2rem;
    font-size: 0.18rem;
    text-indent: 0.1rem;
  }
  .goodClassCell {
    width: 47.5%;
    img {
      width: 100%;
      display: block;
    }
    p {
      display: block;
      height: 0.6rem;
      margin-top: 0.1rem;
      font-size: 0.16rem;
      line-height: 0.16rem;
      color: #3c4a55;
    }
  }
}
</style>
