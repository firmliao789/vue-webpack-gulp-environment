/**
 * Created by liaoyi on 2017/6/16.
 */
// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        index: [
            // './build/dev-client.js',
            path.resolve(__dirname, '../app/main/main.js')
        ]
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    module: {

        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            }
        ]
    },
    // Favlist: {
    //     loaders: {
    //         js: 'babel'
    //     }
    // },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../app/index.html'),
            inject: true
        }),
        new CleanWebpackPlugin(['output'], {
            "root": path.resolve(__dirname, '../'),//一个根的绝对路径.
            "verbose": true,//将log写到 console.
            "dry": false,//不要删除任何东西，主要用于测试.
            // "exclude": ["files", "to", "ignore"]//排除不删除的目录，主要用于避免删除公用的文件
        })
    ]
}
