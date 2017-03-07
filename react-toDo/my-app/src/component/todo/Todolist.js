import React from 'react';
import {TodoItem} from './Todoitem';

export const TodoList = (props) => {
	return (
	<ul>
      {props.todos.map(todo =>
		<TodoItem key={todo.id} {...todo} />
      )}
    </ul>)
}

TodoList.propTypes = {
	todos: React.PropTypes.array.isRequired
}