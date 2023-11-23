import Welcome from './components/Welcome'



const App = () => {
	const name = <strong>Husrev</strong>
	return (
		<div>
			<Welcome name={name} age={18}/>
			<Welcome />
		</div>
	);
};

export default App;

