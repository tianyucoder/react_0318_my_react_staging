import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import Demo from './pages/Demo'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import './App.css'

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
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a> */}

							{/* react中的写法，靠Link标签更改浏览器的历史记录 */}
							<NavLink className="list-group-item" activeClassName="demo" to="/about">About</NavLink>
							<NavLink className="list-group-item" activeClassName="demo" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									<Route path="/about" exact component={About}/>
									<Route path="/about/student" component={Demo}/>
									<Route path="/home" component={Home}/>
									<Redirect to="/about"/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
