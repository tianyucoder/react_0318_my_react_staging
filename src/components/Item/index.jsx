import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	handleChange = ()=>{
		console.log(1);
	}

	render() {
		const {title,completed} = this.props
		return (
			<li>
				<label>
					<input type="checkbox" checked={completed} onChange={this.handleChange}/>
					<span>{title}</span>
				</label>
				<button className="btn btn-danger" style={{display:'none'}}>删除</button>
			</li>
		)
	}
}

