// import { useState, useEffect } from "react";
import "./App.css";

function MouseClicker() {

	// ! If I say the buttons' onClick event to print e.currentTarget.name it wil print its name when I click inside of the buttons' borders. So, because img tag is in the button, it will print buttons' name when I click the img tag.

	return (
		<>
			<button name="one" onClick={(e) => console.log(e.currentTarget.name)}>
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
