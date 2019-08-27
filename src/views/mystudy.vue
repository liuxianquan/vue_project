<template >
  <div class="wrap">
    <div class="header">课程筛选</div>
    <div class="main">
      <ul>
        <li v-for="item in mystudyList" :key="item.id" >
          <div class="left">
            <img :src="item.photoUrl" alt="">
          </div>
          <div class="right">
               <p>{{item.name}}</p>
               <b>￥{{item.weight*100 - 1}} </b>
               
          </div>
          <router-link to="/shopping">
                 <span @click="append(item)" >开始学习</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions ,mapMutations, mapState} from 'vuex';
export default {
  name:"mystudy",
  computed:{
    ...mapState('mystudy',['mystudyList'])
  },
  methods:{
    ...mapMutations('mystudy',['setmyStudyList']),
    ...mapActions('mystudy',['getmyStudyList']),
    ...mapMutations('product', ['append'])
    
  },
  created(){
    
    this.getmyStudyList()
    
  }
}
</script>
<style lang="scss">
.wrap{
  height: 100%;
  width:100%;
  display: flex;
  flex-direction: column;
}
.header{
  border-bottom: .01rem solid #E6EAF2;
  line-height: .49rem;
  font-size: .2rem;
  text-align: center;
  color: #3c4a54;
}
.main{
  flex: 1;
  overflow-y: auto;
  padding: 0 .16rem;
  ul li{
    border-bottom: 1px solid rgba(221, 221, 221, 0.4);
    display: flex;
    padding: .16rem 0;
    .left{
      width: 1.1rem;
      img{
        width: 100%;
        height: .7rem;
      }
    }
    .right{
      flex: 1;
      padding-left: .16rem;
      p{
        font-size: .18rem;
        color: #333;
        line-height: .26rem;
      }
      b{
        color: red;
        font-size: .16rem;
        line-height: .2rem;
      }
      
    }
    span{
        display: block;
        width: .8rem;
        height: .3rem;
        background: greenyellow;
        color: blue;
        text-align: center;
        line-height: .3rem;
        border-radius: .15rem;
        margin-top: .2rem;
      }
  }
}

</style>
