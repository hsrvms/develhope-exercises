// import { useState, useEffect } from "react";
import "./App.css";

function MouseClicker() {

	// ! I can simply prevent button to print its name attribute to the console by changing from e.currentTarget.name to e.target.name;

	return (
		<>
			<button name="one" onClick={(e) => console.log(e.target.name)}>
				<img src="https://assets2.razerzone.com/images/pnx.assets/40f75b61f5b8ce6fe765383edcd52978/razer-playstation-line-wolverine-v2-pro_500x500.jpg" width={240} height={240} onClick={(e) => console.log(e.target.src)}/>
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
