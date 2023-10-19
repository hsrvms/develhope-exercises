import "./App.css";

function Color({ item }) {
	return (
		<li
			style={{
				backgroundColor: item.color,
				width: "20rem",
				marginTop: "1rem",
				height: "2rem",
			}}
		>
			{item.name}
		</li>
	);
}

function Colors({ items }) {
	const itemElements = items.map((item) => (
		<Color key={item.id} item={item} />
	));

	return <ul>{itemElements}</ul>;
}

const App = () => {
	const items = [
		{ color: "#FF5733", name: "Red", id: 1 },
		{ color: "#3498DB", name: "Blue", id: 2 },
		{ color: "#2ECC71", name: "Green", id: 3 },
		{ color: "#F1C40F", name: "Yellow", id: 4 },
		{ color: "#FFA726", name: "Orange", id: 5 },
	];

	return (
		<div id="app">
			<Colors items={items} />
		</div>
	);
};

export default App;
