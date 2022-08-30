const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true, // 设置自动打开
    port: 8080, // 设置端口
    proxy: {
      // 设置跨域
      '/api': {
        target: 'http://ymtest.apiday.cn/', // 跨域访问的地址，跟上面手打的一样，只是vue3有.env.development和.env.production文件，所以用变量代替，就直接在那两个文件中改变一次跨域地址就好
        changeOrigin: true, // 是否跨域
        secure: true // 如果是http接口，需要配置该参数
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  lintOnSave: true
}
)
