const App = () => {
	//! 01 - JSX
	const hello = "Hello World";

	//! 02 - JSX
	//? This function returns an h1 tag according to exercises' explanation or I misunderstood it. I think we don't need to return any tags in React;
	function sayHello(name) {
		return `<h1>Hello, ${name}</h1>`;
	}

	return (
		<>
			<h1>{hello}</h1>
		</>
	);
};

export default App;
