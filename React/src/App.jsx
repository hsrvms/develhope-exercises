import { useState } from "react";
import "./App.css";

function CounterDisplay({ counter }) {
	return <h2>{counter}</h2>
}

function Counter({ initialValue, incrementAmount }) {
	const [counter, setCounter] = useState(initialValue);

	return (
		<div>
			<CounterDisplay counter={counter}/>
			<button onClick={() => setCounter(counter + incrementAmount)}>
				Increment
			</button>
		</div>
	);
}

const App = () => {
	return (
		<div id="app">
			<Counter initialValue={2} incrementAmount={3} />
		</div>
	);
};

export default App;
