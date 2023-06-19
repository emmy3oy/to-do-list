
// Constructor class for Todo
class Todo {
    constructor(description) {
    this.description = description;
    this.completed = false;
}
}

// Function to add todo
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

if (todoText !== '') {
    const newTodo = new Todo(todoText);
    todos.push(newTodo);
    todoInput.value = '';
    renderTodos();
}
}

// Function to render todos
function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
    <input type="checkbox" onclick="toggleCompleted(${index})" ${todo.completed ? 'checked' : ''}>
    <span class="${todo.completed ? 'completed' : ''}">${todo.description}</span>
    <button onclick="removeTodo(${index})">Delete</button>
`;
todoList.appendChild(todoItem);
});
}

// Function to toggle todo completed status
function toggleCompleted(index) {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

// Function to remove todo
function removeTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Array to store todos
const todos = [];

// Render initial todos
renderTodos();