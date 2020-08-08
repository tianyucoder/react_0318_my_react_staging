import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

	state = {
		keyWord:'' //输入的关键词
	}

	//向state中保存用户输入的关键字
	saveKeyWord = (event)=>{
		//获取用户的输入
		const {target:{value:keyWord}} = event
		//维护进状态
		this.setState({keyWord})
	}

	//点击搜索的回调
	handleSearch = ()=>{
		//1.获取用户输入
		const {keyWord} = this.state
		//2.发起请求
		axios.get(`/api/search/users?q=${keyWord}`).then(
			response => {console.log('请求成功',response);},
			error => {console.log('请求失败',error);}
		)
		
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
