//引入react核心库
import React,{Component} from 'react'
import './App.css'
import Add from './components/Add'
import List from './components/List'
import Footer from './components/Footer'
import { nanoid } from 'nanoid'

//定义App组件
export default class App extends Component{
	state = {
		todos:[ //todos数组
			{id:'001',title:'吃饭',completed:false},
			{id:'002',title:'睡觉',completed:true},
			{id:'003',title:'抽烟',completed:false},
			{id:'004',title:'喝酒',completed:true},
			{id:'005',title:'烫头',completed:false},
		]
	}

	//添加一个todo
	addTodo = (title)=>{
		//准备一个todo对象
		const todo = {id:nanoid(),title:title,completed:false}
		//向App的state中往前追加一个todo
		this.setState({todos:[todo,...this.state.todos]})
	}

	/**
	 * 勾选某一个todo
	 * @author tianyu
	 * @param {*} id todo的id 
	 * @param {*} completed 标识todo是否已完成
	 */
	checkTodo = (id,completed)=>{
		const todos = this.state.todos.map((todo)=>{
			if(todo.id === id) return {...todo,completed}
			return todo
		})
		this.setState({todos})
	}

	render(){
		const {todos} = this.state
		return(
			<div className="todo-container">
				<div className="todo-wrap">
					<Add addTodo={this.addTodo}/>
					<List todos={todos} checkTodo={this.checkTodo}/>
					<Footer/>
				</div>
			</div>
		)
	}
}
