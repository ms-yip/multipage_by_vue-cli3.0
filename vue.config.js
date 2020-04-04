/*
 * @Description:
 * @Autor: ms.y
 * @Date: 2020-02-20 09:56:37
 * @LastEditors: ms.y
 * @LastEditTime: 2020-03-23 09:36:15
 */
let glob = require("glob");

// 配置pages多页面获取当前文件夹下面的html 和 js
function getEntry(globPath) {
  let entries = {},
    tmp,
    htmls = {};
  // 获取所有pages 下面的html
  glob.sync(globPath + "html").forEach(entry => {
    tmp = entry.split("/").splice(-3);
    htmls[tmp[1]] = entry;
  });

  // 获取所有的js文件
  glob.sync(globPath + "js").forEach(entry => {
    tmp = entry.split("/").splice(-3);
    entries[tmp[1]] = {
      entry, // 入口
      //  如果没有html则以public的index.html为模板
      template: htmls[tmp[1]] ? htmls[tmp[1]] : "index.html",
      filename: tmp[1] + ".html" // 向dist文件输出的文件名
    };
  });

  console.log(entries);
  return entries;
}

let htmls = getEntry("./src/pages/**/*.");

module.exports = {
  pages: htmls,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 生产环境下去除console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
  },
  assetsDir: "static", // 打包后的静态文件夹名称
  publicPath: "./", // 解决打包之后的静态文件路径404文件
  outputDir: "dist", // 打包后的文件名称，默认dist
  chainWebpack: config => {
    // 修复热路由更新
    config.resolve.symlinks(true);
  },
  devServer: {
    open: true, // npm run serve 默认打开浏览器
    index: "/page1.html" // 默认启动页面
  }
};
