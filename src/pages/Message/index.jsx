import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Deatil from '../Detail'

export default class Message extends Component {

	state = {
		messageArr:[
			{id:'001',title:"消息1"},
			{id:'002',title:"消息2"},
			{id:'003',title:"消息3"},
		]
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.state.messageArr.map( msg =>{
							return (
								<li key={msg.id}>
									<Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<hr/>
				<Route path="/home/message/detail/:id/:title" component={Deatil}/>
			</div>
		)
	}
}
