import React from 'react';
import {partial} from '../lib/utils'

export const TodoItem = (props) => {
	const handleRemove = partial(props.handleRemove, props.id)
	return (
		<li>
			<input type="checkbox" onChange={() => props.handleToggle(props.id)} defaultChecked={props.isCompleted}/>{props.name}
			<a href="#" className="remove" onClick={handleRemove}>X</a>
        </li>
	)
} 

TodoItem.propTypes = {
	name:React.PropTypes.string.isRequired,
	isCompleted:React.PropTypes.bool,
	id:React.PropTypes.number.isRequired
}