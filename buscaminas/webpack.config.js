let webpack = require("webpack");
let path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: "./src/main.js",

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,

                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,

                loader: "vue-loader"
            },
            {
                test: /\.js$/,

                loader: "babel-loader",

                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,

                loader: "file-loader",

                options: {
                    name: "[name].[ext]?[hash]"
                }
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'

        })
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },

    devServer: {
        historyApiFallback: true,

        noInfo: true,

        overlay: true
    },

    performance: {
        hints: false
    },

    devtool: "#eval-source-map",
};

if (process.env.NODE_ENV === "production") {

    module.exports.devtool = "#source-map";

    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        })
    ]),
    
    new webpack.LoaderOptionsPlugin({
        minimize: true
    })
}