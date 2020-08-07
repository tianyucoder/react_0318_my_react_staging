import React, { Component } from 'react'
import './index.css'

export default class Add extends Component {

	//回车的回调
	handleKeyUp = (event)=>{
		//从App传递过来的props中获取addTodo
		const {addTodo} = this.props

		//多次解构赋值
		//const {target} = event
		//const {value} = target

		//给解构出来的变量重命名
		//const userInput = value1

		//特别注意：连续解构赋值+重命名！！！
		const {target:{value:userInput}} = event

		//若按下的是回车
		if(event.keyCode === 13){
			if(!userInput.trim()){
				alert('不能为空')
				return
			}
			//调用App传过来的addTodo去添加一个todo
			addTodo(userInput.trim())
			//清空用户的输入
			event.target.value = ''
		}
	}

	render() {
		return (
			<div className="todo-header">
				<input
					onKeyUp={this.handleKeyUp} 
					type="text" 
					placeholder="请输入你的任务名称，按回车键确认"
				/>
			</div>
		)
	}
}

