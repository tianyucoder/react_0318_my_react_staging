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

 ## 2.消息订阅与发布
	## 例子：订报纸
				(1).先订阅报纸————去邮局交钱，告诉邮局你家的地址
				(2).邮递员在指定时间，按照你提供的住址，上门送报纸。
		 消息订阅-发布技术：publish发布  subscribe订阅
		 		优点：可以实现任意组件间通信
				要求：先订阅，再发布
				用什么库：pubsub-js
		订阅消息：PubSub.subscribe(msgName,callback)
		发布消息：PubSub.publish(msgName,data)

# React中的路由

 ## SPA应用(单页面应用)
			思考1：单页面应用如何做切换？
						答案：靠路由
			思考2：何为路由组件？何为一般组件？
						答案：看组件的具体使用方式：
									（1）.程序员自己写标签渲染：<Demo/> ————————一般组件
									（2）.靠路由匹配渲染的：<Route path="xxx/xxxx" component={Demo}>——路由组件
			总结一句话：SPA应用，页面是“单”的，但是组件是“多”的————单页面，多组件，靠路由

 ## 1.路由的基本使用：
				(1).下载react-router-dom：yarn add react-router-dom。
				(2).将内容展示区，展示的不同内容拆成组件，最好放在pages里
						备注：在react的设计规范中，components放一般组件 pages放路由组件
				(3).从react-router-dom中引入Link，用于编写路由链接
							<Link to="/about">About</Link>
				(4).在index中引入BrowserRouter，包裹App，一劳永逸
				(5).注册路由：先引入Route
						<Route path="/about" component={About}/>
						
 ## 2.NavLink的使用
			如果你的路由链接是有高亮样式，考虑到用NavLink

 ## 3.Switch的使用
		  如果有一个以上的路由注册，那么在注册路由时，最好包裹一个Switch提高匹配效率

 ## 4.解决路径中有多个/导致样式丢失的问题，解决方案如下：
			(1).修改index.html中引入样式的路径，不要写./  要写/
			(2).使用HashRouter代替BrowserRouter
			
 ## 5.精准匹配与模糊匹配
			(1).react-router-dom默认开启的是模糊匹配(最小的匹配粒度是“单词”)
			(2).给Route加exact={true} 或 exact 即可开启严格匹配
			(3).如果不开启严格匹配，会影响功能效果，那么再开。
			
 ## 6.Redirect的使用
			若路径和任何一个路由path都不能匹配，按照Redirect的指示进行跳转

 ## 7.组件实例的props.chilren获取到的是什么？
			 标签体内容

 ## 8.路由跳转时，之前的路由组件会被卸载吗？
			会

 ## 9.路由跳转的replace模式与push模式
			1.默认是push模式————会留下历史记录
			2.replace模式———————不会留下历史记录
					编码：<NavLink to="/about" replace />About</NavLink>

 ## 10.路由组件 与 一般组件的区别：
			路由实例身上props中的内容有所区别：
				1.一般组件看些标签时传了什么 即：<Demo name="tom"/>
				2.路由组件在渲染的时候传了固定的三个属性：history、location、match
					history:
								goBack: ƒ goBack() //后退
								goForward: ƒ goForward() //前进
								push: ƒ push(path, state) //路由跳转--push
								replace: ƒ replace(path, state) //路由跳转--replace
					location:
								pathname: "/about" //当前的路由路径
								search: "" //接收传递过来的search参数
								state: //接收传递过来的state参数
					match:
								params: {} //接收传递过来的params参数
			
 ## 11.路由组件间的传参
				1.params参数:————用的最多
						如何传：
								<Link to={`/home/message/detail/0001/消息1`}>xxxx</Link>
								<Route path="/home/message/detail/:id/:title" component={Deatil}/>
						如何接：
								this.props.match.params.xxxxxxx

				2.search参数————用的最少
							如何传：
								<Link to={`/home/message/detail?id=0001&title=消息1`}>xxxx</Link>
								<Route path="/home/message/detail" component={Deatil}/>
							如何接：
									this.props.location.search (注意处理?的问题)
							注意：接过来search参数，要解析，推荐使用qs库去解析，编码如下：
									(1).search字符串转对象
												const str = 'name=tom&age=19'
												console.log(qs.parse(str));
									(2).对象转search字符串
												const obj = {name:'tom',age:19} //name=tom&age=19
												console.log(qs.stringify(obj));

				3.location.state参数 ---- 编程式路由导航
							如何传：
										this.props.history.push('/home/message/detail',{id,title})
										<Route path="/home/message/detail" component={Deatil}/>
							如何接：
										this.props.location.state.xxxxxx


 ## 12.编程式路由导航
			即：不只是使用Link或NavLink进行路由的跳转，也可以手动编写跳转
			编写方式：
				1.传递params参数
							this.props.history.push(`/home/message/detail/${id}/${title}`)
							this.props.history.replace(`/home/message/detail/${id}/${title}`)
				2.传递search参数
							this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
							this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
				3.传递location.state参数
						this.props.history.push('/home/message/detail',{id,title})
						this.props.history.replace('/home/message/detail',{id,title})

 ## 13.如何在非路由组件中，使用路由组件所特有的API
			借助 withRouter
			编码：
					import {withRouter} from 'react-router-dom'
					class Title extends Component {}
					export default withRouter(Title)

 ## 14.类的装饰器
		请参考：src/decorator.js
		第一步：解决vscode飘红：
					设置中搜索：experimentalDecorators ===>把钩打上
		第二步：解决脚手架不认识装饰器语法：
					1.我们的脚手架里：
								(1).安装依赖：yarn add @babel/plugin-proposal-decorators
								(2).修改webpack.config.js配置:
											修改plugins:
													plugins:[
															['@babel/plugin-proposal-decorators',{legacy: true}],
															//让babel认识类中的新写法
															'@babel/plugin-proposal-class-properties' 
													]
					2.官方脚手架：
									(1).安装依赖：@babel/plugin-proposal-decorators
									(2).更改：config-overrides.js文件，添加一个addDecoratorsLegacy
