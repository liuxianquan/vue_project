// 需要调用 ajax 。那么引入封装好的 网络请求工具模块
import request from '../utils/request'
// import { Toast } from 'vant'

export default {
  namespaced: true,

  state: {
    bannerList: [] // 热门影片轮播图数据
  },

  getters: {
    bannerListImgs(state) {
      // return state.bannerList.map(item => item.img)
      return state.bannerList.map(item => item.photoUrl)
    }
  },

  mutations: {
    setBannerList(state, payload) {
      state.bannerList = payload
    }
  },

  actions: {
    /**
     * 获取轮播图的数据
     */
    getBannerList({ commit }) {
      // axios.get('/banner') http://localhost:8080/banner
      request.get('http://localhost:3000/result').then(data => {
        console.log(data.focusDtoList.map(item => item.photoUrl))
        // 请求成功，还需将后台返回的数据存放到 state 中
        commit('setBannerList', data.focusDtoList)
      })
      // commit('setBannerList', '789')
      // console.log(this.bannerList)
    }
  }
}
