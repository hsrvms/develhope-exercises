import { useState, useRef } from "react";
import "./App.css";

function Counter({ count, handleClick }) {
	return (
		<div>
			<h3>{count}</h3>
			<button name="decrease" onClick={handleClick}>
				-
			</button>
			<button name="increase" onClick={handleClick}>
				+
			</button>
		</div>
	);
}

const App = () => {
	const eventRef = useRef(null);
	console.log(eventRef)
	const [count, setCount] = useState(0);
	function handleClick(event) {
		const btn = event.target.name;
		setCount((prevCount) => {
			return btn === "decrease" ? prevCount - 1 : prevCount + 1;
		});
		eventRef.current = btn === "decrease" ? "down" : "up";
	}

	return (
		<div id="app">
			<Counter handleClick={handleClick} count={count} />
		</div>
	);
};

export default App;
