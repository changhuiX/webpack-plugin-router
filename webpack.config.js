/**
 * @author 🌈先知云 <公众号:先知云>
 * @date ⌚2020-08-08
 * @desc 📝 配置webpack 实现打包js文件
 */

// 开发loader  https://blog.csdn.net/lichao000124/article/details/99709093
const path = require('path')

function resolve(dir = '') {
    return path.join(__dirname, '../../' + dir)
}

module.exports = {
    target: 'node',
    // 入口文件
    entry: {
        index: './router.js',
    },
    // 输出目录
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'router.bundle.js'
    },
    resolve: {
        alias: {
            '@': resolve('src'),
            "@view": resolve("src/view"),
            "@config": resolve("config"),
            '@directive': resolve('src/vt-subtree/vt-plugins/vt-directive'),
            '@iconfont': resolve('src/vt-subtree/vt-iconfont'),
            '@layout': resolve('src/vt-subtree/vt-layout'),
            '@pages': resolve('src/vt-subtree/vt-pages'),
            '@plugins': resolve('src/vt-subtree/vt-plugins'),
            '@base': resolve('src/vt-subtree/vt-resource/vt-base'),
            '@block': resolve('src/vt-subtree/vt-resource/vt-block'),
            '@template': resolve('src/vt-subtree/vt-resource/vt-template'),
            '@script': resolve('src/vt-subtree/vt-script'),
            '@styles': resolve('src/vt-subtree/vt-styles'),
            '@util': resolve('src/vt-subtree/vt-util'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: [
                    /(node_modules|bower_components)/,
                    path.resolve(__dirname,'../../node_modules')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@vue/cli-plugin-babel/preset',
                            ],
                            plugins: [
                                "@babel/plugin-proposal-class-properties",
                                ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ]
                        }
                    },
                    {
                        loader: path.resolve(__dirname, './replace-loader.js'),
                    },
                ]
            }
        ]
    }
};
