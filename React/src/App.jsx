import { useState } from "react";
import "./App.css";

function CounterDisplay({ counter }) {
	return <h2>{counter}</h2>
}

function Counter({ initialValue, amount }) {
	const [counter, setCounter] = useState(initialValue);

	return (
		<div>
			<CounterDisplay counter={counter}/>
			<button onClick={() => setCounter(counter + amount)}>
				Increment
			</button>
			<button onClick={() => setCounter(counter - amount)}>
				Decrement
			</button>
			<button onClick={() => setCounter(initialValue)}>
				Reset
			</button>
		</div>
	);
}

const App = () => {
	return (
		<div id="app">
			<Counter initialValue={2} amount={3} />
		</div>
	);
};

export default App;
