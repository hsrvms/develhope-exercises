const App = () => {
	const hello = "Hello World";
	
	function sayHello(name) {
		
		return <h1>Hello, {name}</h1>;
	}

  //! 04 - JSX
  //? If the name variable contains a JSX expression it returns object as name, like this: "<h1>Hello, [object Object]</h1>"
	// The name variable is a parameter that came from where the function called. When I called this function at 15th row I sent the parameter as JSX Expression. 
	// Actually I don't even what the problem is and what the explanation is. Please more spesific when you write an explanation to an exercise. I could not perfectly understand most of the exercises. Thanks

	return (
		<>
			<h1>{hello}</h1>
      			{sayHello('husrev')}
		</>
	);
};

export default App;
