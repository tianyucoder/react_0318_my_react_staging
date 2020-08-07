import React, { Component } from 'react'

export default class Search extends Component {

	state = {
		keyWord:'' //输入的关键词
	}

	saveKeyWord = (event)=>{
		//获取用户的输入
		const {target:{value:keyWord}} = event
		//维护进状态
		this.setState({keyWord})
	}

	handleSearch = ()=>{
		//1.获取用户输入
		alert(this.state.keyWord)
		//2.发起请求
		
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input onChange={this.saveKeyWord} type="text" placeholder="enter the name you search"/>&nbsp;
					<button onClick={this.handleSearch}>Search</button>
				</div>
			</section>
		)
	}
}
