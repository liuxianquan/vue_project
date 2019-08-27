import Vue from "vue";

import Vuex from "vuex";

import myhome from "./myhome";
import user from "./user";

import cat from "./modules/cat";

import product from "./modules/product";

import mystudy from "./modules/mystudy";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    myhome,
    user,
    cat,
    product,
    mystudy
  }
});
