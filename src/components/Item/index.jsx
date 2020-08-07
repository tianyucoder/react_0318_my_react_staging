import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	handleChange = (id)=>{
		return (event)=>{
			//获取勾选状态
			const {target:{checked}} = event
			//获取App逐层传递过来的checkTodo
			const {checkTodo} = this.props
			//调用checkTodo去勾选
			checkTodo(id,checked)
		}
	}

	render() {
		const {id,title,completed} = this.props
		return (
			<li>
				<label>
					<input type="checkbox" checked={completed} onChange={this.handleChange(id)}/>
					<span>{title}</span>
				</label>
				<button className="btn btn-danger" style={{display:'none'}}>删除</button>
			</li>
		)
	}
}

