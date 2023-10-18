import { useEffect, useRef } from "react";
import "./App.css";

function FocusableInput() {
	const inputRef = useRef(null);

	useEffect(() => {
		console.log(inputRef, inputRef.current)
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div>
			<input type="text" placeholder="focusedText" ref={inputRef}/>
		</div>
	);
}

const App = () => {
	return (
		<div id="app">
			<FocusableInput />
		</div>
	);
};

export default App;
