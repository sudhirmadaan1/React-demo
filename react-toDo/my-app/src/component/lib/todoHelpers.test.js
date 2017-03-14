import {addTodo, findById, toggleToDo, updateTodos} from './todoHelpers'


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

test('findById should return the expected item from an array', () => {
	const startTodos = [
		{id:1, name:'one', isCompleted:false},
		{id:2, name:'two', isCompleted:false},
		{id:3, name:'three', isCompleted:false}
	]

	const expected = {id:2, name:'two', isCompleted:false};
	const results = findById(2, startTodos);
	expect(results).toEqual(expected);
});

test('toggleToDo should toggle the isComplete prop of a todo', () => {
	const startTodos = {id:2, name:'two', isCompleted:false};
	const expected = {id:2, name:'two', isCompleted:true};

	const results = toggleToDo(startTodos);
	expect(results).toEqual(expected);
});

test('toggleTodo should not mutate the original toDo', () => {
	const startTodos = {id:2, name:'two', isCompleted:false}; 
	const results = toggleToDo(startTodos);
	expect(results).not.toBe(startTodos);
});

test('updateTodo should update an item by id', () => {
	const startTodos = [
		{id:1, name:'one', isCompleted:false},
		{id:2, name:'two', isCompleted:false},
		{id:3, name:'three', isCompleted:false}
	]
	const updateTodo = {id:2, name:'two', isCompleted:true};
	const expectedTodo = [
		{id:1, name:'one', isCompleted:false},
		{id:2, name:'two', isCompleted:true},
		{id:3, name:'three', isCompleted:false}
	]

	const results = updateTodos(startTodos, updateTodo);
	
	expect(expectedTodo).toEqual(results);
});