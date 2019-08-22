<template>
  <div class="box">
    <div class="iptbox">
      <div class="u_logo"></div>
      <input type="text" class="ipt1" placeholder="请输入手机号" />
    </div>
    <!-- 参数	类型	默认值	描述
l	Number	42	滑块的边长
r	Number	10	滑块突出圆的半径
w	Number	310	canvas画布的宽
h	Number	155	canvas画布的高
sliderText	String	Slide filled right	滑块底纹文字
 ———————————————— 
版权声明：本文为CSDN博主「monoplasty」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/monoplasty/article/details/85016089 
    -->
    <div class="slideSwape" ref="slideSwape" style="height: 0.42rem;overflow: hidden;">
      <!-- <div data-v-6dd9a078 class="slide-verify-slider">
        <div data-v-6dd9a078 class="slide-verify-slider-mask" style="width: 0px;">
          <div data-v-6dd9a078 class="slide-verify-slider-mask-item" style="left: 0px;">
            <div data-v-6dd9a078 class="slide-verify-slider-mask-item-icon"></div>
          </div>
        </div>
        <span data-v-6dd9a078 class="slide-verify-slider-text">向右滑</span>
      </div>-->
      <slide-verify
        :l="42"
        :r="10"
        :w="336.5"
        :h="155"
        @success="onSuccess"
        @fail="onFail"
        @refresh="onRefresh"
        :slider-text="text"
        ref="slide"
        @mouseover.native="getSlide"
        @mouseout.native="lostSlide"
      ></slide-verify>
    </div>

    <div class="duanxing">
      <input type="text" class="ipt2" placeholder="请输入短信验证码" />
      <div class="huoqu">
        <a href="#" class="pcbtn">获取验证码</a>
      </div>
    </div>
    <div class="mima">
      <div class="u_logo_img2"></div>
      <input type="text" placeholder="请输入密码" class="ipt3" />
    </div>
    <div class="slideMeg" v-if="slideFail">
      <i class="iconfont icon-hongcha"></i>
      {{msg}}
    </div>

    <div class="loginbox">
      <a href="#">注册</a>
    </div>
    <div class="fur_agree">
      <input type="checkbox" class="mycheck" />
      <span>我同意</span>
      <a href="#">《用户使用协议》</a>
      <a href="#">和</a>
      <a href="#">《隐私政策》</a>
    </div>
  </div>
</template>
<script>
import { log } from 'util';
export default {
  name: 'myzhouce',
  data () {
    return {
      msg: '',
      text: '向右滑',
      slideFail: false,
      slideFlag: false
    }
  },
  methods: {
    getSlide () {

      this.$refs.slideSwape.style.overflow = 'visible';
      console.log(1);


    },
    lostSlide () {
      this.$refs.slideSwape.style.overflow = 'hidden';
      console.log(2);

    },
    onSuccess () {
      this.msg = '';
      this.$refs.slideSwape.style.overflow = 'hidden';
      this.slideFlag = true;
    },
    onFail () {
      this.msg = '请先拖动滑块进行安全验证'
      //   console.log(this.$el);
      this.slideFail = true

    },
    onRefresh () {
      this.msg = ''
    }
  },
  computed: {

  },
  mounted () {
    // this.$refs.slide.$el.childNodes[0].attributes.height.value = 0;
    // this.$refs.slide.$el.childNodes[4].attributes.height.value = 0;

    // this.$refs.slide.$el.childNodes[0].styley.opacity = 0;
  },
  updated () {

  }
}

</script>


<style lang="scss">
.box {
  position: relative;
  padding: 12% 5% 0;
  .slideSwape {
    position: relative;
    margin-top: 0.8rem;

    .slide-verify {
      position: relative;
      bottom: 1.6rem;
      .slide-verify-slider {
        width: 3.345rem;
        margin: 0;
      }
      // .slide-verify-refresh-icon {
      //   display: none;
      // }
    }
    .slide-verify-slider {
      width: 3.345rem;
      margin: 0;
    }
  }
}
.slideMeg {
  font-size: 0.12rem;
  color: red;
  i {
    font-size: 0.12rem;
  }
}
.u_logo {
  display: block;
  background: url('../images/zhuce01.png');
  background-position: 0 -0.78rem;
  width: 0.22rem;
  height: 0.24rem;
  line-height: 0.24rem;
  margin: 0.1rem 0.1rem 0 0.1rem;
}
.iptbox {
  width: 100%;
  height: 0.46rem;
  display: flex;
  border: 1px solid #c5cddb;
  .ipt1 {
    width: 2.35rem;
    outline: none;
    font-size: 14px;
    border: none;
  }
}
.huadong {
  width: 100%;
  height: 0.46rem;
  background: #f7f9fa;
  margin: 0.38rem 0;
  line-height: 0.46rem;
  text-align: center;
  font-size: 14px;
  .huadong_left {
    background: url('https://cstaticdun.126.net//2.11.4/images/icon_light@2x.5d17769.png')
      no-repeat #f7f9fa;
    background-position: 0 -26px;
    background-size: 32px 544px;
  }
}
.duanxing {
  display: flex;
  width: 100%;
  height: 0.46rem;

  .ipt2 {
    outline: none;
    width: 2.08rem;
    margin-right: 0.06rem;
    padding-left: 0.2rem;
  }
  a {
    color: #2cc17b;
  }
}

.huoqu a {
  display: inline-block;
  width: 1.16rem;
  height: 0.44rem;
  border: 1px solid #2cc17b;
  text-align: center;
  line-height: 0.44rem;
  text-decoration: none;
}
.mima {
  width: 100%;
  height: 0.46rem;
  margin: 0.38rem 0;
  display: flex;
  border: 1px solid #cccccc;
  .ipt3 {
    width: 2.35rem;
    border: none;
    outline: none;
    padding-left: 0.2rem;
  }
}
.loginbox {
  width: 100%;
  height: 0.44rem;
  background: #2cc17b;
  line-height: 0.44rem;
  text-align: center;
  margin-bottom: 0.14rem;
  a {
    text-decoration: none;
    font-size: 18px;
    color: #ffffff;
    border-radius: 3px;
  }
}
.fur_agree {
  display: flex;
  .mycheck {
    width: 0.18rem;
    height: 0.18rem;
    margin: 0 0.04rem 0 0;
    display: block;
  }
  a {
    text-decoration: none;
    color: #999;
  }
}
</style>
