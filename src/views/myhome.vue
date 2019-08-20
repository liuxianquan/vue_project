<template >
  <div class="myHome">
    <div class="myHomeHeader">
      <!-- <div class="logo">
        <img
          src="https://edu-image.nosdn.127.net/4413eae4-167f-40e4-84ee-5debff88df9c.png?imageView&quality=100"
          alt
        />
      </div>-->
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
  },
  data () {
    return {

    }
  },
  methods: {
    ...mapActions('myhome', ['getBannerList'])
  },
  created () {
    this.getBannerList()

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
</style>
