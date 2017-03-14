export const addTodo = (list, item) => [...list, item]; 

export const generateId = () => Math.floor(Math.random()*1000000000);

export const findById = (id, list) => list.find(item => item.id === id); 

export const toggleToDo = (todo) => ({...todo, isCompleted: !todo.isCompleted});

export const updateTodos = (list, updateTodo) => {
	var updatedIdx = list.findIndex(item => item.id === updateTodo.id);

	return [
	...list.slice(0, updatedIdx), 
	updateTodo,
	...list.slice(updatedIdx+1)
	]
}