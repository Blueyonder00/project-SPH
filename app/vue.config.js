const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open:true,
    host:'localhost',
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn'
      }
    }

  },

  lintOnSave:false
})
