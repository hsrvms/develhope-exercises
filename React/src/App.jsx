import "./App.css";

function AlertClock({ clickHandler }) {
	
	return (
		<>
			<button onClick={clickHandler}>Click Me</button>
		</>
	);
}

const App = () => {

	function handleClick() {
		const date = new Date(),
			currentHour = date.getHours(),
			currentMin = date.getMinutes();
		window.alert(`Current Time: ${currentHour}:${currentMin}`);
	}

	return (
		<div id="app">
			<AlertClock clickHandler={handleClick}/>
		</div>
	);
};

export default App;
