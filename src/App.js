import React, { useState } from 'react';
import './App.css';

function Todos({ todo, index }) {
	return <div className="todo">{todo.text}</div>;
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

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, index) => <Todos index={index} key={index} todo={todo} />)}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
}

export default App;
