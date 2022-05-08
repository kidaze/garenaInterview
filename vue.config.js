const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://baike.baidu.com",
        changeOrigin: true,
      },
    },
  },
});
