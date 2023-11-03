import { useState } from "react";
import "./App.css";

function Counter() {
	const [counter, setCounter] = useState(0);

	//! setter functions' parameters should be a callback function because they need to assign the expected value using prev state value. 
	
	

	return (
		<div>
			<h2>{counter}</h2>
			<button onClick={() => setCounter(prevCounter => prevCounter+1)}>Increment</button>
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
