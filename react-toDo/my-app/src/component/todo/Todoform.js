import React from 'react';

export const TodoForm = (props) => {
	return (
	<form onSubmit={props.handleSubmit}>
    	<input type="text" onChange={props.handleInputChange} value={props.currentTodo}/>
    </form>)
}

TodoForm.propTypes = {
	currentTodo: React.PropTypes.string.isRequired,
	handleInputChange: React.PropTypes.func.isRequired
}