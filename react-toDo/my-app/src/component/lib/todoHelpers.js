export const addTodo = (list, item) => [...list, item]; 

export const generateId = () => Math.floor(Math.random()*1000000000);

export const findById = (id, list) => {
	return list.find(item => item.id === id); 	
}

export const toggleToDo = (todo) => ({...todo, isCompleted: !todo.isCompleted});

export const updateTodos = (list, updateTodo) => {
	var updatedIdx = list.findIndex(item => item.id === updateTodo.id);

	return [
	...list.slice(0, updatedIdx), 
	updateTodo,
	...list.slice(updatedIdx+1)
	]
}

export const removeToDo = (list, id) => {
	const removeIdx = list.findIndex(item => item.id === id);

	return [
		...list.slice(0, removeIdx),
		...list.slice(removeIdx+1)
	]
}

export const filterTodos = (list, routes) => {
	switch(routes){
		case '/active':
		return list.filter(item => !item.isCompleted);
		case '/complete':
		return list.filter(item => item.isCompleted);
		default:
		return list;
	}
}