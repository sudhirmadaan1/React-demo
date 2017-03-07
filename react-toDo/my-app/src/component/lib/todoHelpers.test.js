import {addTodo} from './todoHelpers'


test('addTodo should add the passed todo to the list', () =>{
	const startTodos = [
		{id:1, name:'one', isCompleted:false},
		{id:2, name:'two', isCompleted:false}
	]

	const newTodo = {id:3, name:'three', isCompleted:false}

	const expected = [
		{id:1, name:'one', isCompleted:false},
		{id:2, name:'two', isCompleted:false},
		{id:3, name:'three', isCompleted:false}
	]

	const results = addTodo(startTodos, newTodo);

	expect(results).toEqual(expected);
});