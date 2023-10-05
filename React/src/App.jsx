import Hello from "./components/Hello";
import Message from './components/Message'


//! 14 - Components
//? I can render any component in any other component. All I need to do is importing the component which I want to get;

const App = () => {
	return (
		<div>
      <Message />
      <Message />
      <Message />
			<Hello />
			<Hello />
			<Hello />
			<Hello />
			<Hello />
		</div>
	);
};

export default App;

