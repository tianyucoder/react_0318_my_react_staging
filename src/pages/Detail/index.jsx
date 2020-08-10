import React, { Component } from 'react'

export default class Deatil extends Component {

	state = {
		detailArr:[
			{id:'001',content:'加油！中国',star:10,date:'2020-08-10 10:44'},
			{id:'002',content:'加油！尚硅谷',star:50,date:'2020-02-11 14:44'},
			{id:'003',content:'加油！最棒的自己',star:90,date:'2020-08-11 04:44'}
		]
	}

	render() {
		const {id,title} = this.props.match.params
		const result = this.state.detailArr.find((detailObj)=>{
			return detailObj.id === id
		})

		return (
			<div>
				<div>ID：{id}</div>
				<div>标题：{title}</div>
				<div>内容：{result.content}</div>
				<div>点赞数:{result.star}</div>
				<div>日期：{result.date}</div>
			</div>
		)
	}
}
