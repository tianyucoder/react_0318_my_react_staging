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
									{/* 传params参数 */}
									{/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

									{/* 传search参数 */}
									<Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>

								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 若传的是params参数，路由要这样注册： */}
				{/* <Route path="/home/message/detail/:id/:title" component={Deatil}/> */}

				{/* 若传的是search参数，正常注册即可 */}
				<Route path="/home/message/detail" component={Deatil}/>
				
			</div>
		)
	}
}
