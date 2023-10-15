import { useState } from "react";
import "./App.css";

function Counter() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h2>{counter}</h2>
			<button onClick={() => setCounter(counter+1)}>Increment</button>
		</div>
	);
}

const App = () => {
	return (
		<div id="app">
			<Counter />
		</div>
	);
};

export default App;
