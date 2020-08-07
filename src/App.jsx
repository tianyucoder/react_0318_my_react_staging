//引入react核心库
import React,{Component} from 'react'
import './App.css'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'

//定义App组件
export default class App extends Component{
	render(){
		return(
			<div className="todo-container">
				<div className="todo-wrap">
					<Add/>
					<List/>
					<Footer/>
				</div>
			</div>
		)
	}
}
