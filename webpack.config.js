const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions:['.js','.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname, 'src/assests/icons'),
            '@logos': path.resolve(__dirname, 'src/assests/logos')
        }
    },
    module: {
        // ... Lista de reglas respecto a los loaders	
        rules: [
            // Reglas para babel
            // Expresiones regulares
            {
                test: /\.js$|jsx/,
                use: { loader: 'babel-loader'},
                exclude: /node_modules/
            },
            // Reglas para HTML loader
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader'}]
           },
           {
               test: /\.(css|scss)$/,
               use: [
                "style-loader",
                "css-loader",
                "sass-loader"
               ]
           },
           {
               test: /\.(png|svg|jpg|gif)$/,
               type: 'asset'
           }
        ]

    },
    plugins: [
	    //... Configuración de plugins
        new HtmlWebpackPlugin(
		{ 
      		template: './public/index.html', 
		    filename: './index.html'   
		},
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
	)
	],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        historyApiFallback: true,
        compress: true,
        port: 3000
    }
}