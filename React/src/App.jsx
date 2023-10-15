import { useState } from "react";
import "./App.css";

function Counter() {
	const [counter, setCounter] = useState(0);

	//! setter functions' parameters should be an immediate value because they need to assign that value to the state variable which is "counter" in this case. Every time I click the button the counter should increment 1 by 1, but I dont need to call a function for this again.
	

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
