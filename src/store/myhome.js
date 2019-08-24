// 需要调用 ajax 。那么引入封装好的 网络请求工具模块
import request from '../utils/request'
// import { Toast } from 'vant'

export default {
  namespaced: true,

  state: {
    bannerList: [], // 轮播图数据
    categoryList: [], // 课程分类数据
    goodClassList: {}
  },

  getters: {
    bannerListImgs (state) {
      return state.bannerList.map(item => item.photoUrl)
    },
    categoryLists (state) {
      return state.categoryList.map(item => {
        let arr = { name: '', photoUrl: '' }
        arr.name = item.name
        arr.photoUrl = item.photoUrl
        return arr
      })
    },

    goodClassLists (state) {
      let Data = state.goodClassList.elementDtoList
      return {
        sectionName: state.goodClassList.sectionName,
        cellList: Data
      }
    }
  },

  mutations: {
    setBannerList (state, payload) {
      state.bannerList = payload
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    setGoodClassList (state, payload) {
      state.goodClassList = payload
    }
  },

  actions: {
    /**
     * 获取轮播图的数据
     */
    getBannerList ({ commit }) {
      request.get('http://localhost:3000/result').then(data => {
        // 请求成功，还需将后台返回的数据存放到 state 中
        commit('setBannerList', data.focusDtoList)
      })
    },
    getCategoryList ({ commit }) {
      request.get('http://localhost:3000/result').then(data => {
        // 请求成功，还需将后台返回的数据存放到 state 中
        commit('setCategoryList', data.iconDtoList)
      })
    },
    getGoodClassList ({ commit }) {
      request.get('http://localhost:3000/result').then(data => {
        // 请求成功，还需将后台返回的数据存放到 state 中
        commit('setGoodClassList', data.sectionDtoList[0])
      })
    }
  }
}
