const webpack = require('webpack')
module.exports = {
	chainWebpack: (config) => {
		config.plugin('provide').use(webpack.ProvidePlugin, [{
			$: 'jquery',
			jquery: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}])
	},
	css: {
		sourceMap: true
	},
	chainWebpack:config=>{
		config.plugins.delete("prefetch")
		//删除index.html开头的带有prefetch属性的link，不要异步下载暂时不需要的页面组件文件
	  },
	  //配置客户端http代理跨域请求
}