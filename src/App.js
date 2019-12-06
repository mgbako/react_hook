import React, { useState } from 'react';
import './App.css';

function Todos({ todo, index, completeTodo, removeTodo }) {
	return (
		<div className="todo">
			<span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.text}</span>
			<button className="btn btn-sm btn-primary" onClick={() => completeTodo(index)}>
				Complete
			</button>
			<button className="btn btn-sm btn-danger" onClick={() => removeTodo(index)}>
				X
			</button>
		</div>
	);
}

function TodoForm({ addTodo }) {
	const [ value, setValue ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;

		addTodo(value);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				placeholder="Add todo."
				autoFocus
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		</form>
	);
}

function App() {
	const [ todos, setTodos ] = useState([
		{ text: 'Learn about Reactjs', isCompleted: false },
		{ text: 'Learn about Angular', isCompleted: false },
		{ text: 'Learn about Vuejs', isCompleted: false },
		{ text: 'Learn about Ionicjs', isCompleted: false }
	]);

	const addTodo = (text) => {
		const newTodo = [ ...todos, { text } ];
		setTodos(newTodo);
	};

	const completeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos[index].isCompleted = !newTodos[index].isCompleted;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodo = [ ...todos ];
		newTodo.splice(index, 1);
		setTodos(newTodo);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => (
					<Todos index={index} key={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
