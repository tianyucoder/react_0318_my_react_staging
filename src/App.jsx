import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import {Link,Route} from 'react-router-dom'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原始html中的写法，靠a标签切换页面 */}
							{/* <a className="list-group-item " href="./about.html">About</a>
							<a className="list-group-item " href="./home.html">Home</a> */}

							{/* react中的写法，靠Link标签更改浏览器的历史记录 */}
							<Link className="list-group-item " to="/about">About</Link>
							<Link className="list-group-item " to="/home">Home</Link>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
