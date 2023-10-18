import { useEffect, useRef } from "react";
import "./App.css";

function Component() {
	const isMountedRef = useRef(null);

	useEffect(() => {
		isMountedRef.current = true;
	}, []);

	console.log(isMountedRef);

	return <h3>Component</h3>;
}

const App = () => {
	return (
		<div id="app">
			<Component />
		</div>
	);
};

export default App;
