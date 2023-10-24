import { useState } from "react";
import TodoList from './components/TodoList'

import "./App.css";



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

	function handleReset() {
		setInputValue('')
		setItems([]);
	}

	return (
		<div id="app">
			<TodoList items={items} handleSubmit={handleSubmit} handleReset={handleReset} inputValue={inputValue} handleChange={handleChange}/>
		</div>
	);
};

export default App;
