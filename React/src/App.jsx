import Welcome from './components/Welcome'



const App = () => {

	return (
		<div>
			<Welcome name={"Husrev"} age={17}/>
			<Welcome name={"Elrond"} age={29}/>
			<Welcome name={"Harmony"} age={85}/>
			<Welcome name={"John"} age={33}/>
		</div>
	);
};

export default App;

