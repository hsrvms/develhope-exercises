import { useState, useRef } from "react";
import "./App.css";

function Colors({ items }) {
	const itemElements = items.map((item) => (
		<li
			key={item}
			style={{
				backgroundColor: item,
				border: "1px solid red",
				width: "20rem",
				marginTop: "1rem",
				height: "2rem",
			}}
		>
			{item}
		</li>
	));

	return <ul>{itemElements}</ul>;
}

const App = () => {
	const items = ["#fff333", "#252fff", "#010998", "#f99999", "#385943"];

	return (
		<div id="app">
			<Colors items={items} />
		</div>
	);
};

export default App;
