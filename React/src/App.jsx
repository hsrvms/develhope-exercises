import Hello from "./components/Hello";

//! 13 - Components
//? I can use as much components as I want in any other component. They are something like html tags but not the same thing. The only difference is Components contains JSX Expressions(html tags and javascript together)

const App = () => {
	return (
		<div>
			<Hello />
			<Hello />
			<Hello />
			<Hello />
			<Hello />
		</div>
	);
};

export default App;

