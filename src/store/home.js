import Vue from 'vue'

import Vuex from 'vuex'

import myhome from './myhome'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    myhome
  }
})
