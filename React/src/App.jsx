import Welcome from './components/Welcome'



const App = () => {

	return (
		<div>
			<Welcome name="Husrev" age={18}/>
			<Welcome />
		</div>
	);
};

export default App;

