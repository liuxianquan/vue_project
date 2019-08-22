import Vue from 'vue'

import Vuex from 'vuex'

import myhome from './myhome'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    myhome,
    user
  }
})
