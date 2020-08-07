import React, { Component } from 'react'
import Item from '@/components/Item'
import PropTypes from 'prop-types'
import './index.css'

export default class List extends Component {

	static propTypes = {
		todos:PropTypes.array.isRequired,
		checkTodo:PropTypes.func.isRequired,
	}

	render() {
		const {todos,checkTodo} = this.props
		return (
			<ul className="todo-main">
				{todos.map(todo => <Item key={todo.id} {...todo} checkTodo={checkTodo}/>)}
			</ul>
		)
	}
}
