// 拆分出来的 商品模块的 仓库数据

export default {
  namespaced: true,

  state: {
    // 商品数据
    shoplist: [
      {
        productId: 747027,
        ownerName: '赵铁夫English',
        productName: '赵铁夫讲单词—教你牢记过万单词',
        price: 199,
        priceAfterPackage: 199,
        productName: '赵铁夫讲单词—教你牢记过万单词',
        bigPhotoUrl:
          'http://edu-image.nosdn.127.net/cf77740e-107a-4516-9fbe-ebe2c3c94b43.jpg?imageView&quality=100&crop=0_4_1920_1075'
      }
      // {
      //   productId: 1004767001,
      //   ownerName: '贺嘉演讲课',
      //   productName: '和贺嘉一起学演讲',
      //   price: 99,
      //   priceAfterPackage: 99,
      //   productName: '和贺嘉一起学演讲',
      //   bigPhotoUrl:
      //     'http://edu-image.nosdn.127.net/F83BB22D9BAAB99965497124D74791E9.jpg?imageView&thumbnail=448x248&quality=100'
      // }
    ]
  },

  getters: {},

  mutations: {},

  actions: {}
}
