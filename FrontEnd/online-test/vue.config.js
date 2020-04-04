module.exports = {
  lintOnSave: false,
  devServer: {
    open: true, // npm run serve后自动打开页面
    host: '0.0.0.0', // 匹配本机IP地址(默认是0.0.0.0)
    port: 8989, // 开发服务器运行端口号
    proxy: {
      '/api': {
        target: 'http://139.224.61.12:8083', // 代理接口地址
        changeOrigin: true, // 是否跨域
        ws: true,
        // pathRewrite: {
        //   '^/api': '' //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
        // }
      }
    }
  },
}