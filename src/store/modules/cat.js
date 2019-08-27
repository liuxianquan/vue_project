// 拆分出来购物车模块的仓库数据
let cats = window.localStorage.getItem("cats");

export default {
  namespaced: true,

  state: {
    msg: "buy",
    cats: cats ? JSON.parse(cats) : [],
    checkedIds: []
  },

  getters: {
    // 是否全选
    isAllCheck(state) {
      return state.cats.length === state.checkedIds.length;
    },
    // 勾选上的商品总价，基于 state.cats 与 state.checkedIds
    total(state) {
      // 1. 从 cats 中过滤出商品id 在 checkedIds 中的数据
      let checkedGoods = state.cats.filter(item => {
        return state.checkedIds.indexOf(item.productId) > -1;
      });

      // 2. 从 checkedGoods 将他们的每一项的 totalPrice 相加
      let num = 0;
      checkedGoods.forEach(item => {
        num += item.priceAfterPackage;
      });

      return num;
    }
  },

  mutations: {
    // 全选与反选
    toggleCheck(state, payload) {
      if (payload) {
        // 全选， 只需要将 state.cats 中每一项的 id 拿出来放到  state.checkedIds 中
        // 吧某个数组对象中的每一项对象的某个属性，全部拿出来可以使用那个方法？ map
        let ids = state.cats.map(item => item.productId);
        state.checkedIds = ids;
      } else {
        // 反选，取消全选
        state.checkedIds = [];
      }
    },

    setMsg(state, payload) {
      state.msg = payload;
    },

    setCheckedIds(state, payload) {
      state.checkedIds = payload;
    },

    remove(state, payload) {
      let index = state.cats.findIndex(
        item => item.productId === payload.productId
      );
      state.cats.splice(index, 1);
      window.localStorage.setItem("cats", JSON.stringify(state.cats));
    },

    // 向购物车中添加商品
    add(state, payload) {
      // 1. 首先判断当前选择的商品是否已经在购物车中存在了？  findIndex
      let index = state.cats.findIndex(item => {
        return item.productId === payload[0].productId;
      });
      if (index > -1) {
        // 存在
        alert("一套终身够用，无需再买");
      } else {
        // 不存在 ，将当前商品push到购物车中即可
        alert("添加成功，学海无涯");
        let obj = { ...payload[0] };
        obj.num = 1;
        state.cats.push(obj);
      }

      // 弄到 本地 localStorage 中去
      window.localStorage.setItem("cats", JSON.stringify(state.cats));
    }
  }
};
