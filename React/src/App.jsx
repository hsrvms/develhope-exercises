import { useState } from "react";
import "./App.css";

function Welcome({ name }) {
	return <h3>Welcome, {name}</h3>
}

function InteractiveWelcome({value, onChange}) {
	return (
		<div>
			<input type="text" value={value} onChange={onChange}/>
			<Welcome name={value}/>
		</div>
	)
}


const App = () => {

	const [nameInput, setNameInput] = useState('')
	function handleChange(e) {
		setNameInput(e.target.value)
	}

	return (
		<div id="app">
			<InteractiveWelcome value={nameInput} onChange={handleChange}/>
		</div>
	);
};

export default App;
