import Welcome from './components/Welcome'



const App = () => {

	return (
		<div>
			<Welcome name={"Husrev"} age={17}/>
			<Welcome name={"Elrond"} age={29}/>
			<Welcome />
		</div>
	);
};

export default App;

