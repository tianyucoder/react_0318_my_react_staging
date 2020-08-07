import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	//全选
	handleCheckAll = (event)=>{
		const {target:{checked}} = event
		this.props.checkAll(checked)
	}

	//清除所有已完成的
	clearAllCompleted = ()=>{
		const {clearAllCompleted} = this.props
		if(confirm('确定清除所有已完成的吗？')){
			clearAllCompleted()
		}
	}

	render() {
		//获取App传递过来的todos
		const {todos} = this.props
		//计算总数
		const total = todos.length
		//计算已完成
		let completedCount = todos.reduce((pre,todo)=> pre + (todo.completed ? 1 : 0),0)
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" checked={total === completedCount && total>0} onChange={this.handleCheckAll}/>
				</label>
				<span>
					<span>已完成{completedCount}</span> / 全部{total}
				</span>
				<button onClick={this.clearAllCompleted} style={{display:completedCount > 0 ? 'block' :'none'}} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
}

