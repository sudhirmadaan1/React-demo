export const addTodo = (list, item) => [...list, item]; 

export const generateId = () => Math.floor(Math.random()*1000000000);