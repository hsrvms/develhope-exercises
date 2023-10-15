// import { useState, useEffect } from "react";
import "./App.css";

function MouseClicker() {
	return (
		<>
			<button name="one" onClick={(e) => console.log(e.currentTarget.name)}>
				<img width={24} height={24} />
			</button>
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
