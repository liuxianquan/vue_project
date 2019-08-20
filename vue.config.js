module.exports = {
  devServer: {
    proxy: {
      //目标接口 https://m.study.163.com/j/operation/homepage.json
      //本地地址 http://localhost:8080/
      '/api': {
        target: 'https://m.study.163.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
