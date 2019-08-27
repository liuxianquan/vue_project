// 拆分出来的 商品模块的 仓库数据

export default {
  namespaced: true,

  state: {
    // 商品数据
    shoplist: [
      {
        // productId: 747027,
        // ownerName: "赵铁夫English",
        // productName: "赵铁夫讲单词—教你牢记过万单词",
        // price: 199,
        // priceAfterPackage: 199,
        // productName: "赵铁夫讲单词—教你牢记过万单词",
        // bigPhotoUrl:
        //   "http://edu-image.nosdn.127.net/cf77740e-107a-4516-9fbe-ebe2c3c94b43.jpg?imageView&quality=100&crop=0_4_1920_1075"
      }
    ]
  },

  getters: {},

  mutations: {
    append(state, payload) {
      state.shoplist = [];
      let obj = {};
      obj.productId = payload.id;
      obj.ownerName = payload.name;
      obj.productName = payload.name + "教你提升自己，多一项技能";
      obj.price = payload.weight * 100 - 1;
      obj.priceAfterPackage = payload.weight * 100 - 1;
      obj.bigPhotoUrl = payload.photoUrl;
      state.shoplist.push(obj);
      // console.log(state.shoplist);
    }
  },

  actions: {}
};
