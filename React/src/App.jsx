// import { useState, useEffect } from "react";
import "./App.css";

function MouseClicker() {
	return (
		<>
			<button name="one" onClick={(e) => console.log(e.target.name)}>One</button>
		</>
	);
}

const App = () => {
	return (
		<div id="app">
			<MouseClicker />
		</div>
	);
};

export default App;
