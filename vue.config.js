const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    hot: false,
    liveReload: false // 禁用自动更新
  }
}
