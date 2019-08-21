<template>
    <div class="box">
        <div class="iptbox">
            <div class="u_logo"></div>
            <input type="text" class="ipt1" placeholder="请输入手机号">
        </div>  
        <div class="huadong">
            <div class="huadong_left"></div>
            <span>向右滑动块填充拼图</span></div>
        <div class="duanxing">
            <input type="text" class="ipt2" placeholder="请输入短信验证码"><div class="huoqu"><a href="#" class="pcbtn">获取验证码</a></div>
        </div>
        <div class="mima">
            <div class="u_logo_img2"></div>
            <input type="text" placeholder="请输入密码" class="ipt3">
        </div>
        <div class="loginbox"><a href="#">注册</a></div>
        <div class="fur_agree">
            <input type="checkbox" class="mycheck">
            <span>我同意</span>
            <a href="#">《用户使用协议》</a>
            <a href="#">和</a>
            <a href="#">《隐私政策》</a>
        </div>
    </div>

</template>
<style lang="scss" scoped>
    .box{
        padding: 12% 5% 0;  
     }
   
    .u_logo{
        display: block;
        background: url("../images/zhuce01.png");
        background-position:0 -0.78rem;
        width: 0.22rem;
        height: 0.24rem; 
        line-height: 0.24rem;
        margin: 0.1rem 0.1rem 0 0.1rem;
    }
    .iptbox{
        width:100%;
        height: 0.46rem;
        display: flex;
        border: 1px solid #C5CDDB;      
        .ipt1{
            width: 2.35rem;
            outline: none;
            font-size: 14px;
            border: none;
        }

    }
    .huadong{
        width:100%;
        height: 0.46rem;
        background:#F7F9FA;
        margin: 0.38rem 0;
        line-height: 0.46rem;
        text-align: center;
        font-size: 14px;
        .huadong_left{
         background:url("https://cstaticdun.126.net//2.11.4/images/icon_light@2x.5d17769.png") no-repeat #F7F9FA;
         background-position:0 -26px;
         background-size: 32px 544px;
        }
       
    }
    .duanxing{
        display: flex;
         width:100%;
        height: 0.46rem;
       
        .ipt2{
            outline: none;
            width: 2.08rem;
            margin-right:0.06rem; 
            padding-left:0.2rem; 
        }
        a{
            color:#2CC17B;
        }
    }
    
    .huoqu a{
        display: inline-block;
        width: 1.16rem;
        height: 0.44rem;
        border: 1px solid #2CC17B;
        text-align: center;
        line-height: 0.44rem;
        text-decoration: none;
        
    }
    .mima{
        width: 100%;
        height: 0.46rem;
          margin: 0.38rem 0;
          display: flex;
          border: 1px solid #cccccc;
          .ipt3{
              width: 2.35rem ;
              border: none;
              outline: none;
              padding-left:0.2rem; 
          }
    }
    .loginbox{
        width: 100%;
        height: 0.44rem;
        background:#2CC17B ;
        line-height: 0.44rem;
        text-align: center;
        margin-bottom: 0.14rem;
        a{
            text-decoration: none;
            font-size: 18px;
            color: #ffffff;
            border-radius:3px; 
        }
    }
    .fur_agree{
        display: flex;
        .mycheck{
            width: 0.18rem;
            height: 0.18rem;
            margin: 0 0.04rem 0 0;
            display: block;
        }
        a{
            text-decoration: none;
            color: #999;
        }
    }
</style>