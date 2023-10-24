import { useState } from "react";
import TodoList from "./components/TodoList";

import "./App.css";

const App = () => {
	const [items, setItems] = useState([
		"Red",
		"Blue",
		"Green",
		"Yellow",
		"Orange",
	]);
	const [inputValue, setInputValue] = useState("");

	function handleSubmit(event) {
		event.preventDefault();
		if (!inputValue) return;
		setItems((prevItems) => {
			return [...prevItems, inputValue];
		});
		setInputValue("");
	}

	function handleChange(event) {
		const value = event.target.value;
		setInputValue(value);
	}

	function handleReset() {
		setInputValue("");
		setItems([]);
	}

	function handleDelete(e) {
		const element = e.target.dataset.color;
		setItems(prevItems => {
			const newItems = prevItems.filter(item => item !== element);
			return newItems;
		})
	}

	return (
		<div id="app">
			<TodoList
				items={items}
				handleSubmit={handleSubmit}
				handleReset={handleReset}
				inputValue={inputValue}
				handleChange={handleChange}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default App;
