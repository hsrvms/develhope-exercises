// import { useState, useEffect } from "react";
import "./App.css";

function MultiButton() {
	function handleClick(e) {
		console.log(e.target.name);
	}

	return (
		<div>
			<button name="one" onClick={handleClick}>
				One
			</button>
			<button name="two" onClick={handleClick}>
				Two
			</button>
			<button name="three" onClick={handleClick}>
				Three
			</button>
		</div>
	);
}

const App = () => {
	return (
		<div id="app">
			<MultiButton />
		</div>
	);
};

export default App;
