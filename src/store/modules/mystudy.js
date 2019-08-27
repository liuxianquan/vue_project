import request from "../../utils/request";

export default {
  namespaced: true,
  state: {
    mystudyList: [] // 数据
  },

  mutations: {
    setmyStudyList(state, payload) {
      state.mystudyList = payload;
    }
  },

  actions: {
    getmyStudyList({ commit }) {
      request.get("http://localhost:3000/result").then(data => {
        commit("setmyStudyList", data.focusDtoList);
      });
    }
  }
};
