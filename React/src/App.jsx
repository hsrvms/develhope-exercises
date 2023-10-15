import "./App.css";

function AlertClock() {
	function handleClick() {
		const date = new Date(),
			currentHour = date.getHours(),
			currentMin = date.getMinutes();
		window.alert(`Current Time: ${currentHour}:${currentMin}`);
	}

	return (
		<>
			<button onClick={handleClick}>Click Me</button>
		</>
	);
}

const App = () => {
	return (
		<div id="app">
			{/* AlertClock has been already rendered in 26th exercise */}
			<AlertClock />
		</div>
	);
};

export default App;
