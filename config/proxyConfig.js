
    let TARGETIP = "https://easy-mock.com/mock/5aac85311244b8515e926125/"//请求地址
module.exports = {

    proxy: {
        '/api/getRouter': {
          target: TARGETIP,
          changeOrigin: true, //是否跨域
        //   pathRewrite: {
        //     '^/api': '/mock/5aac85311244b8515e926125/api/getRouter'  //需要rewrite的,
        //   }
        },
  }
}