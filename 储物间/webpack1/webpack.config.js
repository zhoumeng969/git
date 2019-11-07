var UglifyJSPlugin = require('uglifyjs-webpack-plugin');   
var webpack = require('webpack');	
var ExtractTextPlugin = require('extract-text-webpack-plugin');				

module.exports = {									
	entry:{											
		index: './src/js/entry.js',
		index2 :'./src/js/entry2.js'   				
	},
	output :{										
		filename:'[name].js', 						
		path:__dirname +'/out',						
		publicPath:'./out'  						
	},
	module:{
		rules:[
			{test:/.js$/,use: ['babel-loader']},
			// {test:/.css$/,use: ['style-loader','css-loader']},
			{
				test:/.css$/,
				use:ExtractTextPlugin.extract({
					fallback:'style-loader',
					use:'css-loader'
				})
			},
			{test:/.jpg|png|gif|svg/,use:['url-loader?limit=8192&name=/[name].[ext]']},
		]            								
	},
	mode: 'production',  								
	plugins:[
		new UglifyJSPlugin(),					
		new webpack.optimize.CommonsChunkPlugin({ 	
			name:'commons',							
			filename: 'commons.js',					
			minChunks:3,
		}),
		new ExtractTextPlugin("[name].css"),					
	]  
}





// var UglifyJSPlugin = require('uglifyjs-webpack-plugin');   压缩代码插件
// var webpack = require('webpack');					      引入webpack
// module.exports = {										  对象
// 	entry:{													入口文件
// 		index: './src/js/entry.js',
// 		index2 :'./src/js/entry2.js'   						引入的两个js文件
// 	},
// 	output :{												输出文件
// 		filename:'[name].js', 								原先是index.js文件，是指打包好的文件名
// 		path:__dirname +'/out',								__require代表着绝对路径，代表打包好的文件地址
// 		publicPath:'./out'  								当图片过大(大于64位编码格式)时需要将图片另存，这是地址(公共url地址)，标签名publicPath是图片这种静态资源打包好的根路径
// 	},
// 	module:{
// 		rules:[
// 			{test:/.js$/,use: ['babel-loader']},
// 			{test:/.css$/,use: ['style-loader','css-loader']},
// 			{test:/.jpg|png|gif|svg/,use:['url-loader?limit=8192&name=/[name].[ext]']}
// 		]            										解析文件
// 	},
// 	mode: 'production',  									开发模式和生产模式的设定	
// 	plugins:[
// 		new UglifyJSPlugin()								压缩插件执行名
// 		new webpack.optimize.CommonsChunkPlugin({ 			公共模块执行名
// 			name:'commons',									模块名
// 			filename:'commons.js',							公共资源文件名
// 			minChunks:3}), 									触发条件，当资源被触发三次，就会被当成公共资源模块打包出来
// 	]  
// }

// -[hash:8]
// -[chunkhash:8]    										  修改其作用的模块哈希值，而不修改其他模块
// webpack -w 												  意思是指监听模式
// ?limit=8192&name=/[name].[ext] 							  意思是：当你大于这个值时，将你独立打包出来。
// name=/[name].[ext]  										  name是指文件名用当前的，ext是指文件类型。