module.exports = {
  devServer: {
    proxy: {
      '/tapi': {
        target: 'http://localhost:9090',
        changeOrigin: true
      }
      // proxy: {
      //   //目标接口 https://m.study.163.com/j/operation/homepage.json
      //   //本地地址 http://localhost:8080/
      //   '/api': {
      //     target: 'https://m.study.163.com',
      //     changeOrigin: true,
      //     pathRewrite: {
      //       '^/api': ''
      //     }
      //   }
      // }
    }
  }
}
