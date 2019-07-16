// resolve定义一个绝对路径获取函数
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

// commonjs nodejs
const port = 7070;
const title = 'vue项目最佳实践';

module.exports = {
    // publicPath: 'best-practice',
    // outputDir: 'dist/best-practice',
    devServer: {
        port,
    },
    configureWebpack: {
        name: title
    },

    // 配置svg规则排除icons目录中svg文件处理
    chainWebpack: config => {
        config.module.rule('svg')
            .exclude.add(resolve('src/icons'))
            .end();
    // 新增icons规则，设置svg-sprite-loader处理icons目录中的svg
        config.module.rule('icons')
            .test(/\.svg$/)
            .include.add(resolve("src/icons"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({ symbolId: "icon-[name]" })   //使用图标的名称
            .end();
        
    }
    
  };