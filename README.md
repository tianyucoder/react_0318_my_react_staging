# github搜索案例练习
	## 1.如何启动我们搭建的github搜索服务器
			(1).课件中找到：05_所需服务器/server.js,复制到当前工程github_user_server文件夹中。
			(2).安装express框架:yarn add express
			(3).为了避免端冲突，修改webpack.config.json文件，将脚手架启动端口调整为8080
			(4).启动服务器：cd到github_user_server文件夹，执行：node server.js命令
			(5).去webpack.confog.js中配置proxy跨域
					proxy: {
						'/api': { // 只有/api开头的请求，才会转发给target配置的服务器
								target: 'http://localhost:3000', //转发给谁
								pathRewrite: {'^/api' : ''}, //改写路径
								changeOrigin: true, //如果前台脚手架的主机名和服务器的主机名不一致，则需要
						}
			(6).修改Search组件中的请求地址为：/api/search/users?q=xxxxx
			(7).启动前台项目：yarn dev
			
			
