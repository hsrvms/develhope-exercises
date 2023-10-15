import { useState, useEffect } from "react";
import "./App.css";

function Clock() {

	const [date, setDate] = useState(new Date()) 


	useEffect(() => {
		setInterval(() => {
			setDate(new Date())
		}, 1000)
	}, [date])

	return <h2>{date.toUTCString()}</h2>
}


const App = () => {
	return (
		<div id="app">
			<Clock />
		</div>
	);
};

export default App;
