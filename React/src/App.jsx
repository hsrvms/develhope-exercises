import { useState } from "react";

import "./App.css";

function TodoList({items, inputValue, handleChange, handleSubmit}) {
	return (
		<div>
			<ul>
				{items.map((item) => <li key={item}>{item}</li>)}
			</ul>
			<form onSubmit={handleSubmit}>
				<input type="text" value={inputValue} onChange={handleChange}/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
}

const App = () => {
	const [items, setItems] = useState([
		"Red",
		"Blue",
		"Green",
		"Yellow",
		"Orange",
	]);
	const [inputValue, setInputValue] = useState('');

	function handleSubmit(event) {
		event.preventDefault()
		setItems((prevItems) => {
			return [...prevItems, inputValue]
		});
		setInputValue('')
	}

	function handleChange(event) {
		const value = event.target.value;
		setInputValue(value);
	}

	return (
		<div id="app">
			<TodoList items={items} handleSubmit={handleSubmit} inputValue={inputValue} handleChange={handleChange}/>
		</div>
	);
};

export default App;
